import {Icon} from "@/interfaces/Icon.interface";
import {Account} from "@/interfaces/Account.interface";

export interface IntroductionMethod {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
}
