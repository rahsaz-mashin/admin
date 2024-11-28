export type PaginationResponseMeta<T> = {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;

    sortBy: [keyof T, "DESC" | "ASC"][];
}


export type PaginationResponse<T> = {
    data: T[];
    links?: {};
    meta?: PaginationResponseMeta<T>;
}