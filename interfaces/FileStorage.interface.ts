import {Account} from "@/interfaces/Account.interface";
import {FileStorageSystem} from "@/interfaces/FileStorageSystem.interface";


export interface FileStorage {
    id?: number;

    system: FileStorageSystem;
    key: string;

    title?: string;
    alt?: string;

    filesize: number;
    mimetype: string;
    path: string;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
