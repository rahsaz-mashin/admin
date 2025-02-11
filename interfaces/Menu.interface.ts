import {Icon} from "@/interfaces/Icon.interface";

export interface Menu {
    id?: number;

    title: string;
    icon?: Icon | null;
    url: string;

    isExternal: boolean;
    isActive: boolean;

    priority: number;

    onlyDesktop: boolean;
    onlyMobile: boolean;
}
