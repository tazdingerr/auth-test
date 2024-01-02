/* eslint-disable react-refresh/only-export-components */
import { FC, useReducer } from "react";
import { ISignInProfile, useAuth } from "@providers/auth-provider";
import { AwesomeButton } from "react-awesome-button";
import TextField from "@mui/material/TextField";
import { SignInFormContainer } from ".";

const initialProfile: ISignInProfile = {
  login: "",
  password: "",
};
export const SignIn: FC = () => {
  const { signInProfile } = useAuth();
  const [profile, setProfile] = useReducer(
    (profile: ISignInProfile, newDetails: Partial<ISignInProfile>) => ({ ...profile, ...newDetails }),
    initialProfile
  );

  const clearForm = () => {
    setProfile(initialProfile);
  };
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInProfile(profile);
    clearForm();
  };
  return (
    <SignInFormContainer onSubmit={submit}>
      <TextField
        onChange={(e) => setProfile({ login: e.target.value })}
        value={profile.login}
        label="Login"
        variant="outlined"
        required
      />
      <TextField
        onChange={(e) => setProfile({ password: e.target.value })}
        value={profile.password}
        label="Password"
        variant="outlined"
        type="password"
        required
      />
      <AwesomeButton type="primary">Sign-In</AwesomeButton>
    </SignInFormContainer>
  );
};
