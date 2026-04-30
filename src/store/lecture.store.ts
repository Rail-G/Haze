'use client'
import { ILectureItemBlock } from "@/types/types";
import { create } from "zustand";

interface ILectureStore {
    lectureItems: ILectureItemBlock[] | [],
    errorMsg: string | undefined,
    setLectureItemBlock: (data: ILectureItemBlock[]) => void,
    setError: (errorMsg: string) => void
}

const initialState = {
    lectureItems: [],
    errorMsg: undefined
}

export const useLectureStore = create<ILectureStore>((set) => ({
    ...initialState,
    setLectureItemBlock: (data: ILectureItemBlock[]) => set({lectureItems: data}),
    deleteLectureItemBlock: () => set({lectureItems: []}),
    setError: (errorMsg: string) => set(() => ({errorMsg: errorMsg}))
}))