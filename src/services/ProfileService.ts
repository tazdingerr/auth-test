import apiInstance from "../http";
import { AxiosResponse } from "axios";
import { ProfileResponse } from "../models/response/ProfileResponse";

export default class ProfileService {
    static async profile(): Promise<AxiosResponse<ProfileResponse>> {
        return apiInstance.get<ProfileResponse>('profile')
    }

}

