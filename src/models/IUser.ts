export interface IUser {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    login: string,
    avatar_url: string,
    isBlocked: boolean,
    role: string,
    created_at: Date,
    updated_at: Date
}