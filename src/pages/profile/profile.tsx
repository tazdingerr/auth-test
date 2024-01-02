import { IProfile, useAuth } from "@providers/auth-provider";
import { AwesomeButton } from "react-awesome-button";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

const renderValue = (value: string | boolean | Date, key: keyof IProfile) => {
  if (key == "avatar_url") {
    return <img src={`${value}`} alt="avatar" width={200} />;
  }
  if (value instanceof Date) {
    return value.toLocaleString();
  }
  return value;
};

export const Profile = () => {
  const { profile, logoutProfile } = useAuth();

  if (profile) {
    return (
      <div>
        <TelegramLoginButton botName="test" dataOnauth={(profile: TelegramUser) => console.log(profile)} />
        {Object.keys(profile).map((key) => (
          <div key={key}>
            {key}: {renderValue(profile[key as keyof IProfile], key as keyof IProfile)}
          </div>
        ))}
        <AwesomeButton onPress={() => logoutProfile()} type="primary">
          Logout
        </AwesomeButton>
      </div>
    );
  } else {
    return <div>Пользователь не авторизован</div>;
  }
};
