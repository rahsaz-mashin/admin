import {Icon} from "@/interfaces/Icon.interface";

export interface HomeShortcut {
    id?: number;

    title: string;
    icon?: Icon | null;
    url: string;

    isExternal: boolean;
    isActive: boolean;

    priority: number;
}
