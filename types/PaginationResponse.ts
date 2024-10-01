export type PaginationResponseMeta = {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;

    sortBy: [string, string][];
}


export type PaginationResponse<T> = {
    data: T[];
    links: {};
    meta: PaginationResponseMeta;
}