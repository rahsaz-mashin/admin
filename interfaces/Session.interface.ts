import { Account } from "./Account.interface";

export interface Session {
    account: Account,
    accessToken: string;
}