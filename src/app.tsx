import { AuthProvider } from "@providers/auth-provider";
import { AxiosProvider } from "@providers/axios-provider";
import { LoadingProvider } from "@providers/loading-provider";
import { LayoutApp } from "@layouts/layout-app";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ProfileProvider } from "@providers/profile-provider";

export function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <AxiosProvider>
          <LoadingProvider>
            <ProfileProvider>
              <AuthProvider>
                <LayoutApp />
              </AuthProvider>
            </ProfileProvider>
          </LoadingProvider>
        </AxiosProvider>
      </BrowserRouter>
    </LocalizationProvider>
  );
}
