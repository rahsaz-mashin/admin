import { User } from "./User.interface";

export interface Session {
    user: User,
    accessToken: string;
}