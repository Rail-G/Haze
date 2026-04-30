'use client'
import { ITaskItem } from "@/types/types";
import { create } from "zustand";

interface ITaskStore {
    tasks: ITaskItem[] | [],
    errorMsg: string | undefined,
    setTask: (data: ITaskItem[]) => void,
    deleteTask: () => void,
    setError: (errorMsg: string) => void
}

const initialState = {
    tasks: [],
    errorMsg: undefined
}

export const useTaskStore = create<ITaskStore>((set) => ({
    ...initialState,
    setTask: (data: ITaskItem[]) => set(() => ({tasks: data})),
    deleteTask: () => set({tasks: []}),
    setError: (data: string) => set(() => ({errorMsg: data}))
}))