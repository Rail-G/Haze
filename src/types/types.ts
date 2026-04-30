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
    title: string,
    description: string,
    published: string,
    category: string
    author: string,
    image: string
}

export interface ISubmitTaskData {
    intervention: string;
    staffs: string[];
    images: File[];
}

export interface ILectureItem {
    count: string;
    intervention: string;
    images: File[];
}