import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {Order} from "@/interfaces/Order.interface";
import {Payment, paymentMethodsEnum} from "@/interfaces/Payment.interface";
import {CalendarDateTime} from "@internationalized/date";


export enum walletTransactionStatusesEnum {
    checking = 'checking',   // checking
    pending = 'pending',     // initial confirm
    confirmed = 'confirmed', // final confirm
    rejected = 'rejected',   // rejected
}

export enum walletTransactionMethodsEnum {
    cheque = 'cheque',
    bank = 'bank',
    online = 'online',
    order = 'order',
}


export interface WalletTransaction {
    id?: number;

    account: Account | null;
    amount: number | string;
    status: walletTransactionStatusesEnum;
    method: walletTransactionMethodsEnum;

    orderbox: null,
    order: Order | null;

    paymentbox: null,
    payment: Payment | null;





    // common
    picture: FileStorage | null;
    dueDate: Date | null;
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


    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}






export interface WalletChargeOnline {
    amount: number | string;
    url?: string;
}


export interface WalletChargeBank {
    amount: number | string;

    picture: FileStorage | null;
    dueDate:  CalendarDateTime | Date | null;
    bankName: string | null;
    bankAccountNumber: string | null;

    receiptNumber: string | null;
    trackingNumber: string | null;

    confirm: boolean;
}


export interface WalletChargeCheque {
    amount: number | string;

    picture: FileStorage | null;
    dueDate: CalendarDateTime | Date | null;
    bankName: string | null;
    bankAccountNumber: string | null;

    chequeNumber: string | null;
    sayadiNumber: string | null;

    confirm: boolean;
}







