import { FC } from "react";
import { Layout } from "@layouts/layout";
import { LayoutMain } from "@layouts/layout-main";
import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "@pages/profile";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<LayoutMain />}>
          <Route path="authorization" element={<Profile />} />
          <Route path="*" element={<Navigate to="/profile" />} />
        </Route>
        <Route index element={<Navigate to="/profile" />} />
      </Route>
    </Routes>
  );
};
