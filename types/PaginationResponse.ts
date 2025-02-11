import {Key} from "react";

export type PaginationResponseMeta<T> = {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;

    sortBy: [keyof T | Key, "DESC" | "ASC"][];
}


export type PaginationResponse<T> = {
    data: T[];
    links?: object;
    meta?: PaginationResponseMeta<T>;
}