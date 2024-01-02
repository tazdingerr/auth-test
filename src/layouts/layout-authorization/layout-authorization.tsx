import { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LayoutAuthorizationButtonContainer, LayoutAuthorizationWrapper } from "./layout-authorization.styles";
import { AwesomeButton } from "react-awesome-button";

export const LayoutAuthorization: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <LayoutAuthorizationWrapper>
      <Outlet />
      <LayoutAuthorizationButtonContainer>
        {location.pathname !== "/sign-in" && (
          <AwesomeButton onPress={() => navigate("/sign-in")} type="primary">
            Sign-In
          </AwesomeButton>
        )}
        {location.pathname !== "/sign-up" && (
          <AwesomeButton onPress={() => navigate("/sign-up")} type="secondary">
            Sign-Up
          </AwesomeButton>
        )}
        <AwesomeButton type="primary">Sign in with Google</AwesomeButton>
      </LayoutAuthorizationButtonContainer>
    </LayoutAuthorizationWrapper>
  );
};
