import { LayoutApp } from "@layouts/layout-app";
import { AuthProvider } from "@providers/auth-provider";
import { LoadingProvider } from "@providers/loading-provider";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <LayoutApp />
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}
