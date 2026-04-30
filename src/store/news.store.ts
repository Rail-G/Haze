'use client'
import { create } from "zustand";

interface INewsStore {
    htmlBody: string | undefined,
    errorMsg: string | undefined,
    setHtmlBody: (data: string) => void,
    setError: (errorMsg: string) => void
}

const initialState = {
    htmlBody: undefined,
    errorMsg: undefined
}

export const useNewsStore = create<INewsStore>((set) => ({
    ...initialState,
    setHtmlBody: (data: string) => set(() => ({htmlBody: data})),
    setError: (errorMsg: string) => set(() => ({errorMsg: errorMsg}))
}))