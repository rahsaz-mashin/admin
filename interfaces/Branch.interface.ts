import {Account} from "@/interfaces/Account.interface";





export interface Branch {
    id?: number;
    title: string;
    key: string;
    phone: string;
    description: string;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
