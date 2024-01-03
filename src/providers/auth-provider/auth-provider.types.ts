import { IAuthTelegramProfile, ISignInProfile, ISignUpProfile } from "@providers/profile-provider";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextProps {
  signInProfile: (params: ISignInProfile) => Promise<void>;
  signUpProfile: (params: ISignUpProfile) => Promise<void>;
  authTelegramProfile: (params: IAuthTelegramProfile) => Promise<void>;
  unAuthTelegramProfile: () => Promise<void>;
  refreshProfile: () => Promise<boolean>
  logoutProfile: () => Promise<void>;
  googleProfile: string;
}
