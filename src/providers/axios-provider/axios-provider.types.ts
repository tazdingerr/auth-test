import { AxiosInstance } from "axios";

export interface AxiosProviderProps {
  children: React.ReactNode;
}

export interface AxiosContextProps {
  axiosRefresh: () => Promise<boolean>;
  axiosInstance: AxiosInstance;
  currentDomain: string
}
