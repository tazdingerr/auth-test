import axios from "axios";
import { AxiosContextProps, AxiosProviderProps } from ".";
import { createContext, useContext } from "react";

const AxiosContext = createContext<AxiosContextProps | null>(null);

/**
 * Хук работы с axios
 */
export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};

/**
 * Провайдер axios
 */
export const AxiosProvider: React.FC<AxiosProviderProps> = (props) => {
  const axiosInstance = axios.create({
    baseURL: "https://waifu.jenesei.ru/api",
    withCredentials: true,
  });

  const currentDomain = window.location.host;

  const axiosRefresh = async () => {
    return await axiosInstance
      .get("/refresh")
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };
  return <AxiosContext.Provider value={{ currentDomain, axiosInstance, axiosRefresh }}>{props.children}</AxiosContext.Provider>;
};
