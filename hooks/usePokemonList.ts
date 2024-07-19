import {useEffect, useState} from "react";

export type Pokemon = {
    category: string;
    location: { x: number; y: number };
    region: string;
    title: string;
    type: string;
};

export type UsePokemonListProps = {
    /** Delay to wait before fetching more items */
    term: string;
    lat: number;
    lng: number;
};

const usePokemonList = ({term, lat, lng}: UsePokemonListProps) => {
    const [items, setItems] = useState<Pokemon[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 10; // Number of items per page, adjust as necessary

    const loadPokemon = async () => {
        const controller = new AbortController();
        const {signal} = controller;

        try {
            setIsLoading(true);

            if (offset > 0) {
                // Delay to simulate network latency
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }

            const res = await fetch(
                `https://api.neshan.org/v1/search?term=${term}&lat=${lat}&lng=${lng}`,
                {signal, headers: {"Api-Key": "service.81e2bd23d6044cba94e6b8dedd9e8763"}},
            );

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await res.json();

            setHasMore(!json.next);
            // Append new results to existing ones
            setItems((prevItems) => [...prevItems, ...json.items]);
        } catch (error) {
            // @ts-ignore
            if (error.name === "AbortError") {
                console.log("Fetch aborted");
            } else {
                console.error("There was an error with the fetch operation:", error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPokemon();
    }, []);

    const onLoadMore = () => {
        const newOffset = offset + limit;
        setOffset(newOffset);
        loadPokemon();
    };

    return {
        items,
        hasMore,
        isLoading,
        onLoadMore,
    };
}


export {usePokemonList};