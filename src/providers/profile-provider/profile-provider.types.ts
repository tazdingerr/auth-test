export interface IProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  login: string;
  avatar_url: string;
  isBlocked: boolean;
  role: string;
  created_at: Date;
  updated_at: Date;
  telegram_verified: boolean;
}

export interface ISignInProfile {
  login: string;
  password: string;
}

export interface ISignInProfileResponse {
  status: number;
  message: string;
}

export interface ISignUpProfile {
  email: string;
  first_name: string;
  last_name?: string;
  login: string;
  password: string;
}
export interface IAuthTelegramProfile {
  chatId: string;
}

export const initialProfile: IProfile = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  login: "",
  avatar_url: "",
  isBlocked: false,
  role: "",
  created_at: new Date(),
  updated_at: new Date(),
  telegram_verified: false,
};

export interface ProfileProviderProps {
  children: React.ReactNode;
}

export interface ProfileContextProps {
  getProfile: () => Promise<void>;
  setProfile: React.Dispatch<Partial<IProfile>>
  profile: IProfile | null;
}
