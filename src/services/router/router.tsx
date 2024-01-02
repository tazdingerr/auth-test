import { FC } from "react";
import { LayoutProfile } from "@layouts/layout-profile";
import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "@pages/profile";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<LayoutProfile />}>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/profile" />} />
        <Route index element={<Navigate to="/profile" />} />
      </Route>
    </Routes>
  );
};
