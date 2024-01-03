import { useAxios } from "@providers/axios-provider";
import { useLoading } from "@providers/loading-provider";
import { createContext, useCallback, useContext, useReducer } from "react";
import { IProfile, ProfileContextProps, ProfileProviderProps, initialProfile } from ".";

const ProfileContext = createContext<ProfileContextProps | null>(null);

/**
 * Хук авторизации
 */
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<ProfileProviderProps> = (props) => {
  const [profile, setProfile] = useReducer(
    (profile: IProfile, newDetails: Partial<IProfile>) => ({ ...profile, ...newDetails }),
    initialProfile
  );
  const { toggleLoading } = useLoading();
  const { axiosInstance } = useAxios();

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
        setProfile(initialProfile);
        throw error;
      });
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        getProfile,
        setProfile,
        profile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
