import { useTelegramAuth } from "@hooks/use-telegram-login";
import { IProfile, useAuth } from "@providers/auth-provider";
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
  const { TelegramButton } = useTelegramAuth({ botName: "test_petproj1_bot" });
  const { profile, logoutProfile } = useAuth();

  return (
    profile && (
      <div>
        {!profile.telegram_verified && TelegramButton}
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
