"use client"

import React, {forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState} from "react";
import NeshanMap, {NeshanMapRef} from "@neshan-maps-platform/react-openlayers";
import {Map} from "@neshan-maps-platform/ol"
import {AutocompleteItem, Button} from "@nextui-org/react";
import {CloseOutlined, FmdGood, MyLocation, SearchOutlined} from "@mui/icons-material";
import {Coordinate} from "@neshan-maps-platform/ol/coordinate";
import Geolocation from '@neshan-maps-platform/ol/Geolocation.js';
import {fromLonLat, toLonLat} from "@neshan-maps-platform/ol/proj";
import {toFixed} from "@neshan-maps-platform/ol/math";
import {toast} from "@/lib/toast";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {useForm} from "react-hook-form";
import {ClickAwayListener} from "@mui/base";


type Position = {
    latitude: number;
    longitude: number;
}

export type MapProps = {
    position?: Position;
    zoom?: number;
    onChange?: (v: Position) => void;
    withSearchBox?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

const defaultPosition = {latitude: 35.700153, longitude: 51.338378}
export const MapContainer = (props: MapProps) => {


    const _val = props.position || defaultPosition


    const mapRef = useRef<NeshanMapRef | null>(null)
    const [position, setPosition] = useState<Position>(_val)
    const [zoom, setZoom] = useState<number>(props.zoom || 15)

    const currentLocationRef = useRef<{ locate: () => void }>()

    const onInit = (map: Map) => {
        map.on('moveend', onMoveEnd);
        // TODO::
        // if (!props.position) currentLocationRef.current?.locate()
    }

    useEffect(() => {
        goTo(Object.values(_val))
    }, [Object.values(_val).join(",")]);


    const count = useRef(0)
    const havePosition = useRef(!!props.position)

    useEffect(() => {
        havePosition.current = !!props.position
    }, [props.position ? Object.values(props.position).join(",") : undefined]);

    const onMoveEnd = () => {
        count.current++

        const view = mapRef.current?.map?.getView();
        const _center = view?.getCenter()!
        const _zoom = view?.getZoom()!


        const coordinate = toLonLat(_center)

        const __position = {
            latitude: toFixed(coordinate[1], 7),
            longitude: toFixed(coordinate[0], 7),
        }
        const __zoom = toFixed(_zoom, 3)
        setPosition(__position)
        setZoom(__zoom)

        if (count.current > 2 || (!havePosition.current && count.current > 1)) setValue(__position)
    }

    const setValue = (position: Position) => {
        if (props?.onChange) props.onChange(position)
    }


    /*
    pass lat & lon to
    then reverse it
     */
    const goTo = (coordinate: Coordinate) => {
        coordinate = coordinate.reverse()
        mapRef.current?.map?.getView().setCenter(fromLonLat(coordinate))
    }


    return (
        <div className="relative overflow-hidden rounded-xl flex justify-center items-center">
            {props.isReadOnly && <div className="absolute h-full w-full z-10" aria-label="readonly"/>}
            {props.isDisabled && <div className="absolute h-full w-full z-10 bg-black/20" aria-label="disabled"/>}
            <NeshanMap
                ref={mapRef}
                mapKey="web.0cd8558bb31843c3a919ea52fcd093ce"
                defaultType="neshan"
                traffic={false}
                poi={false}
                style={{height: "40vh", width: "100%"}}
                onInit={onInit}

                center={position}
                zoom={zoom}
            />
            <CurrentLocationTool
                ref={currentLocationRef}
                goTo={goTo}
            />
            {position && props.withSearchBox && (
                <SearchMap
                    position={position}
                    goTo={goTo}
                />
            )}
            <div className="absolute">
                <div className="flex justify-center items-center text-blue-600">
                    <FmdGood fontSize="large"/>
                </div>
            </div>

        </div>
    );
};


export default MapContainer

export type LocationList = {
    category: string;
    location: { x: number; y: number };
    region: string;
    title: string;
    type: string;
};


const CurrentLocationTool = forwardRef(({goTo}: { goTo: (c: Coordinate) => void }, ref) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)


    useImperativeHandle(ref, () => {
        return {
            locate: handleMyLocation,
        }
    })

    const handleMyLocation = () => {
        setIsLoading(true)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setIsLoading(false)
                    goTo([position.coords.latitude, position.coords.longitude])
                },
                (error) => {
                    setIsLoading(false)
                    toast.error("خطایی در یافتن موقعیت مکانی شما رخ داد")
                    toast.error(error.message)
                }
            );
        } else {
            toast.error("مرورگر شما قابلیت دریافت موقعیت را پشتیبانی نمی کند")
            setIsLoading(false)
        }
    }

    return (
        <div className="absolute bottom-0 start-0 m-3 h-10">
            <div className="flex h-full items-center gap-2">
                <Button
                    aria-label="current location"
                    isIconOnly
                    color="primary"
                    radius="full"
                    size="md"
                    onPress={handleMyLocation}
                    isLoading={isLoading}
                >
                    <MyLocation/>
                </Button>
            </div>
        </div>
    )
})
CurrentLocationTool.displayName = "CurrentLocationTool"


const SearchMap = ({position, goTo}: { position: Position; goTo: (c: Coordinate) => void }) => {

    const [isVisible, setVisible] = useState(false)

    const {
        control,
        watch,
    } = useForm()

    const location = watch("location")
    useEffect(() => {
        if (!!location) {
            const coordinate = location.split("_").map((v: string) => (parseFloat(v)))
            goTo(coordinate)
        }
    }, [location])


    return (
        <div className="absolute top-0 end-0 m-3 h-12">
            <ClickAwayListener onClickAway={() => setVisible(false)}>
                <div className="flex h-full items-center gap-2">
                    {isVisible && (
                        <MinorSelect
                            label="جستجوی مکان"
                            name="location"
                            control={control}
                            isSearchable
                            size="sm"
                            dynamic={{
                                route: "neshan/searchAddress",
                                filter: {
                                    lat: String(position.latitude),
                                    lng: String(position.longitude),
                                },
                                disablePagination: true,
                                withSelected: false,
                            }}
                            itemBuilder={(item) => {
                                return (
                                    <AutocompleteItem key={item.key}>
                                        <div className="flex flex-col">
                                            <h3 className="font-bold">{item.label}</h3>
                                            <span className="text-gray-600">{item.address}</span>
                                        </div>
                                    </AutocompleteItem>
                                )
                            }}
                        />
                    )}
                    <Button
                        aria-label="search location"
                        isIconOnly
                        color="primary"
                        radius="full"
                        size="md"
                        onPress={() => setVisible((visible) => !visible)}
                    >
                        {isVisible ? <CloseOutlined/> : <SearchOutlined/>}
                    </Button>
                </div>
            </ClickAwayListener>
        </div>
    )
}