import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutAuthorization } from "@layouts/layout-authorization";
import { SignIn } from "@pages/sign-in";
import { SignUp } from "@pages/sign-up";

export const AppRoutesAuthorization: FC = () => {
  return (
    <Routes>
      <Route element={<LayoutAuthorization />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/sign-in" />} />
        <Route index element={<Navigate to="/sign-in" />} />
      </Route>
    </Routes>
  );
};
