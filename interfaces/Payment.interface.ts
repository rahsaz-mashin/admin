
import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {CalendarDateTime} from "@internationalized/date";


export enum paymentMethodsEnum {
    cheque = 'cheque',
    bank = 'bank',
    online = 'online',
}

export interface Payment {
    readonly id?: number;


    method: paymentMethodsEnum;



    // common
    picture: FileStorage | null;
    dueDate: CalendarDateTime | Date | null;
    bankName: string | null;
    bankAccountNumber: string | null;


    // =====> bank
    receiptNumber: string | null;
    trackingNumber: string | null;


    // =====> cheque
    chequeNumber: string | null;
    sayadiNumber: string | null;


    // =====> online
    traceNumber: string | null;
    referenceNumber: string | null;
    transactionReferenceID: string | null;
    shaparakRefNumber: string | null;



    isConfirmed: boolean;
    confirmedAt: Date | null;
    confirmedBy: Account | null;

    isRejected: boolean;
    rejectedAt: Date | null;
    rejectedBy: Account | null;
    rejectionText: string | null;
}




