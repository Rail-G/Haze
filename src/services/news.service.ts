import { axiosClassic, axiosWithAuth } from "@/api/axios"
import { INewsItem } from "@/types/types"

export const newsService = {
    BASE_URL:  '/news',

    async getById(id: number) {
        const response = await axiosClassic.get<INewsItem>(`${this.BASE_URL}/${id}`).then(res => res.data)
        return response
    },

    async getLast() {
        const response = await axiosClassic.get<INewsItem>(`${this.BASE_URL}/last`).then(res => res.data)
        return response
    },

    async getPartial(cursorId: number = 0) {
        const response = await axiosClassic.get<INewsItem[]>(`${this.BASE_URL}/partial?cursorId=${cursorId}`).then(res => res.data)
        return response
    },

    async create (data: INewsItem) {
        const response = await axiosWithAuth.post(this.BASE_URL, data).then(res => res.data)
        return response
    },

    async update(id: number, data: INewsItem) {
        const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data).then(res => res.data)
        return response
    },

    async delete(id: number) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`).then(res => res.data)
        return response
    }
}