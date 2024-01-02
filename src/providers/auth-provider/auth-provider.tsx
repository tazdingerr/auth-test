import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AuthContextProps, AuthProviderProps, ISignInProfile, ISignUpProfile, IProfile } from ".";
import { axiosInstance } from "@services/axiosInstance";
import { useLoading } from "@providers/loading-provider";

const AuthContext = createContext<AuthContextProps | null>(null);

/**
 * Хук авторизации
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

/**
 * Провайдер авторизации
 */
export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [_profile, setProfile] = useState<IProfile | null>(null);
  const profile = useMemo(() => _profile, [_profile]);
  const { toggleLoading } = useLoading();
  const googleProfile = axiosInstance.defaults.baseURL + "/auth/google";

  const signInProfile = useCallback(async (params: ISignInProfile) => {
    toggleLoading({ checked: true });
    return axiosInstance
      .post("/sign-in", { ...params })
      .then(() => {
        toggleLoading({ checked: false });
        getProfile();
      })
      .catch((error) => {
        toggleLoading({ checked: false });
        throw error;
      });
  }, []);

  const signUpProfile = useCallback(async (params: ISignUpProfile) => {
    toggleLoading({ checked: true });
    return axiosInstance
      .post("/sign-up", {
        ...params,
      })
      .then(() => {
        toggleLoading({ checked: false });
        getProfile();
      })
      .catch((error) => {
        toggleLoading({ checked: false });
        throw error;
      });
  }, []);

  const logoutProfile = useCallback(async () => {
    toggleLoading({ checked: true });
    return axiosInstance
      .get("/logout")
      .then(() => {
        toggleLoading({ checked: false });
        setProfile(null);
      })
      .catch((error) => {
        toggleLoading({ checked: false });
        throw error;
      });
  }, []);

  const getProfile = useCallback(async (): Promise<void> => {
    toggleLoading({ checked: true });
    return axiosInstance
      .get("/profile")
      .then(({ data }: { data: IProfile }) => {
        toggleLoading({ checked: false });
        setProfile(data);
      })
      .catch((error) => {
        toggleLoading({ checked: false });
        setProfile(null);
        throw error;
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{ profile, signInProfile, signUpProfile, logoutProfile, googleProfile, setProfile, getProfile }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
