/* eslint-disable react-refresh/only-export-components */
import { FC, useReducer } from "react"
import { ILoginUser, useAuth } from "@providers/auth-provider";

const initialProfile: ILoginUser = {
    login: "",
    password: "",
}
export const LoginForm: FC = () => {
    const { loginUser } = useAuth();

    const [profile, setProfile] = useReducer(
        (profile: ILoginUser, newDetails: Partial<ILoginUser>) => ({ ...profile, ...newDetails }),
        initialProfile
    )

    const clearForm = () => {
        setProfile(initialProfile)
    }
    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        loginUser(profile);
        clearForm();
    };
    return (
        <form onSubmit={submit}>
            <input
                onChange={e => setProfile({ login: e.target.value })}
                value={profile.login}
                type="text"
                placeholder="Login"
                required
            />
            <input
                onChange={e => setProfile({ password: e.target.value })}
                value={profile.password}
                type="password"
                placeholder="Password"
                required
            />
            <button> Sign-up </button>
        </form>
    )
}