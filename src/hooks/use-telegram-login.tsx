import { useAuth } from "@providers/auth-provider";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

interface UseTelegramAuthProps {
  botName: string;
}
export const useTelegramAuth = (props: UseTelegramAuthProps) => {
  const { authTelegramProfile } = useAuth();

  const TelegramButton = (
    <TelegramLoginButton
      botName={props.botName}
      dataOnauth={(user: TelegramUser) => authTelegramProfile({ chatId: String(user.id) })}
    />
  );

  return {
    TelegramButton,
  };
};

export default useTelegramAuth;
