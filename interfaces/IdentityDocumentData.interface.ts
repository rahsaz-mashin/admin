import {Account} from "@/interfaces/Account.interface";
import {Identity} from "@/interfaces/Identity.interface";
import {IdentityDocument} from "@/interfaces/IdentityDocument.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";

export interface IdentityDocumentData {
    id?: number;

    identityDocument: IdentityDocument;
    identity: Identity;

    file: FileStorage | null;
    text: string | null;
    isRequired: boolean;
    isSubmitted: boolean;

    isRejected?: boolean;
    rejectedAt?: Date | null;
    rejectedBy?: Account | null;
    rejectionText?: string | null;

    isConfirmed?: boolean;
    confirmedAt?: Date | null;
    confirmedBy?: Account | null;
    confirmationText?: string | null;

    withAttachment?: boolean;
    withTextarea?: boolean;
    acceptAttachment: { [key: string]: string[] } | null;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
