import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";

export interface AccountAvatar {
    id: number;

    file: FileStorage;
    account: Account;

    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
