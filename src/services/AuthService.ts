import apiInstance from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthRespons";

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>('sign-in', { login, password })
    }

    static async registration(email: string, first_name: string, last_name: string | undefined, login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>('sign-up', { email, first_name, last_name, login, password })
    }
    static async logout(): Promise<void> {
        return apiInstance.get('logout')
    }
}

