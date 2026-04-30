import { axiosClassic } from "@/api/axios";
import { IUserData, IUserRegister, IUserResponse } from "@/types/types";
import { deleteAuthToken, setAuthToken } from "./cookie.service";

export const authService = {
    async authentication(type: 'login' | 'register', data: IUserData | IUserRegister) {
        const response = await axiosClassic.post<IUserResponse>(`/auth/${type}`, data)

        if (response.data.accessToken) {
            setAuthToken(response.data.accessToken)
        }

        return response
    },

    async getNewTokens() {
        const response = await axiosClassic.get<IUserResponse>('/auth/tokens')

        if (response.data.accessToken) {
            setAuthToken(response.data.accessToken)
        }
    },

    async logout() {
        const response = await axiosClassic.post<boolean>('/auth/logout')

        if (response.data) {
            deleteAuthToken()
        }

        return response
    }
}