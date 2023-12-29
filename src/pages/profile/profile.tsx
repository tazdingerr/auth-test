import { IProfile, useAuth } from "@providers/auth-provider";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

export const Profile = () => {
  const { profile } = useAuth();

  if (profile) {
    return (
      <div>
        <TelegramLoginButton botName="test" dataOnauth={(user: TelegramUser) => console.log(user)} />
        {Object.keys(profile).map((key) => (
          <div key={key}>
            {key}: {renderValue(profile[key as keyof IProfile], key as keyof IProfile)}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Пользователь не авторизован</div>;
  }
};

const renderValue = (value: string | boolean | Date, key: keyof IProfile) => {
  if (key == "avatar_url") {
    return <img src={`${value}`} alt="avatar" width={200} />;
  }
  if (value instanceof Date) {
    return value.toLocaleString();
  }
  return value;
};
