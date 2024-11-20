import {AssignType} from "@/types/AssignType";
import {CalculatePrice, Product} from "@/interfaces/Product.interface";
import {Account} from "@/interfaces/Account.interface";
import {PriceList} from "@/interfaces/PriceList.interface";
import {Currency} from "@/interfaces/Currency.interface";
import {OrderDeliveryMethod} from "@/interfaces/OrderDeliveryMethod.interface";
import {IdentityAddress} from "@/interfaces/IdentityAddess.interface";
import {Discount} from "@/interfaces/Discount.interface";



export enum orderOverallStatusesEnum {
    inProgress = 'inProgress',
    delivered = 'delivered',
    returned = 'returned',
    canceled = 'canceled',
}


export enum orderProcessStatusesEnum {
    // inProgress
    pendingForPayment = 'pendingForPayment',
    waitingForConfirm = 'waitingForConfirm',
    waitingForPacking = 'waitingForPacking',
    readyForDelivery = 'readyForDelivery',
    waitingForConfirmReturning = 'waitingForConfirmReturning',
    waitingForProcessReturning = 'waitingForProcessReturning',


    // delivered
    delivered = 'delivered',

    // returned
    returned = 'returned',

    // canceled
    canceled = 'canceled',
    canceledSystemically = 'canceledSystemically',
}





export interface OrderProduct {
    product: AssignType<Product>;
    count: number;
    amount: number;
    vat: number;
    discount: number;

    info?: CalculatePrice;
}


export interface Order {
    readonly id?: number;
    code: number;

    account: AssignType<Account> | null;
    priceList: AssignType<PriceList> | null;
    products: OrderProduct[];

    deliveryMethod: AssignType<OrderDeliveryMethod> | null;

    discount: AssignType<Discount> | null;

    overallStatus: orderOverallStatusesEnum;
    processStatus: orderProcessStatusesEnum;

    address: IdentityAddress | null;

    isSelfRecipient : boolean;
    recipientName: string | null;
    recipientPhone: string | null;

    readonly createdBy?: AssignType<Account>;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly deletedAt?: Date | null;
}
