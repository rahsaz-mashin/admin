import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";



export interface FileStorageSystem {
    id?: number;

    key: string;
    title: string;
    description: string | null;

    endpoint: string;
    bucket: string;
    accessKey: string;
    secretKey: string;

    baseUrl: string;

    files?: FileStorage[];

    isDefault: boolean;

    isActive: boolean;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

