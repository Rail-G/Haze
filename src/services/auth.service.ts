import { axiosClassic } from "@/api/axios";
import { IUserData, IUserRegister, IUserResponse } from "@/types/types";
import { deleteAuthToken, setAuthToken } from "./cookie.service";

export const authService = {
    async authentication(type: 'login' | 'register', data: IUserData | IUserRegister) {
        const response = await axiosClassic.post<IUserResponse>(`/auth/${type}`, data).then(res => res.data)

        if (response.accessToken) {
            setAuthToken(response.accessToken)
        }

        return response
    },

    async getNewTokens() {
        const response = await axiosClassic.get<IUserResponse>('/auth/tokens').then(res => res.data)

        if (response.accessToken) {
            setAuthToken(response.accessToken)
        }
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('/auth/logout').then(res => res.data)

        if (response) {
            deleteAuthToken()
        }

        return response
    }
}