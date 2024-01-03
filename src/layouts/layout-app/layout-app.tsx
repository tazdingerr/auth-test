import { AppRoutes } from "@services/router";
import { FC, useLayoutEffect } from "react";
import { LayoutAppWrapper } from ".";
import { useProfile } from "@providers/profile-provider";
import { AppRoutesAuthorization } from "@services/router/router-authorization";

export const LayoutApp: FC = () => {
  const { profile, getProfile } = useProfile();

  useLayoutEffect(() => {
    getProfile();
  }, []);

  return (
    <LayoutAppWrapper>
      {profile?.id ? <AppRoutes /> : <AppRoutesAuthorization />}
    </LayoutAppWrapper>
  );
};
