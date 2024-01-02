/* eslint-disable react-refresh/only-export-components */
import { FC, useReducer } from "react"
import { ISignUpProfile, useAuth } from "@providers/auth-provider";

const initialProfile: ISignUpProfile = {
    login: "",
    password: "",
    email: "",
    first_name: ""
}
export const SignUp: FC = () => {
    const { signUpProfile } = useAuth();
    const [profile, setProfile] = useReducer(
        (profile: ISignUpProfile, newDetails: Partial<ISignUpProfile>) => ({ ...profile, ...newDetails }),
        initialProfile
    )

    const clearForm = () => {
        setProfile(initialProfile)
    }
    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signUpProfile(profile);
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
            <input
                onChange={e => setProfile({ email: e.target.value })}
                value={profile.email}
                type="email"
                placeholder="email"
                required
            />
            <input
                onChange={e => setProfile({ first_name: e.target.value })}
                value={profile.first_name}
                type="text"
                placeholder="first_name"
                required
            />
            <button> Sign-up </button>
        </form>
    )
}