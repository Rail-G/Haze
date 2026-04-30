'use client'
import { IUserData } from "@/types/types";
import { create } from "zustand";

interface IUserDataStore {
    user: IUserData | undefined
    errorMsg: string | undefined,
    setUser: (data: IUserData) => void,
    deleteUser: () => void,
    setError: (errorMsg: string) => void
}

const initialState = {
    user: undefined,
    errorMsg: undefined
}

export const useUserStore = create<IUserDataStore>((set) => ({
    ...initialState,
    setUser: (data: IUserData) => set(() => ({user: data})),
    deleteUser: () => set({user: undefined}),
    setError: (errorMsg: string) => set(() => ({errorMsg: errorMsg}))
}))