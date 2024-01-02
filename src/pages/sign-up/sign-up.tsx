/* eslint-disable react-refresh/only-export-components */
import { FC, useReducer } from "react";
import { ISignUpProfile, useAuth } from "@providers/auth-provider";
import { SignUpFormContainer } from ".";
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";

const initialProfile: ISignUpProfile = {
  login: "",
  password: "",
  email: "",
  first_name: "",
};
export const SignUp: FC = () => {
  const { signUpProfile } = useAuth();
  const [profile, setProfile] = useReducer(
    (profile: ISignUpProfile, newDetails: Partial<ISignUpProfile>) => ({ ...profile, ...newDetails }),
    initialProfile
  );

  const clearForm = () => {
    setProfile(initialProfile);
  };
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUpProfile(profile);
    clearForm();
  };
  return (
    <SignUpFormContainer onSubmit={submit}>
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
      <TextField
        onChange={(e) => setProfile({ email: e.target.value })}
        value={profile.email}
        label="Email"
        variant="outlined"
        type="email"
        required
      />
      <TextField
        onChange={(e) => setProfile({ first_name: e.target.value })}
        value={profile.first_name}
        label="First name"
        variant="outlined"
        required
      />
      <AwesomeButton type="secondary">Sign-Up</AwesomeButton>
    </SignUpFormContainer>
  );
};
