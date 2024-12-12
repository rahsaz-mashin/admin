import {Account} from "@/interfaces/Account.interface";
import {FileStorage} from "@/interfaces/FileStorage.interface";

export enum sliderLayoutModeEnum {
    oneLayout = 'oneLayout',
    twoLayout = 'twoLayout',
    threeLayout = 'threeLayout',
    fourLayout = 'fourLayout',
}

export interface Slider {
    id?: number;

    title: string;
    subtitle: string | null;
    description: string | null;
    url: string | null;

    layoutMode: sliderLayoutModeEnum;

    thumbnail: FileStorage | null;
    file1: FileStorage | null;
    file2: FileStorage | null;
    file3: FileStorage | null;
    file4: FileStorage | null;

    isVisible: boolean;
    priority: number;

    createdBy?: Account;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
