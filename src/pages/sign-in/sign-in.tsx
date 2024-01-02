/* eslint-disable react-refresh/only-export-components */
import { FC, useReducer } from "react"
import { ISignInProfile, useAuth } from "@providers/auth-provider";

const initialProfile: ISignInProfile = {
    login: "",
    password: "",
}
export const SignIn: FC = () => {
    const { signInProfile } = useAuth();
    const [profile, setProfile] = useReducer(
        (profile: ISignInProfile, newDetails: Partial<ISignInProfile>) => ({ ...profile, ...newDetails }),
        initialProfile
    )

    const clearForm = () => {
        setProfile(initialProfile)
    }
    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signInProfile(profile);
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
            <button> Sign-in </button>
        </form>
    )
}