import { createContext, useContext, useMemo, useState } from "react";
import { AuthContextProps, AuthProviderProps, ILoginUser, IRegistrationUser, IProfile } from ".";
import { axiosInstance } from "../../services/axiosInstance";

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

    const loginUser = async (params: ILoginUser) => {
        return axiosInstance.post(
            '/sign-in', { ...params })
            .then(() => {
                return getProfile()
            })
            .catch((error) => {
                throw error;
            })
    }

    const registrationUser = async (params: IRegistrationUser) => {
        return axiosInstance.post(
            '/sign-up', {
            ...params
        })
            .then(() => {
                return getProfile();
            })
            .catch((error) => {
                throw error;
            })
    }

    const getProfile = async (): Promise<void> => {
        return axiosInstance.get(
            '/profile')
            .then(({ data }: { data: IProfile }) => {
                return setProfile(data)
            })
            .catch((error) => {
                throw error;
            })
    }

    return (
        <AuthContext.Provider value={{ profile, loginUser, registrationUser, setProfile, getProfile }}>
            {props.children}
        </AuthContext.Provider>
    );
};