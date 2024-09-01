import {Account} from "@/interfaces/Account.interface";


export interface Icon {
    id: number;

    title: string;
    content: string;

    createdBy: Account;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
