import axios from "axios";

const apiInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:3000/api'
});

apiInstance.interceptors.request.use((config) => {
    return config;
});

export default apiInstance;