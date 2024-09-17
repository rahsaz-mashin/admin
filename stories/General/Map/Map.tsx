"use client"

import React, {useEffect, useRef, useState} from "react";
import NeshanMap, {NeshanMapRef} from "@neshan-maps-platform/react-openlayers";
import {Map} from "@neshan-maps-platform/ol"
import {AutocompleteItem, Button} from "@nextui-org/react";
import {FmdGood, MyLocation} from "@mui/icons-material";
import {Coordinate} from "@neshan-maps-platform/ol/coordinate";
import Geolocation from '@neshan-maps-platform/ol/Geolocation.js';
import {fromLonLat, toLonLat} from "@neshan-maps-platform/ol/proj";
import {toFixed} from "@neshan-maps-platform/ol/math";
import {toast} from "@/lib/toast";
import {MinorSelect} from "@/stories/General/MinorSelect";
import {useForm} from "react-hook-form";


type Position = {
    latitude: number;
    longitude: number;
}

export type MapProps = {
    position?: Position;
    zoom?: number;
    onChange?: (v: Position) => void;
    findOnInit?: boolean;
    withSearchBox?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}


export const MapContainer = (props: MapProps) => {

    const defaultPosition = {latitude: 36.2612469, longitude: 59.6004759}

    const mapRef = useRef<NeshanMapRef | null>(null)
    const [position, setPosition] = useState<Position>(props.position || defaultPosition)
    const [zoom, setZoom] = useState<number>(props.zoom || 15)
    const [trackingLoading, setTrackingLoading] = useState<boolean>(false)
    const onInit = (map: Map) => {
        map.on('moveend', onMoveEnd);
        if (props.findOnInit) handleMyLocation()
    }


    const handleMyLocation = () => {
        setTrackingLoading(true)
        const geolocation = new Geolocation();
        geolocation.setTracking(true);
        geolocation.on('change', () => {
            goTo(geolocation.getPosition()!)
            setTrackingLoading(false)
        });
        geolocation.on('error', (error) => {
            toast.error("خطایی در یافتن موقعیت مکانی شما رخ داد")
            setTrackingLoading(false)
        })
    }


    const onMoveEnd = () => {
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
        if (props?.onChange) props.onChange(__position)
    }


    const goTo = (coordinate: Coordinate) => {
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
            {props.withSearchBox && (
                <div className="absolute top-0 w-full p-3">
                    <SearchMap
                        position={position}
                        goTo={goTo}
                    />
                </div>
            )}
            <div className="absolute">
                <div className="flex justify-center items-center text-blue-600">
                    <FmdGood fontSize="large"/>
                </div>
            </div>
            <div className="absolute bottom-0 w-full p-3">
                <Button
                    aria-label="current location"
                    isIconOnly
                    color="primary"
                    radius="md"
                    size="sm"
                    onPress={handleMyLocation}
                    isLoading={trackingLoading}
                >
                    <MyLocation/>
                </Button>
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
const SearchMap = ({position, goTo}: { position: Position; goTo: (c: Coordinate) => void }) => {

    const {
        control,
        watch,
    } = useForm()

    const location = watch("location")
    useEffect(() => {
        if (!!location) {
            const coordinate = location.split("_").map((v: string) => (parseFloat(v))).reverse()
            goTo(coordinate)
        }
    }, [location])


    return (
        <MinorSelect
            label="جستجوی مکان"
            name="location"
            control={control}
            isSearchable
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
    )
}