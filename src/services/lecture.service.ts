import { axiosWithAuth } from "@/api/axios"
import { ITaskItem, ISubmitTaskData } from "@/types/types"

export const lectureService = {
    BASE_URL: '/lecture',

    async getAll() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response
    },

    async create (data: ITaskItem) {
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response
    },

    async update(data: ITaskItem) {
        const response = await axiosWithAuth.put(this.BASE_URL, data)
        return response
    },

    async delete(id: number) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
        return response
    }
}