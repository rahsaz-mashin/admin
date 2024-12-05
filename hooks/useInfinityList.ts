import {useEffect, useState} from "react";
import {axiosCoreWithAuth} from "@/lib/axios";
import useSWR from "swr";
import {PaginationResponse} from "@/types/PaginationResponse";
import {convertFilterToQueryString} from "@/lib/convertFilterObjectToQuery";


export type UseInfinityListProps = {
    isEnable?: boolean;
    route?: string;
    headers?: { [key: string]: string };
    search?: string;
    searchKey?: string;
    disablePagination?: boolean;
    withSelected?: boolean;
    filter?: { [key: string]: any };
    per?: number;
    delay?: number;
    selected?: string[]
};

const useInfinityList = <T,>(props: UseInfinityListProps) => {

    const {
        isEnable = true,
        route,
        filter = {},
        per = 25,
        delay = 1000,
        selected = [],
        search,
        searchKey,
        disablePagination,
        withSelected = true,
        headers,
    } = props

    const [list, setList] = useState<any[]>([]);
    const [page, setPage] = useState(1);


    const query = new URLSearchParams()
    const filtering = convertFilterToQueryString(filter)

    query.set((searchKey || 'search'), (search || ''))
    if (disablePagination) {
        query.set('page', String(1))
        query.set('limit', String(1000))
    } else {
        query.set('page', String(page))
        query.set('limit', String(per))
    }

    const {
        data,
        isLoading,
        error,
        isValidating,
        mutate
    } = useSWR<PaginationResponse<T>>((isEnable && route) ? `/${route}?${query.toString()}&${filtering}` : null, {
        keepPreviousData: false,
        // fallbackData: {
        //     data: [],
        // }
    });

    useEffect(() => {
        setPage(1)
        setList([])
        // mutate()
    }, [search, filtering]);


    useEffect(() => {
        console.log({data})
        setList((prev) => ([...prev, ...(data?.data || [])]))
    }, [data])


    return {
        list,
        isLoading,
        error,
        hasMore: data?.meta ? (data.meta.currentPage < data.meta.totalPages) : false,
        onLoadMore: () => {
            setPage((data?.meta?.currentPage || 0) + 1);
        },
    };
}


export {useInfinityList};