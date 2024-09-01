import React, {useRef, useState} from "react";
import NeshanMap, {NeshanMapRef} from "@neshan-maps-platform/react-openlayers";
import {Map} from "@neshan-maps-platform/ol"
import {Autocomplete, AutocompleteItem, Button} from "@nextui-org/react";
import {MyLocation} from "@mui/icons-material";
import {Coordinate} from "@neshan-maps-platform/ol/coordinate";
import Geolocation from '@neshan-maps-platform/ol/Geolocation.js';
import {useInfiniteScroll} from "@nextui-org/use-infinite-scroll";
import {useInfinityList} from "@/hooks/useInfinityList";
import {useAsyncList} from "@react-stately/data";

export type MapProps = {}


export const MapContainer = (props: MapProps) => {

    const {} = props
    const mapRef = useRef<NeshanMapRef | null>(null)

    const onInit = (map: Map) => {
        handlePosition()
        map.on('moveend', handlePosition);

        const geolocation = new Geolocation();
        geolocation.setTracking(true);
        geolocation.on('change', function () {
            console.log(geolocation.getPosition(), "$$$$$$###");
            mapRef.current?.map?.getView().setCenter(geolocation.getPosition())
        });
    }


    const handleMyLocation = () => {
        mapRef.current?.map?.getView().setCenter([9318218.659044644, 3274618.6225819485])
    }

    const [position, setPosition] = useState<Coordinate | undefined>(undefined)
    const handlePosition = () => {
        const center = mapRef.current?.map?.getView().getCenter()
        setPosition(center)
    }

    const goTo = (position: Coordinate) => {
        mapRef.current?.map?.getView().setCenter(position)
    }

    return (
        <div className="relative">
            <NeshanMap
                ref={mapRef}
                mapKey="web.0cd8558bb31843c3a919ea52fcd093ce"
                defaultType="neshan"
                traffic={false}
                poi={false}
                style={{height: "48vh", width: "100%"}}
                onInit={onInit}
                center={{latitude: 35.699756, longitude: 51.338076}}
                zoom={15}
                options={{}}
            />

            <div className="absolute top-0 w-full p-3">
                {!!position && <SearchMap position={position} goTo={goTo}/>}
            </div>
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
        if(!v) return
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
        >
            {(item) => (
                <AutocompleteItem key={Object.values(item.location).reverse().join(",")} className="capitalize">
                    {item.title}
                </AutocompleteItem>
            )}
        </Autocomplete>
    )
}