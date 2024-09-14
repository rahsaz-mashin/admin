import {useEffect, useState} from "react";
import {axiosCoreWithAuth} from "@/lib/axios";


export type UseInfinityListProps = {
    isEnable?: boolean;
    route?: string;
    filter?: { [key: string]: any };
    per?: number;
    delay?: number;
    selected?: string[]
};

const useInfinityList = (props: UseInfinityListProps) => {

    const {
        isEnable = true,
        route,
        filter = {},
        per = 10,
        delay = 1000,
        selected = []
    } = props

    const [list, setList] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [error, setError] = useState("");

    const axios = axiosCoreWithAuth()

    const loadData = async () => {
        try {
            setLoading(true);

            if (!route) {
                throw new Error("Route not set");
            }

            if (page > 0) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            console.log(page)
            let _filter: {[key: string]: string} = {}
            Object.keys(filter).map((v, i) => {
                if(filter[v]) _filter[v] = filter[v]
            })
            const result: any = await axios.get(route, {params: {..._filter, selected, page, per}})
            if (!!result?.items) {
                setHasMore(list.length < result.count);
                setList((prev) => (page === 0 ? result.items : [...prev, ...result.items]));
                return
            }
        } catch (error: any) {
            setError("خطا: " + error?.message);
        } finally {
            setLoading(false);
        }
    };

    const onLoadMore = async () => {
        setPage(Math.floor(list.length / per));
    }

    useEffect(() => {
        if (isEnable) loadData();
    }, [page, new URLSearchParams(filter).toString()]);



    return {
        list,
        hasMore,
        isLoading,
        onLoadMore,
        error,
    };
}


export {useInfinityList};