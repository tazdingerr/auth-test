import { useAuth } from "@providers/auth-provider";
import { AppRoutes } from "@services/router";
import { AppRoutesAuthorization } from "@services/router/router-authorization";
import { FC, useLayoutEffect } from "react";

export const LayoutApp: FC = () => {
  const { profile, getProfile } = useAuth();

  useLayoutEffect(() => {
    getProfile();
  }, []);

  return profile ? (
    <AppRoutes/>
  ) : (
    <AppRoutesAuthorization/>
  );
};
