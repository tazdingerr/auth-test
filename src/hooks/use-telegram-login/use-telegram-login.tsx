import { useAuth } from "@providers/auth-provider";
import { TelegramUser } from "telegram-login-button";
import { StyledAwesomeButton, StyledTelegramLoginButton } from ".";

interface UseTelegramAuthProps {
  botName: string;
}
export const useTelegramAuth = (props: UseTelegramAuthProps) => {
  const { authTelegramProfile } = useAuth();

  const TelegramButton = (
    <StyledAwesomeButton onPress={() => {}} type="primary">
      <StyledTelegramLoginButton
        botName={props.botName}
        dataOnauth={(user: TelegramUser) => authTelegramProfile({ chatId: String(user.id) })}
      />
    </StyledAwesomeButton>
  );

  return {
    TelegramButton,
  };
};
