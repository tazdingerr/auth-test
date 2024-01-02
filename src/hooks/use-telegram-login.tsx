import { useState } from "react";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

export const useTelegramAuth = () => {
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);

  const Button = <TelegramLoginButton botName="test_petproj1_bot" dataOnauth={(user: TelegramUser) => setTelegramUser(user)} />;

  return {
    telegramUser,
    Button,
  };
};

export default useTelegramAuth;
