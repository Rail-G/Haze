import { axiosWithAuth } from "@/api/axios"
import { ISubmitTaskData, ITaskItem } from "@/types/types"

export const taskService = {
    BASE_URL:  '/task',

    async getAll() {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response
    },

    async create (data: ITaskItem) {
        const response = await axiosWithAuth.post(this.BASE_URL, data)
        return response
    },

    async submitTask(data: ISubmitTaskData) {
        const response = await axiosWithAuth.post(`${this.BASE_URL}/done`, data)
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