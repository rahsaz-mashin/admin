import {Account} from "@/interfaces/Account.interface";





export interface Product {
    id?: number;
    title: string;
    // title: string;


    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
