export interface IConditionField {
    id: string,
    value: string
}

export interface IUserData {
    id: string,
    firstName: string,
    lastName: string
}

export interface IUserResponse extends IUserData {
    accessToken: string
} 

export type IUserRegister = Omit<IUserData, 'id'> & {email: string, password: string}

export interface ITaskItem {
    title: string,
    description: string,
    condition: string[],
    reward: string,
    image: string
}

export interface INewsItem {
    id: number,
    title: string,
    text: string,
    createdAt: Date,
    category: string
    author: string,
    imagePath: string
}

export interface ILectureItem {
    count: string;
    intervention: string;
    images: File[];
}

export interface ILectureItemBlock {
    author: string,
    role: string,
    date: string,
    data: ILectureItem
}

export interface ISubmitTaskData {
    intervention: string;
    staffs: string[];
    images: File[];
}