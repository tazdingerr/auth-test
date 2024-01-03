import { AuthProvider } from '@providers/auth-provider';
import { AxiosProvider } from '@providers/axios-provider';
import { LoadingProvider } from '@providers/loading-provider';
import { LayoutApp } from '@layouts/layout-app';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <AxiosProvider>
        <LoadingProvider>
          <AuthProvider>
            <LayoutApp />
          </AuthProvider>
        </LoadingProvider>
      </AxiosProvider>
    </BrowserRouter>
  );
}
