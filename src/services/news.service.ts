import { axiosClassic, axiosWithAuth } from "@/api/axios"
import { INewsItem } from "@/types/types"

export const newsService = {
    BASE_URL:  '/news',

    async get(id: number) {
        const response = await axiosClassic.get(`${this.BASE_URL}/${id}`)
        return response
    },

    async getLast() {
        const response = await axiosClassic.get(`${this.BASE_URL}/last`)
        return response
    },

    async getAll() {
        const response = await axiosClassic.get(`${this.BASE_URL}/all`)
        return response
    },

    async create (data: INewsItem) {
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response
    },

    async update(id: number, data: INewsItem) {
        const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
        return response
    },

    async delete(id: number) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response
    }
}