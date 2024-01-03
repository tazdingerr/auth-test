import { AuthProvider } from "@providers/auth-provider";
import { AxiosProvider } from "@providers/axios-provider";
import { LoadingProvider } from "@providers/loading-provider";
import { LayoutApp } from "@layouts/layout-app";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <AxiosProvider>
          <LoadingProvider>
            <AuthProvider>
              <LayoutApp />
            </AuthProvider>
          </LoadingProvider>
        </AxiosProvider>
      </BrowserRouter>
    </LocalizationProvider>
  );
}
