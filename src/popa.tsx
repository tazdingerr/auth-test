import { LayoutApp } from "@layouts/layout-app";
import { AuthProvider } from "@providers/auth-provider";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LayoutApp />
      </AuthProvider>
    </BrowserRouter>
  );
}
