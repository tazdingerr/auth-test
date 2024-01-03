import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutProfileWrapper } from ".";

export const LayoutProfile: React.FC = () => {
  return (
    <LayoutProfileWrapper>
      <Outlet />
    </LayoutProfileWrapper>
  );
};
