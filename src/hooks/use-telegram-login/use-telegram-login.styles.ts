import { AwesomeButton } from "react-awesome-button";
import styled from "styled-components";
import TelegramLoginButton from "telegram-login-button";

export const StyledTelegramLoginButton = styled(TelegramLoginButton)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledAwesomeButton = styled(AwesomeButton)`
  height: 100%;
  display: flex;
  align-items: center;
  --button-primary-color: #54a9eb;
  --button-primary-color-hover: #54a9eb;
  --button-primary-color-active: #54a9eb;
  --button-primary-color-light: #54a9eb;
  --button-primary-color-dark: #54a9eb;
`;
