import axios from "axios";

export const accessTokenName = "Token";

export const axiosInstance = axios.create({
    baseURL: "https://waifu.jenesei.ru/api",
    withCredentials: true,
});


axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

export const axiosRefresh = async () => {
    return await axiosInstance.get(
        '/refresh')
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
};