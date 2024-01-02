import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AuthContextProps, AuthProviderProps, ISignInProfile, ISignUpProfile, IProfile } from ".";
import { axiosInstance } from "@services/axiosInstance";

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

  const signInProfile = useCallback(async (params: ISignInProfile) => {
    return axiosInstance
      .post("/sign-in", { ...params })
      .then(() => {
        return getProfile();
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const signUpProfile = useCallback(async (params: ISignUpProfile) => {
    return axiosInstance
      .post("/sign-up", {
        ...params,
      })
      .then(() => {
        return getProfile();
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const googleProfile = useCallback(async () => {
    return axiosInstance
      .get("/api/auth/google")
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  }, []);

  const logoutProfile = useCallback(async () => {
    return axiosInstance
      .get("/logout")
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  }, []);

  const getProfile = useCallback(async (): Promise<void> => {
    return axiosInstance
      .get("/profile")
      .then(({ data }: { data: IProfile }) => {
        return setProfile(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <AuthContext.Provider value={{ profile, signInProfile, signUpProfile, logoutProfile, googleProfile, setProfile, getProfile }}>
      {props.children}
    </AuthContext.Provider>
  );
};
