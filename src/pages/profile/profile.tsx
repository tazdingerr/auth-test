import { useTelegramAuth } from "@hooks/use-telegram-login";
import { IProfile, useAuth } from "@providers/auth-provider";
import { useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";

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
  const { telegramUser, Button } = useTelegramAuth();

  const { profile, logoutProfile } = useAuth();

  useEffect(() => {
    console.log("telegramUser", telegramUser);
  }, []);
  return (
    profile && (
      <div>
        {Button}
        {Object.keys(profile).map((key) => (
          <div key={key}>
            {key}: {renderValue(profile[key as keyof IProfile], key as keyof IProfile)}
          </div>
        ))}
        <AwesomeButton onPress={() => logoutProfile()} type="primary">
          Logout
        </AwesomeButton>
      </div>
    )
  );
};
