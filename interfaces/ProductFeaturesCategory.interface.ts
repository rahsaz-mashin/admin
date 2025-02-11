import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";
import {ProductFeatures} from "@/interfaces/ProductFeatures.interface";

export interface ProductFeaturesCategory {
    id?: number;
    title: string;
    slug: string;
    icon?: Icon | null;
    features: ProductFeatures[];

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
