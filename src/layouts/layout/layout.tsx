import { LoginForm } from "@components/login-form";
import { LayoutApp } from "@layouts/layout-app";
import { useAuth } from "@providers/auth-provider";
import { FC, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  const { profile, getProfile } = useAuth();

  useLayoutEffect(() => {
    getProfile();
  }, []);
  
  return profile ? (
    <LayoutApp>
      <Outlet />
    </LayoutApp>
  ) : (
    <LoginForm />
  );
};
