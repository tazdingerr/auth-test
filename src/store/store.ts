import apiInstance from "../http";
import { IUser } from "../models/IUser";
import { AuthResponse } from "../models/response/AuthRespons";
import AuthService from "../services/AuthService";

const API_URL = `https://localhost:3000/api`

export default class Store {
    user = {} as IUser

    async login(login: string, password: string) {
        try {
            await AuthService.login(login, password);
        } catch (error) {
            console.log(error);
        }
    }
    async registration(email: string, first_name: string, last_name: string | undefined, login: string, password: string) {
        try {
            await AuthService.registration(email, first_name, last_name, login, password);
        } catch (error) {
            console.log(error);
        }
    }
    async logout() {
        try {
            await AuthService.logout();
        } catch (error) {
            console.log(error);
        }
    }
    async checkAuth() {
        try {
            const response = await apiInstance.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }
}