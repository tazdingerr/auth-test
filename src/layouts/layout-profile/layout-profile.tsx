import React from "react";
import { Outlet } from "react-router-dom";
import { InnerContainer, MainContainer } from ".";

export const LayoutProfile: React.FC = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Outlet />
      </InnerContainer>
    </MainContainer>
  );
};
