import {Icon} from "@/interfaces/Icon.interface";

export interface IntroductionMethod {
    id?: number;
    title: string;
    description?: string | null;
    icon?: Icon | null;
}
