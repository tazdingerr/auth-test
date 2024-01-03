import { FC } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LayoutAuthorizationButtonContainer, LayoutAuthorizationWrapper } from "./layout-authorization.styles";
import { AwesomeButton } from "react-awesome-button";
import { useAuth } from "@providers/auth-provider";

export const LayoutAuthorization: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleProfile } = useAuth();
  
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
        <Link to={googleProfile}>
          <AwesomeButton type="primary">
            {location.pathname !== "/sign-up" ? "Sign in with Google" : "Sign up with Google"}
          </AwesomeButton>
        </Link>
      </LayoutAuthorizationButtonContainer>
    </LayoutAuthorizationWrapper>
  );
};
