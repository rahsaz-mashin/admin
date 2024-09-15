"use client"

import React, {useRef, useState} from "react";
import NeshanMap, {NeshanMapRef} from "@neshan-maps-platform/react-openlayers";
import {Map} from "@neshan-maps-platform/ol"
import {Autocomplete, AutocompleteItem, Button} from "@nextui-org/react";
import {MyLocation} from "@mui/icons-material";
import {Coordinate} from "@neshan-maps-platform/ol/coordinate";
import Geolocation from '@neshan-maps-platform/ol/Geolocation.js';
import {useAsyncList} from "@react-stately/data";
import {fromLonLat, toLonLat, transform} from "@neshan-maps-platform/ol/proj";
import {toFixed} from "@neshan-maps-platform/ol/math";
import {toast} from "@/lib/toast";


type Position = {
    latitude: number;
    longitude: number;
}

export type MapProps = {
    position?: Position;
    zoom?: number;
    onChange?: (v: Position) => void;
    findOnInit?: boolean;
}


export const MapContainer = (props: MapProps) => {

    const defaultPosition = {latitude: 36.2612469, longitude: 59.6004759}
    const mapRef = useRef<NeshanMapRef | null>(null)
    const [position, setPosition] = useState<Position>(props.position || defaultPosition)
    const [zoom, setZoom] = useState<number>(props.zoom || 15)
    const onInit = (map: Map) => {
        map.on('moveend', onMoveEnd);
        if (props.findOnInit) handleMyLocation()
    }


    const handleMyLocation = () => {
        const geolocation = new Geolocation();
        geolocation.setTracking(true);
        geolocation.on('change', () => {
            const coordinate = geolocation.getPosition()!
            mapRef.current?.map?.getView().setCenter(fromLonLat(coordinate))
        });
        geolocation.on('error', (error) => {
            toast.error("خطایی در یافتن موقعیت مکانی شما رخ داد")
        })
    }


    const onMoveEnd = () => {
        const view = mapRef.current?.map?.getView();
        const _center = view?.getCenter()!
        const _zoom = view?.getZoom()!
        handlePosition(_center, _zoom)
    }


    const handlePosition = (_center: Coordinate, _zoom: number) => {
        const coordinate = toLonLat(_center)
        const __position = {
            latitude: toFixed(coordinate[1], 7),
            longitude: toFixed(coordinate[0], 7),
        }
        const __zoom = toFixed(_zoom, 3)
        setPosition(__position)
        setZoom(__zoom)
        if(props?.onChange) props.onChange(__position)
    }

    return (
        <div className="relative overflow-hidden rounded-xl">
            <NeshanMap
                ref={mapRef}
                mapKey="web.0cd8558bb31843c3a919ea52fcd093ce"
                defaultType="neshan"
                traffic={false}
                poi={false}
                style={{height: "48vh", width: "100%"}}
                onInit={onInit}

                center={position}
                zoom={zoom}
            />
            {/*<div className="absolute top-0 w-full p-3">*/}
            {/*    {!!position && <SearchMap position={position} goTo={goTo}/>}*/}
            {/*</div>*/}
            <div className="absolute bottom-0 w-full p-3">
                <Button
                    isIconOnly
                    color="primary"
                    radius="md"
                    size="sm"
                    onPress={handleMyLocation}
                >
                    <MyLocation/>
                </Button>
            </div>
        </div>
    );
};


export default MapContainer

export type Pokemon = {
    category: string;
    location: { x: number; y: number };
    region: string;
    title: string;
    type: string;
};
const SearchMap = ({position, goTo}: { position: Coordinate; goTo: (p: Coordinate) => void }) => {

    const [isOpen, setOpen] = useState(false);
    // const {items, hasMore, isLoading, onLoadMore} = usePokemonList({term: "", lat: position[0], lng: position[1]});

    const {filterText, isLoading, items, setFilterText} = useAsyncList<Pokemon>({
        async load({signal, filterText}) {
            let res = await fetch(
                `https://api.neshan.org/v1/search?term=${filterText}&lat=${position[0]}&lng=${position[1]}`,
                {signal, headers: {"Api-Key": "service.81e2bd23d6044cba94e6b8dedd9e8763"}},
            );
            let json = await res.json();

            return {
                items: json.items,
            };
        },
    });

    // const [, scrollerRef] = useInfiniteScroll({
    //     hasMore: false,
    //     isEnabled: isOpen,
    //     shouldUseLoader: false, // We don't want to show the loader at the bottom of the list
    //     onLoadMore,
    // });

    const selectChange = (v: React.Key | null) => {
        if (!v) return
        goTo((v as string).split(",").map(v => parseFloat(v)) as Coordinate)
    }

    return (
        <Autocomplete
            color="primary"
            variant="faded"
            items={items}
            inputValue={filterText}
            isLoading={isLoading}
            label="جستجو"
            placeholder="محله، خیابان، کوچه و..."
            // scrollRef={scrollerRef}
            // selectionMode="single"
            onOpenChange={setOpen}
            onInputChange={setFilterText}
            onSelectionChange={selectChange}
            listboxProps={{
                emptyContent: "چیزی پیدا نشد"
            }}
        >
            {(item) => (
                <AutocompleteItem key={Object.values(item.location).reverse().join(",")} className="capitalize">
                    {item.title}
                </AutocompleteItem>
            )}
        </Autocomplete>
    )
}