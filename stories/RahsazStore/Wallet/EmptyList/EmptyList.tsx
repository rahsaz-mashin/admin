import React from "react";
import {Card, CardBody} from "@nextui-org/card";

export type WalletEmptyListProps = {}


export const WalletEmptyList = (props: WalletEmptyListProps) => {

    const {} = props

    return (
        <Card>
            <CardBody className="flex flex-col items-center justify-center text-center gap-3 min-h-60">
                <EmptyWalletListIcon/>
                <b className="text-black font-black">
                    تراکنشی پیدا نشد!
                </b>
                <span className="text-gray-500 font-light">
                   شما تا کنون هیچ تراکنشی در کیف پول خود نداشته اید.
                </span>
            </CardBody>
        </Card>
    );
};


export const EmptyWalletListIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 2801.35 2785.72"
            className="h-12 us:h-20 md:h-28 xl:h-32"
        >
            <defs>
                <linearGradient
                    id="linear-gradient"
                    x1={654.21}
                    x2={1324.45}
                    y1={279.38}
                    y2={4564.14}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ff9085"/>
                    <stop offset={1} stopColor="#fb6fbb"/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-2"
                    x1={981.36}
                    x2={2477.75}
                    y1={1526.7}
                    y2={1526.7}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#fcb148"/>
                    <stop offset={0.05} stopColor="#fdb946"/>
                    <stop offset={0.14} stopColor="#fec144"/>
                    <stop offset={0.32} stopColor="#ffc444"/>
                    <stop offset={0.48} stopColor="#fdb946"/>
                    <stop offset={0.78} stopColor="#f99c4c"/>
                    <stop offset={0.87} stopColor="#f8924f"/>
                    <stop offset={1} stopColor="#f8924f"/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-3"
                    x1={615.96}
                    x2={763.55}
                    y1={532.6}
                    y2={663.62}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#40447e"/>
                    <stop offset={1} stopColor="#3c3b6b"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-4"
                    x1={781.35}
                    x2={1841.53}
                    y1={665.98}
                    y2={665.98}
                />
                <linearGradient
                    id="linear-gradient-5"
                    x1={-81.98}
                    x2={384.96}
                    y1={1668.14}
                    y2={1668.14}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#aa80f9"/>
                    <stop offset={1} stopColor="#6165d7"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-6"
                    x1={1239.86}
                    x2={1501.76}
                    y1={1207.28}
                    y2={2495.58}
                />
                <linearGradient
                    id="linear-gradient-7"
                    x1={576.54}
                    x2={661.62}
                    y1={1662.47}
                    y2={1662.47}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#311944"/>
                    <stop offset={1} stopColor="#893976"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-8"
                    x1={958.43}
                    x2={1982.41}
                    y1={1633.85}
                    y2={1633.85}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-9"
                    x1={1738.08}
                    x2={1214.01}
                    y1={1131.58}
                    y2={1199.35}
                />
                <linearGradient
                    xlinkHref="#linear-gradient"
                    id="linear-gradient-10"
                    x1={2027.1}
                    x2={1867.47}
                    y1={669.72}
                    y2={820.31}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-11"
                    x1={1544.3}
                    x2={1583.45}
                    y1={2532.12}
                    y2={2664.64}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-12"
                    x1={1600.57}
                    x2={1639.72}
                    y1={2515.49}
                    y2={2648.01}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-13"
                    x1={1850.32}
                    x2={1889.48}
                    y1={2441.7}
                    y2={2574.22}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-14"
                    x1={1490.54}
                    x2={1529.7}
                    y1={2548}
                    y2={2680.52}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-15"
                    x1={1228.72}
                    x2={1267.87}
                    y1={2625.36}
                    y2={2757.88}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-16"
                    x1={1434.17}
                    x2={1473.33}
                    y1={2564.65}
                    y2={2697.18}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-17"
                    x1={1112.94}
                    x2={1152.09}
                    y1={2659.56}
                    y2={2792.09}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-18"
                    x1={1287.56}
                    x2={1326.72}
                    y1={2607.97}
                    y2={2740.49}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-19"
                    x1={1740.5}
                    x2={1779.65}
                    y1={2474.15}
                    y2={2606.67}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-20"
                    x1={1796.64}
                    x2={1835.79}
                    y1={2457.56}
                    y2={2590.08}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-21"
                    x1={1906.72}
                    x2={1945.87}
                    y1={2425.04}
                    y2={2557.56}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-22"
                    x1={1172.29}
                    x2={1211.45}
                    y1={2642.03}
                    y2={2774.55}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-23"
                    x1={1685.88}
                    x2={722.07}
                    y1={1585.02}
                    y2={2675.32}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-24"
                    x1={1576.76}
                    x2={612.96}
                    y1={1488.56}
                    y2={2578.87}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-25"
                    x1={1869.86}
                    x2={906.06}
                    y1={1747.65}
                    y2={2837.96}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-26"
                    x1={1790.2}
                    x2={826.4}
                    y1={1677.24}
                    y2={2767.54}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-27"
                    x1={1496.64}
                    x2={532.83}
                    y1={1417.73}
                    y2={2508.04}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-28"
                    x1={1899.4}
                    x2={935.6}
                    y1={1773.77}
                    y2={2864.07}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-29"
                    x1={1714.38}
                    x2={750.57}
                    y1={1610.21}
                    y2={2700.51}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-30"
                    x1={1387.58}
                    x2={423.78}
                    y1={1321.33}
                    y2={2411.63}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-31"
                    x1={2074.52}
                    x2={1110.71}
                    y1={1928.57}
                    y2={3018.87}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-32"
                    x1={1970.85}
                    x2={1007.04}
                    y1={1836.92}
                    y2={2927.23}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-33"
                    x1={1763.97}
                    x2={800.16}
                    y1={1654.05}
                    y2={2744.35}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-34"
                    x1={1602.9}
                    x2={639.09}
                    y1={1511.67}
                    y2={2601.97}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-35"
                    x1={1320.44}
                    x2={2210.08}
                    y1={808.61}
                    y2={808.61}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-36"
                    x1={911.65}
                    x2={1780.76}
                    y1={808.22}
                    y2={808.22}
                />
                <linearGradient
                    id="linear-gradient-37"
                    x1={1626.17}
                    x2={1637.44}
                    y1={132.64}
                    y2={1462.7}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0.49} stopColor="#ebeff2"/>
                    <stop offset={1} stopColor="#fff"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-37"
                    id="linear-gradient-38"
                    x1={1622.38}
                    x2={1633.42}
                    y1={142.23}
                    y2={1445.17}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-37"
                    id="linear-gradient-39"
                    x1={1635.06}
                    x2={1646.52}
                    y1={128.48}
                    y2={1480.99}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-37"
                    id="linear-gradient-40"
                    x1={1271.47}
                    x2={1282.36}
                    y1={116.06}
                    y2={1401.98}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-37"
                    id="linear-gradient-41"
                    x1={1269.33}
                    x2={1279.71}
                    y1={139.9}
                    y2={1364.71}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-37"
                    id="linear-gradient-42"
                    x1={1276.93}
                    x2={1288}
                    y1={112.93}
                    y2={1419.62}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-37"
                    id="linear-gradient-43"
                    x1={930.16}
                    x2={1768.29}
                    y1={474.68}
                    y2={474.68}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-44"
                    x1={1291.27}
                    x2={1376.88}
                    y1={1384.2}
                    y2={1384.2}
                    gradientTransform="rotate(72.23 1334.078 1384.23)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-45"
                    x1={1089.76}
                    x2={1578.39}
                    y1={1095.1}
                    y2={1095.1}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-46"
                    x1={1160.47}
                    x2={1507.68}
                    y1={1179.77}
                    y2={1179.77}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-5"
                    id="linear-gradient-47"
                    x1={1231.67}
                    x2={1436.48}
                    y1={1265.38}
                    y2={1265.38}
                />
                <linearGradient
                    id="linear-gradient-48"
                    x1={2273.77}
                    x2={2385.7}
                    y1={2561.52}
                    y2={2561.52}
                    gradientTransform="rotate(2.66 882.533 2893.38)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#444b8c"/>
                    <stop offset={1} stopColor="#26264f"/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-49"
                    x1={2360.77}
                    x2={2304.54}
                    y1={2427.66}
                    y2={2530.5}
                    gradientTransform="rotate(2.66 882.533 2893.38)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ffc444"/>
                    <stop offset={1} stopColor="#f36f56"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-50"
                    x1={2151.02}
                    x2={2348.95}
                    y1={2547.4}
                    y2={1684.07}
                    gradientTransform="rotate(2.66 882.533 2893.38)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-48"
                    id="linear-gradient-51"
                    x1={2403.95}
                    x2={2557.97}
                    y1={2671.63}
                    y2={2671.63}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-49"
                    id="linear-gradient-52"
                    x1={2487.77}
                    x2={2547.13}
                    y1={2663.81}
                    y2={2540.95}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-53"
                    x1={2153.76}
                    x2={2351.69}
                    y1={2548.03}
                    y2={1684.69}
                    gradientTransform="rotate(2.66 882.533 2893.38)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-54"
                    x1={2396.94}
                    x2={2746.6}
                    y1={2233.78}
                    y2={1682.54}
                />
                <linearGradient
                    id="linear-gradient-55"
                    x1={2196.6}
                    x2={2226.68}
                    y1={1243.47}
                    y2={1931.86}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#e38ddd"/>
                    <stop offset={1} stopColor="#9571f6"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-56"
                    x1={2330.48}
                    x2={2553.62}
                    y1={973.77}
                    y2={1765.23}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-7"
                    id="linear-gradient-57"
                    x1={2441.98}
                    x2={2791.65}
                    y1={2262.35}
                    y2={1711.11}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-55"
                    id="linear-gradient-58"
                    x1={2377.16}
                    x2={2407.25}
                    y1={1235.58}
                    y2={1923.96}
                />
                <linearGradient
                    id="linear-gradient-59"
                    x1={1128.33}
                    x2={1038.64}
                    y1={1675.38}
                    y2={1447.58}
                    gradientTransform="rotate(-29.84 726.947 -1146.269)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#311944"/>
                    <stop offset={1} stopColor="#6b3976"/>
                </linearGradient>
                <linearGradient
                    xlinkHref="#linear-gradient-59"
                    id="linear-gradient-60"
                    x1={1100.93}
                    x2={1011.14}
                    y1={1686.3}
                    y2={1458.25}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-55"
                    id="linear-gradient-61"
                    x1={2226.29}
                    x2={2449.43}
                    y1={893.71}
                    y2={1685.19}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-55"
                    id="linear-gradient-62"
                    x1={3355.21}
                    x2={3385.3}
                    y1={3345.85}
                    y2={4034.24}
                    gradientTransform="rotate(19.54 887.116 -1078.291)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-3"
                    id="linear-gradient-63"
                    x1={2194.06}
                    x2={2339.29}
                    y1={1273.28}
                    y2={1500.28}
                />
                <linearGradient
                    xlinkHref="#linear-gradient-48"
                    id="linear-gradient-64"
                    x1={265.8}
                    x2={344.59}
                    y1={1845.26}
                    y2={1874.52}
                    gradientTransform="translate(83.12)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-2"
                    id="linear-gradient-65"
                    x1={45.13}
                    x2={264.59}
                    y1={2116.02}
                    y2={2484.03}
                    gradientTransform="translate(83.12)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-49"
                    id="linear-gradient-66"
                    x1={79.06}
                    x2={298.52}
                    y1={2095.78}
                    y2={2463.8}
                    gradientTransform="translate(83.12)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-2"
                    id="linear-gradient-67"
                    x1={427.17}
                    x2={1045.02}
                    y1={2264.27}
                    y2={2740.32}
                    gradientTransform="translate(83.12)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-48"
                    id="linear-gradient-68"
                    x1={548.58}
                    x2={611.6}
                    y1={1709.48}
                    y2={2111.28}
                    gradientTransform="translate(83.12)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-49"
                    id="linear-gradient-69"
                    x1={435.15}
                    x2={1053.01}
                    y1={2253.9}
                    y2={2729.96}
                    gradientTransform="translate(83.12)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-48"
                    id="linear-gradient-70"
                    x1={409.38}
                    x2={419.52}
                    y1={2068.05}
                    y2={2071.82}
                    gradientTransform="rotate(80.78 484.856 2129.574)"
                />
                <linearGradient
                    xlinkHref="#linear-gradient-48"
                    id="linear-gradient-71"
                    x1={737.54}
                    x2={747.68}
                    y1={2065.71}
                    y2={2069.48}
                    gradientTransform="translate(83.12)"
                />
                <clipPath id="clippath">
                    <path
                        d="M1162.97 2434.73c23.74 1.31 76.54-16.77 88.36-27.16 78.66-69.13 234.35-189 248.13-298.84 2.35-18.76-77.38-51.39-85.84-70.58-45.79-33.14-63.73-41.8-91.78-94.69-82.81-156.15 211.14-365.89-58.98-508.96-197.86-104.8-388.73-65.38-305.57-387.31 83.17-321.93-65.07-964.24-451.69-800.7-221.88 93.85-72.76 408.44-212.44 594.12-132.73 176.44-80.05 351.77 104.79 506.78s57.87 224.2-36.45 397.78c-113.3 208.51 220.74 311.22 379 345.48 127.45 27.59 433.35 183.83 422.47 344.08Z"
                        style={{
                            fill: "url(#linear-gradient)",
                            strokeWidth: 0,
                        }}
                    />
                </clipPath>
                <clipPath id="clippath-1">
                    <path
                        d="M1236.3 2547.61c-23.42-4.08-70.78-33.62-79.95-46.41-61.03-85.11-185.63-237.03-174.26-347.15 1.94-18.81 86.99-32.59 99.56-49.38 52.09-21.95 71.52-26.33 110.79-71.53 115.93-133.42-123.08-404.11 172.37-482.51 216.41-57.42 393.46 24.07 385.12-308.32-8.34-332.39 281.09-924.65 620.8-678.05 194.96 141.52-21.33 414.32 72.82 626.74 89.47 201.85-1.44 360.76-216.5 470.04-215.06 109.28-106.99 205.35-54.3 395.74 63.3 228.7-285.3 253.35-447.22 250.99-130.38-1.9-463.67 81.25-489.24 239.82Z"
                        style={{
                            fill: "url(#linear-gradient-2)",
                            strokeWidth: 0,
                        }}
                    />
                </clipPath>
                <style>
                    {
                        ".cls-13,.cls-36,.cls-39{stroke-width:0}.cls-13{fill:#f4f7fa}.cls-85{mix-blend-mode:soft-light}.cls-36{fill:#fff}.cls-39{fill:#fcfdfe}"
                    }
                </style>
            </defs>
            <g
                style={{
                    isolation: "isolate",
                }}
            >
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Illustration">
                        <path
                            d="M2760.15 1189.87C2684.22 692.88 2372.91 82.28 1757.88 18.38c0 0-466.96-56.8-927.28 29.29-273.2 51.09-512.75 203.17-664.33 421.76C14.68 688.01-35.95 954.55 25.5 1208.65c39.91 165.04 66.88 335.86 59.48 505.45-9.33 213.88-26.91 438.77 67.64 638.22 138.54 292.23 476.56 378.31 771.5 405.76 108.69 10.12 217.78 14.19 326.57 22.8 208.69 16.5 442.72-10.2 643.86-64.53 1025.05-276.9 941.53-1029.49 865.6-1526.48Z"
                            className="cls-13"
                        />
                        <path
                            d="M1162.97 2434.73c23.74 1.31 76.54-16.77 88.36-27.16 78.66-69.13 234.35-189 248.13-298.84 2.35-18.76-77.38-51.39-85.84-70.58-45.79-33.14-63.73-41.8-91.78-94.69-82.81-156.15 211.14-365.89-58.98-508.96-197.86-104.8-388.73-65.38-305.57-387.31 83.17-321.93-65.07-964.24-451.69-800.7-221.88 93.85-72.76 408.44-212.44 594.12-132.73 176.44-80.05 351.77 104.79 506.78s57.87 224.2-36.45 397.78c-113.3 208.51 220.74 311.22 379 345.48 127.45 27.59 433.35 183.83 422.47 344.08Z"
                            style={{
                                fill: "url(#linear-gradient)",
                            }}
                        />
                        <g
                            className="cls-85"
                            style={{
                                clipPath: "url(#clippath)",
                            }}
                        >
                            <path
                                d="m1370.76 2266.97 3.01-4.06c-625.99-463.25-909.29-1247.7-757.85-2098.4l-4.98-.89c-71.77 403.17-44.4 806.82 79.18 1167.31 129.91 378.99 365.27 702.66 680.64 936.04Z"
                                className="cls-39"
                            />
                            <path
                                d="M304.47 1826.42c211.11-28.33 544.26 31.7 742.65 133.82l2.31-4.5c-199.17-102.52-533.66-162.79-745.64-134.34l.67 5.01ZM1248.92 2174.63l4.02-3.07c-70.46-92.13-91.63-216.34-62.94-369.18 21.04-112.07 67.9-236.63 139.3-370.24l-4.46-2.38c-71.63 134.06-118.67 259.12-139.81 371.69-28.97 154.31-7.48 279.87 63.89 373.18ZM674.57 1279.08l4.17-2.86c-123.88-180.49-338.95-262.56-497.56-299.62l-1.15 4.93c157.74 36.86 371.59 118.41 494.55 297.56ZM578.17 787.32l5.03.56c27.38-245.09 206.11-432.35 310.21-522.16l-3.3-3.83c-104.66 90.3-284.36 278.63-311.93 525.43Z"
                                className="cls-39"
                            />
                        </g>
                        <path
                            d="M1236.3 2547.61c-23.42-4.08-70.78-33.62-79.95-46.41-61.03-85.11-185.63-237.03-174.26-347.15 1.94-18.81 86.99-32.59 99.56-49.38 52.09-21.95 71.52-26.33 110.79-71.53 115.93-133.42-123.08-404.11 172.37-482.51 216.41-57.42 393.46 24.07 385.12-308.32-8.34-332.39 281.09-924.65 620.8-678.05 194.96 141.52-21.33 414.32 72.82 626.74 89.47 201.85-1.44 360.76-216.5 470.04-215.06 109.28-106.99 205.35-54.3 395.74 63.3 228.7-285.3 253.35-447.22 250.99-130.38-1.9-463.67 81.25-489.24 239.82Z"
                            style={{
                                fill: "url(#linear-gradient-2)",
                            }}
                        />
                        <g
                            className="cls-85"
                            style={{
                                clipPath: "url(#clippath-1)",
                            }}
                        >
                            <path
                                d="m1071.75 2337.27-2.01-4.64c714.41-309.96 1167.51-1010.19 1212.04-1873.12l5.05.26c-21.1 408.97-138.91 796.01-340.68 1119.29-212.12 339.87-514.48 602.05-874.4 758.2Z"
                                className="cls-39"
                            />
                            <path
                                d="M2209.97 2148.84c-199.26-75.26-537.37-92-753.69-37.3l-1.24-4.9c217.17-54.91 556.63-38.1 756.71 37.47l-1.79 4.73ZM1211.29 2274.82l-3.22-3.9c89.44-73.84 138.11-190.06 144.66-345.43 4.81-113.92-12.73-245.85-52.11-392.13l4.88-1.31c39.52 146.77 57.11 279.22 52.28 393.65-6.61 156.87-55.9 274.33-146.5 349.12ZM1973 1532.07l-3.42-3.73c161.43-147.86 389.48-179.25 552.36-179.55v5.06c-161.98.3-388.72 31.46-548.95 178.22ZM2177.93 1074.77l-5.02-.59c28.66-244.94-103.17-467.72-184.31-578.72l4.08-2.99c81.57 111.6 214.11 335.63 185.25 582.29Z"
                                className="cls-39"
                            />
                        </g>
                        <path
                            d="m727.78 600.27 111.02-7.46 5.8 117.94H661.62l39.81-90.36a34.333 34.333 0 0 1 26.35-20.12Z"
                            style={{
                                fill: "url(#linear-gradient-3)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M822.34 607.17a25.58 25.58 0 0 1 24.45-15.31l916.3 36.77c12.21.5 23.23 7.43 28.96 18.23l49.49 93.26-1060.18-39.15 40.99-93.79Z"
                            style={{
                                fill: "url(#linear-gradient-4)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M491.36 772.96v1770.68c0 39.19 26.92 73.25 65.05 82.3l191.81 45.55L958.3 1225.78l-204.03-561-189.09 24.28c-42.21 5.42-73.82 41.35-73.82 83.9Z"
                            style={{
                                fill: "url(#linear-gradient-5)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M694.65 738.47v1858.24c0 42.8 36.33 76.59 89.78 98.01l1140.38-82.74c27.76-27.31 57.59-59.38 57.59-98.01V788.6c0-39.44-31.05-71.88-70.45-73.62L771.57 664.85c-41.93-1.84-76.92 31.65-76.92 73.61Z"
                            style={{
                                fill: "url(#linear-gradient-6)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M608.17 2578.88V754.27c0-31.62 23.84-63.7 53.45-77.59l-33.88 4.35c-30.17 11.06-51.2 39.93-51.2 73.24v1824.62c0 22.73 9.82 43.54 25.8 57.97l48.1 11.42c-25.47-13.14-42.28-39.63-42.28-69.39Z"
                            style={{
                                fill: "url(#linear-gradient-7)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1911.96 714.98-953.53-41.91c.26 11.37 1.03 22.93 2.44 34.67 25.63 213.29 224.59 247.36 301.19 484.91 70.19 217.67-70.97 269.39 12.05 460.82 77.8 179.38 223.08 183.16 310.22 409.62 38.24 99.37 18.94 121.19 51.2 225.89 27.6 89.57 79.28 195.3 179.72 305.66l98.8-7.17c38.53-2.79 68.35-34.87 68.35-73.49V788.6c0-39.44-31.05-71.88-70.45-73.61Z"
                            style={{
                                fill: "url(#linear-gradient-8)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M870.2 929.75v502.53c0 35.67 28.91 64.58 64.58 64.58h842.18c35.67 0 64.58-28.91 64.58-64.58V968.92c0-34.5-27.12-62.9-61.58-64.51l-842.18-39.17c-36.8-1.71-67.58 27.66-67.58 64.51Z"
                            style={{
                                fill: "url(#linear-gradient-9)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1812.34 1432.27V968.91c0-34.5-27.12-62.91-61.58-64.51l-826.21-38.43c-30.66 4.88-54.35 31.44-54.35 63.76v502.53c0 35.66 28.91 64.58 64.58 64.58h812.98c35.66 0 64.58-28.91 64.58-64.58Z"
                            style={{
                                fill: "#d8dee8",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1513.24 973.2v30.31c0 13.11 10.37 23.86 23.47 24.34l198.26 7.25c13.79.5 25.25-10.54 25.25-24.34v-30.31c0-13.11-10.37-23.86-23.47-24.34l-198.26-7.25c-13.79-.5-25.25 10.54-25.25 24.34Z"
                            style={{
                                mixBlendMode: "soft-light",
                                fill: "#f4f7fa",
                                opacity: 0.7,
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1907.8 807.13c0 17.05-11.8 30.87-26.35 30.87s-26.35-13.82-26.35-30.87 11.8-30.87 26.35-30.87 26.35 13.82 26.35 30.87Z"
                            style={{
                                fill: "url(#linear-gradient-10)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1516.04 1963.08-.99-74.91c-.35-26.12-21.8-47-47.91-46.66l-204.26 2.71c-26.12.35-47 21.8-46.66 47.91l1.04 78.02c.35 26.4 22.24 47.39 48.63 46.64l204.22-5.82c25.83-.74 46.28-22.06 45.94-47.9Z"
                            style={{
                                fill: "url(#linear-gradient-11)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1213.2 1664.49 1.29 96.93c.35 26.11 21.8 47 47.91 46.66l204.26-2.71c26.12-.35 47-21.8 46.66-47.91l-1.25-94.22c-.34-25.87-21.41-46.66-47.29-46.66h-204.29c-26.36 0-47.64 21.56-47.29 47.92Z"
                            style={{
                                fill: "url(#linear-gradient-12)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1552.15 1960.61c.35 26.4 22.24 47.39 48.63 46.64l208.4-5.94c17.76-.51 31.91-15 31.99-32.77.15-34.33.36-84.09.36-84.09 0-26.36-21.56-47.64-47.92-47.29l-195.77 2.6c-26.12.35-47 21.8-46.66 47.91l.97 72.92Z"
                            style={{
                                fill: "url(#linear-gradient-13)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1218.99 2100.87 1.03 77.91c.35 26.68 22.7 47.78 49.35 46.62l204.17-8.92c25.53-1.12 45.56-22.32 45.22-47.87l-.99-74.8c-.35-26.4-22.24-47.39-48.63-46.64l-204.22 5.82c-25.83.74-46.28 22.06-45.94 47.9Z"
                            style={{
                                fill: "url(#linear-gradient-14)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M870.2 1979.41c0 26.65 22 48.03 48.64 47.27l216.37-6.16c25.83-.74 46.28-22.06 45.94-47.9l-1.06-80.01c-.35-26.12-21.8-47-47.91-46.66l-226.04 3c-19.81.26-35.75 16.36-35.78 36.17-.07 38.48-.14 94.28-.14 94.28Z"
                            style={{
                                fill: "url(#linear-gradient-15)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1521.76 2393.53-1.25-94.15c-.35-26.68-22.7-47.78-49.35-46.62l-204.17 8.92c-25.53 1.12-45.56 22.32-45.22 47.87l1.3 98.05c.36 27.03 23.27 48.26 50.25 46.57l204.12-12.82c25.16-1.58 44.66-22.62 44.32-47.83Z"
                            style={{
                                fill: "url(#linear-gradient-16)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1185.67 2314.01c-.35-26.68-22.7-47.78-49.35-46.62l-230.85 10.09c-19.32.84-34.58 16.69-34.68 36.03-.23 44.33-.59 115.62-.59 115.62 0 27.28 23.02 48.91 50.25 47.2l222.23-13.95c25.16-1.58 44.66-22.62 44.32-47.82l-1.33-100.54Z"
                            style={{
                                fill: "url(#linear-gradient-17)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1178.34 1761.9-1.31-98.67c-.34-25.87-21.41-46.66-47.29-46.66H917.48c-26.12 0-47.29 21.17-47.29 47.29v101.5c0 26.36 21.56 47.64 47.92 47.29l213.57-2.84c26.12-.35 47-21.8 46.66-47.91Z"
                            style={{
                                fill: "url(#linear-gradient-18)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1556.59 2294.92 1.22 91.66c.36 27.03 23.27 48.26 50.25 46.57l189.15-11.88c24.92-1.57 44.33-22.23 44.33-47.2v-88.1c0-26.93-22.45-48.42-49.35-47.24l-190.37 8.32c-25.53 1.12-45.56 22.32-45.22 47.87Z"
                            style={{
                                fill: "url(#linear-gradient-19)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1841.53 2085.21c0-26.65-22-48.03-48.64-47.27l-193.07 5.5c-25.83.74-46.28 22.06-45.94 47.9l.97 72.82c.35 26.68 22.7 47.78 49.35 46.62l205.3-8.97c17.52-.77 31.37-15.11 31.49-32.65.24-34.2.54-83.94.54-83.94Z"
                            style={{
                                fill: "url(#linear-gradient-20)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1549.45 1756.98c.35 26.12 21.8 47 47.91 46.66l211.53-2.81c17.99-.24 32.46-14.85 32.49-32.84.07-40.38.15-104.12.15-104.12 0-26.12-21.17-47.29-47.29-47.29H1595.5c-26.36 0-47.64 21.56-47.29 47.92l1.23 92.48Z"
                            style={{
                                fill: "url(#linear-gradient-21)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1182.88 2103.34c-.35-26.4-22.24-47.39-48.63-46.64l-228.45 6.51c-19.56.56-35.16 16.52-35.23 36.09-.15 38.27-.36 94.14-.36 94.14 0 26.93 22.45 48.42 49.35 47.24l219.16-9.58c25.53-1.12 45.56-22.32 45.22-47.87l-1.06-79.89Z"
                            style={{
                                fill: "url(#linear-gradient-22)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1531.93 1964.22-.99-74.91c-.35-26.12-21.8-47-47.91-46.66l-204.26 2.71c-26.12.35-47.01 21.8-46.66 47.91l1.04 78.02c.35 26.4 22.24 47.39 48.63 46.64l204.22-5.82c25.83-.74 46.28-22.06 45.94-47.9Z"
                            style={{
                                fill: "url(#linear-gradient-23)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1229.09 1665.64 1.29 96.93c.35 26.12 21.8 47.01 47.91 46.66l204.26-2.71c26.12-.35 47-21.8 46.66-47.91l-1.25-94.22c-.34-25.87-21.41-46.66-47.29-46.66h-204.29c-26.36 0-47.64 21.56-47.29 47.92Z"
                            style={{
                                fill: "url(#linear-gradient-24)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1568.04 1961.76c.35 26.4 22.24 47.39 48.63 46.64l208.4-5.94c17.76-.51 31.91-15 31.99-32.77.15-34.33.36-84.09.36-84.09 0-26.36-21.56-47.64-47.92-47.29l-195.77 2.6c-26.12.35-47 21.8-46.66 47.91l.97 72.92Z"
                            style={{
                                fill: "url(#linear-gradient-25)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1234.88 2102.02 1.03 77.91c.35 26.68 22.69 47.78 49.35 46.62l204.17-8.92c25.53-1.12 45.56-22.32 45.22-47.87l-.99-74.8c-.35-26.4-22.24-47.39-48.63-46.64l-204.22 5.82c-25.83.74-46.28 22.06-45.94 47.9Z"
                            style={{
                                fill: "url(#linear-gradient-26)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M886.09 1980.56c0 26.64 22 48.03 48.64 47.27l216.37-6.16c25.83-.74 46.28-22.06 45.94-47.9l-1.06-80.01c-.35-26.11-21.8-47-47.91-46.66l-226.04 3c-19.81.26-35.75 16.36-35.78 36.17-.07 38.48-.14 94.28-.14 94.28Z"
                            style={{
                                fill: "url(#linear-gradient-27)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1537.65 2394.67-1.25-94.15c-.35-26.68-22.69-47.78-49.35-46.62l-204.17 8.92c-25.53 1.12-45.56 22.32-45.22 47.87l1.3 98.05c.36 27.03 23.27 48.26 50.25 46.57l204.12-12.82c25.16-1.58 44.66-22.62 44.32-47.82Z"
                            style={{
                                fill: "url(#linear-gradient-28)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1201.57 2315.15c-.35-26.68-22.7-47.78-49.35-46.62l-230.85 10.09c-19.32.84-34.58 16.69-34.68 36.03-.23 44.34-.59 115.62-.59 115.62 0 27.28 23.02 48.91 50.25 47.2l222.23-13.95c25.16-1.58 44.66-22.62 44.32-47.83l-1.33-100.54Z"
                            style={{
                                fill: "url(#linear-gradient-29)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1194.23 1763.05-1.31-98.66c-.34-25.87-21.41-46.66-47.29-46.66H933.37c-26.12 0-47.29 21.17-47.29 47.29v101.5c0 26.36 21.56 47.64 47.92 47.29l213.57-2.83c26.12-.35 47-21.8 46.66-47.91Z"
                            style={{
                                fill: "url(#linear-gradient-30)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1572.48 2296.07 1.22 91.66c.36 27.03 23.27 48.26 50.25 46.57l189.15-11.88c24.92-1.56 44.33-22.23 44.33-47.2v-88.1c0-26.93-22.45-48.42-49.36-47.24l-190.37 8.32c-25.53 1.12-45.56 22.32-45.22 47.87Z"
                            style={{
                                fill: "url(#linear-gradient-31)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1857.42 2086.35c0-26.64-22-48.03-48.64-47.27l-193.07 5.5c-25.83.74-46.28 22.06-45.94 47.9l.97 72.82c.35 26.68 22.7 47.78 49.35 46.62l205.3-8.97c17.52-.77 31.37-15.11 31.49-32.65.24-34.2.54-83.94.54-83.94Z"
                            style={{
                                fill: "url(#linear-gradient-32)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1565.34 1758.12c.35 26.12 21.8 47 47.91 46.66l211.53-2.81c17.99-.24 32.46-14.85 32.49-32.84.07-40.38.15-104.12.15-104.12 0-26.12-21.17-47.29-47.29-47.29h-198.74c-26.36 0-47.64 21.56-47.29 47.92l1.23 92.48Z"
                            style={{
                                fill: "url(#linear-gradient-33)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1198.77 2104.49c-.35-26.4-22.24-47.39-48.63-46.64l-228.45 6.51c-19.56.56-35.15 16.52-35.23 36.09-.15 38.27-.36 94.14-.36 94.14 0 26.93 22.45 48.42 49.35 47.24l219.16-9.58c25.53-1.12 45.56-22.32 45.22-47.87l-1.06-79.89Z"
                            style={{
                                fill: "url(#linear-gradient-34)",
                                strokeWidth: 0,
                            }}
                        />
                        <g
                            style={{
                                mixBlendMode: "soft-light",
                                opacity: 0.3,
                            }}
                        >
                            <path
                                d="M1810.13 1617.72h-198.74c-26.36 0-47.64 21.56-47.29 47.92l1.23 92.48c.35 26.11 21.8 47 47.91 46.66l211.53-2.81c17.99-.24 32.46-14.85 32.49-32.84.07-40.38.15-104.12.15-104.12 0-26.12-21.17-47.29-47.29-47.29ZM1809.51 1838.32l-195.77 2.6c-26.12.35-47 21.8-46.66 47.91l.97 72.92c.35 26.4 22.24 47.39 48.63 46.64l208.4-5.94c17.76-.51 31.91-15 31.99-32.77.15-34.33.36-84.09.36-84.09 0-26.36-21.56-47.64-47.92-47.29ZM1857.42 2375.22v-88.1c0-26.93-22.45-48.42-49.35-47.24l-183.7 8.03c2.85 12.27 6.45 25.77 11.16 41.08 13.42 43.56 32.56 90.94 60.21 140.81l117.36-7.37c24.92-1.56 44.33-22.23 44.33-47.2ZM1617.34 2211.89c.92.01 1.83.06 2.76.02l205.3-8.97c17.52-.77 31.37-15.11 31.49-32.65.23-34.2.54-83.94.54-83.94 0-26.65-22-48.03-48.64-47.27l-193.07 5.5c-12.98.37-24.59 5.94-32.9 14.67.5 1.28 1.01 2.54 1.51 3.83 26.6 69.12 25.37 100.74 33.01 148.8ZM1483.02 1842.65l-54.29.72c35.28 32.14 70.9 66.89 103.13 116.04l-.93-70.1c-.35-26.12-21.8-47-47.91-46.66ZM1529.2 1758.6l-1.25-94.22c-.34-25.87-21.41-46.66-47.29-46.66h-204.29c-5.24 0-10.26.88-14.96 2.45 3.48 10.63 7.67 21.7 12.7 33.3 30.57 70.49 71.56 113.86 115.35 154.28l93.09-1.24c26.11-.35 47-21.8 46.66-47.91Z"
                                className="cls-13"
                            />
                        </g>
                        <path
                            d="M1776.96 1496.85c35.67 0 64.58-28.91 64.58-64.58V968.91c0-34.5-27.12-62.91-61.58-64.51l-751.3-34.94c72.27 93.95 181.22 161.36 233.4 323.18 46.71 144.87-.18 216.24-12.3 304.2h527.2Z"
                            style={{
                                fill: "#fff",
                                mixBlendMode: "soft-light",
                                opacity: 0.4,
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1801.29 826.04v1.82c0 15.58-13.46 27.66-29.02 26.99l-833.7-35.81c-14.75-.63-26.92-13.43-26.92-28.58v-1.77c0-15.15 11.75-26.94 26.5-26.33l834.22 34.31c15.56.64 28.92 13.79 28.92 29.36Z"
                            style={{
                                fill: "url(#linear-gradient-35)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M1780.76 825.29v1.82c0 15.56-12.27 27.63-27.8 26.97l-814.7-35.03c-14.74-.63-26.62-13.44-26.62-28.58v-1.77c0-15.15 11.75-26.94 26.5-26.33l814.54 33.57c15.54.64 28.08 13.8 28.08 29.36Z"
                            style={{
                                fill: "url(#linear-gradient-36)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1786.06 121.07-24.84 633.94-1.39 35.91c-1.43 36.2-30.49 62.88-66.4 61.3l-770.34-34.83c41.94-4.64 44.14-42.01 44.14-42.01s1.78-655.75 1.82-678.31l53.64 59.46 40.67-44.77 42.54 46.97 15.34-16.65 26.21-28.5 43.12 47.42 42.44-45.54 43.72 47.84 43.38-45.9 44.32 48.22 44.3-46.3 44.93 48.68 45.31-46.7 45.55 49.11 46.3-47.11 46.19 49.59 47.34-47.53 46.87 50.03 54.86-54.33Z"
                            style={{
                                fill: "#bfc8d6",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1793.14 121.07-24.84 633.94-1.39 35.91c-1.43 36.2-30.49 62.88-66.4 61.3l-770.34-34.83c41.94-4.64 44.14-42.01 44.14-42.01s1.78-655.75 1.82-678.31l53.64 59.46 40.67-44.77 42.54 46.97 15.34-16.65 26.21-28.5 43.12 47.42 42.44-45.54 43.72 47.84 43.38-45.9 44.32 48.22 44.3-46.3 44.93 48.68 45.31-46.7 45.55 49.11 46.3-47.11 46.19 49.59 47.34-47.53 46.87 50.03 54.86-54.33Z"
                            className="cls-36"
                        />
                        <path
                            d="m1681.59 506.81-103.09-4.1c-6.86-.27-12.42 5.06-12.63 12.11l-1.42 47.9c-.22 7.53 5.76 14.08 13.1 14.34l102.79 3.65c6.93.25 12.55-5.06 12.8-12.1l1.68-47.3c.27-7.6-5.76-14.2-13.23-14.5Z"
                            style={{
                                fill: "url(#linear-gradient-37)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1678.19 600.32-102.66-3.85c-6.77-.25-12.22 4.97-12.42 11.9l-1.47 49.59c-.22 7.5 5.8 14.08 13.14 14.35l102.33 3.83c6.86.26 12.39-4.94 12.64-11.88l1.75-49.42c.27-7.6-5.82-14.23-13.31-14.51Z"
                            style={{
                                strokeWidth: 0,
                                fill: "url(#linear-gradient-38)",
                            }}
                        />
                        <path
                            d="m1700.1 372.27 3.14-88.5c.27-7.72-5.74-14.29-13.25-14.49l-104.25-2.69c-6.98-.18-12.68 5.42-12.89 12.66l-2.61 88.36c-.22 7.6 5.72 14.12 13.08 14.33l103.73 2.88c7.05.2 12.82-5.34 13.07-12.56Z"
                            style={{
                                fill: "url(#linear-gradient-39)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1469.7 498.38-390.76-15.53c-6.2-.25-11.11 4.84-11.16 11.55l-.35 51.34c-.05 7.16 5.49 13.39 12.12 13.62l389.54 13.85c6.64.24 11.98-4.97 12.16-11.86l1.26-48.76c.19-7.45-5.64-13.91-12.81-14.19Z"
                            style={{
                                fill: "url(#linear-gradient-40)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1467.19 592.41-389.09-14.58c-6.12-.23-10.93 4.75-10.98 11.34l-.35 50.96c-.05 7.14 5.52 13.38 12.15 13.63l387.85 14.51c6.58.25 11.84-4.85 12.01-11.65l1.29-50c.19-7.44-5.7-13.94-12.89-14.2Z"
                            style={{
                                fill: "url(#linear-gradient-41)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1486.26 366.6 2.28-88.66c.19-7.56-5.63-13.99-12.83-14.18l-394.98-10.2c-6.31-.16-11.34 5.17-11.38 12.06l-.61 88.77c-.05 7.23 5.45 13.42 12.09 13.61l393.01 10.92c6.76.19 12.24-5.23 12.42-12.31Z"
                            style={{
                                fill: "url(#linear-gradient-42)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m1768.29 755.01-1.39 35.91c-1.43 36.2-30.49 62.88-66.4 61.3l-770.34-34.83c41.94-4.64 44.14-42.01 44.14-42.01s1.78-655.75 1.82-678.31l53.64 59.46 40.67-44.77 42.54 46.97 15.34-16.65c30.49 26.9 59.38 63.92 81.18 114.8 9.79 22.9 18.16 48.57 24.53 77.39 2.98 13.45 5.99 26.15 9.04 38.21 12.77 50.12 26.32 88.65 41.76 118.53 19.57 37.92 42.18 61.95 69.86 78.1 15.65 9.15 32.95 15.81 52.27 21.01 21.59 5.87 45.75 9.99 72.96 13.84 23.55 3.35 49.37 6.53 77.9 10.54 1.69.24 3.38.48 5.07.75 50.93 7.84 93.45 24.91 126.93 47.38 38.32 25.68 64.77 58.39 78.49 92.36Z"
                            style={{
                                fill: "url(#linear-gradient-43)",
                                opacity: 0.5,
                                mixBlendMode: "multiply",
                                strokeWidth: 0,
                            }}
                        />
                        <g
                            style={{
                                opacity: 0.7,
                                mixBlendMode: "multiply",
                            }}
                        >
                            <circle
                                cx={1334.07}
                                cy={1384.2}
                                r={42.81}
                                style={{
                                    fill: "url(#linear-gradient-44)",
                                    strokeWidth: 0,
                                }}
                                transform="rotate(-72.23 1334.104 1384.2)"
                            />
                            <path
                                d="M1334.07 1025.4c-89.44 0-171.22 32.74-234.05 86.87-12.89 11.11-13.82 30.75-1.78 42.78l1.21 1.21c10.71 10.71 27.91 11.49 39.36 1.59 52.38-45.25 120.6-72.65 195.26-72.65s142.87 27.4 195.26 72.65c11.46 9.9 28.66 9.11 39.36-1.59l1.21-1.21c12.03-12.03 11.11-31.67-1.78-42.78-62.83-54.13-144.61-86.87-234.05-86.87Z"
                                style={{
                                    fill: "url(#linear-gradient-45)",
                                    strokeWidth: 0,
                                }}
                            />
                            <path
                                d="M1334.07 1125.07c-61.79 0-118.49 21.66-163.01 57.76-13.32 10.81-14.17 30.88-2.04 43l.21.21c10.63 10.63 27.45 11.21 39.16 1.78 34.39-27.69 78.08-44.29 125.68-44.29s91.29 16.6 125.68 44.29c11.71 9.43 28.53 8.85 39.16-1.78l.21-.21c12.13-12.13 11.28-32.2-2.04-43-44.52-36.1-101.22-57.76-163.01-57.76Z"
                                style={{
                                    fill: "url(#linear-gradient-46)",
                                    strokeWidth: 0,
                                }}
                            />
                            <path
                                d="M1240.33 1297.13c10.52 10.52 26.85 11.71 39.31 3.57 15.65-10.23 34.35-16.17 54.44-16.17s38.79 5.94 54.44 16.17c12.46 8.14 28.78 6.95 39.31-3.57l.14-.14c12.9-12.9 10.87-34.35-4.2-44.63-25.55-17.43-56.42-27.63-89.68-27.63s-64.13 10.2-89.68 27.63c-15.07 10.28-17.1 31.73-4.2 44.63l.14.14Z"
                                style={{
                                    fill: "url(#linear-gradient-47)",
                                    strokeWidth: 0,
                                }}
                            />
                        </g>
                        <path
                            d="M2380.2 2572.86c19.91 16.09 21.04 27.53 20.4 33.1-1.04 8.98-7.81 12.47-24.02 29.43-21.92 22.94-18.57 26.01-29.73 34.31-24.64 18.31-59.49 17.1-61.59 10.87-1.48-4.37 14.28-7.94 32.22-28.71 16.55-19.17 22.15-38.16 23.65-43.73 2.72-10.13 3.43-18.89 3.56-24.95l35.51-10.32Z"
                            style={{
                                fill: "url(#linear-gradient-48)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m2313.51 2523.81 39.21 68.33c9.44 4.18 18.47 2.07 26.85-10.11l-15.3-83.07-50.76 24.85Z"
                            style={{
                                fill: "url(#linear-gradient-49)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2265.97 1647.39c-38.2 64.49-100.17 188.96-112.71 357.26-12.38 166.12 29.53 292.73 47.08 339.94 32.89 88.47 90.09 181.36 123.31 225.64 22.41-9.37 35.6-24.07 58.01-33.44-3.37-12.19-13.76-52.46-20.3-76.44-5.07-18.58-14.41-52.96-16.33-60.31-16.09-61.53-3.39-107.7-7.82-183.79-5.16-88.74-25.5-78.43-22.44-131.71 4.57-79.55 49.65-98.13 101.4-213.28 35.42-78.82 72.63-161.61 38.43-206.87-43.04-56.97-174.02-21.15-188.64-17Z"
                            style={{
                                fill: "url(#linear-gradient-50)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2542.42 2635.35c11.95 7.6 19.15 25.65 13.71 37.02-5.35 11.18-18.99 7.64-52.11 17.82-35.48 10.9-42.5 21.92-68.65 21.89-10.57-.01-29.72-1.83-31.32-8.93-1.12-4.99 7.01-9.97 33.78-27.96 38.01-25.53 37.61-26.25 46.1-30.17 21.31-9.84 42.71-19.72 58.48-9.69Z"
                            style={{
                                fill: "url(#linear-gradient-51)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m2485.67 2581.23 14.56 66.51c2.03 2.98 22.77 10.09 37.29 0l-5.35-66.51h-46.5Z"
                            style={{
                                fill: "url(#linear-gradient-52)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2454.62 1664.38c-43.04-56.97-174.02-21.15-188.64-17-15.7 26.5-35.39 63.28-54.03 108.91 46.42-9.13 66.57-.84 75.96 10.17 36.44 42.73-77.66 137.09-54.2 280.26 9.18 56 33.13 81.2 28.74 149.59-3.26 50.89-19.07 76.66-30 113.91-6.56 22.36-11.64 49.85-11.88 83.07 32.82 72.14 75.95 140.76 103.09 176.94 22.41-9.37 35.6-24.07 58.01-33.44-3.37-12.19-13.76-52.46-20.3-76.45-5.07-18.58-14.41-52.96-16.33-60.31-16.09-61.53-3.39-107.7-7.82-183.79-5.16-88.74-25.5-78.43-22.44-131.71 4.57-79.55 49.65-98.13 101.4-213.28 35.42-78.82 72.63-161.61 38.43-206.87Z"
                            style={{
                                opacity: 0.3,
                                fill: "url(#linear-gradient-53)",
                                mixBlendMode: "multiply",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2368.27 1682.34c-3.7 148.4 1.9 320.36 26.32 509.91a3337.705 3337.705 0 0 0 80.64 415.68c4.4 2.49 19.85 10.49 39.64 6.74 14.01-2.65 23.38-9.91 27.55-13.6-3.48-24.95-7-62.71-4.11-108.33 4.96-78.43 23.42-94.4 31.35-175.56 6.95-71.17-.37-129.31-3.92-156.27-10.93-82.98-25.76-84.69-26.05-134.38-.45-76.52 34.53-103.93 53.77-176.84 12.83-48.64 19.63-121.25-12.63-220.82-70.85 17.82-141.69 35.65-212.54 53.48Z"
                            style={{
                                fill: "url(#linear-gradient-54)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2292.55 1090.22c-26.02 14.61-62.16 38.82-95.84 77.39-77.69 88.97-125.73 235.36-75.8 283.26 33.97 32.59 114.54 22.71 142.29-15.96 20.41-28.44 5.72-63.38-1.33-113.04-7.58-53.43-7.31-130.92 30.68-231.65Z"
                            style={{
                                fill: "url(#linear-gradient-55)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2594.23 1664.66c-28.77-379.18-120.48-534.4-112.47-580.47-11.54-8.3-57.15-21.49-160.46-7.89-8.83 3.24-32.4 12.75-55.75 34.11 0 0-5.43 4.95-12.86 13.65 72.58 13.71 146.51 55.03 173.13 113.59 46.1 111.96-39.52 237.1 0 335.89 20.77 51.92 53.99 97.93 93.65 140.95 45.35-11.31 76.42-27.96 74.76-49.82Z"
                            style={{
                                fill: "url(#linear-gradient-56)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m2580.81 1628.86-62.22 15.66c10.85 37.37 21.26 93.45 8.74 157.12-17.29 87.92-61.99 107.21-68.56 186.49-5.91 71.32 27.76 85.87 43.88 181 16.52 97.49-8.48 143.34-13.71 224.88-3.58 55.8 2.23 128.81 36.18 217.66a59.154 59.154 0 0 0 17.29-10.6c-3.48-24.95-7-62.71-4.11-108.33 4.96-78.43 23.42-94.4 31.35-175.56 6.95-71.17-.37-129.31-3.92-156.27-10.93-82.98-25.76-84.69-26.05-134.38-.45-76.52 34.53-103.93 53.77-176.84 12.83-48.64 19.63-121.25-12.63-220.82Z"
                            style={{
                                fill: "url(#linear-gradient-57)",
                                opacity: 0.3,
                                mixBlendMode: "multiply",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2265.55 1110.4s-27.49 25.01-43.52 61.76c-24.15 55.36 1.86 102.89 9.66 193.31 8.56 99.18-3.55 264.4-31.45 323.59a14.08 14.08 0 0 0-1.2 7.71c7.54 57.21 400.99 44.24 395.2-32.11-28.77-379.18-120.48-534.4-112.47-580.47-11.54-8.3-57.15-21.49-160.46-7.89-8.83 3.24-32.4 12.75-55.76 34.11Z"
                            style={{
                                fill: "url(#linear-gradient-58)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2382.5 981.07s25.41 79.75 33.64 89.35c8.23 9.6-33.03 34.68-64.65 23.37-29.04-10.39.02-54.65.02-54.65l30.99-58.07Z"
                            className="cls-36"
                        />
                        <path
                            d="M2282.19 1024.46c-17.13-7.26-30.72-29.37-27.78-50.03 2.53-17.77 16.64-28.26 25.08-34.54 24.46-18.2 63.87-26.4 89.34-8.93 15.09 10.35 17.54 48.6 18.32 55.27.88 7.55-2.66 12.37-4.4 19.47-2.42 9.85-6.1 25.43-11.89 51.25-4.08-4.27-9.48-9.36-16.25-14.34-2.61-1.92-12.92-9.33-24.54-13.7-23.3-8.75-31.63 2.41-47.87-4.47Z"
                            style={{
                                fill: "url(#linear-gradient-59)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2384.82 1029.99s-.87 38.25-36.48 55.87c-31.88 15.78-76.24-50.51-65.08-76.49 3.72-8.67 15.66-18.28 28.05-21.46 7.32-1.88 10.96-.5 22.86-3.8 10.97-3.05 13.06-5.66 17.34-4.91 5.36.95 12.3 6.85 17.94 30.48 2.43-9.33 8.14-15.68 14.49-16.21 1.01-.08 3.95.13 6.4 1.62 8.85 5.38 7.48 19.59-5.52 34.9Z"
                            className="cls-36"
                        />
                        <path
                            d="M2350.51 974.28c-.84 1.96 6.89 4.87 11.75 12.5 9.44 14.81 4.62 41.93-10.17 52.55-8.74 6.28-14.52 2.16-30.79 9.41-10.07 4.49-17.27 10.27-21.61 14.23 4.82 19.44 18.96 33.43 34.55 34.69 16.79 1.36 29.18-12.53 34.37-18.34 3.47-3.89 14.6-16.31 14.49-33.04-.12-17.44-12.02-21.1-8.58-34.93 1.73-6.98 6.29-12.2 6.81-24.06.14-3.22-.06-5.88-.26-7.64-12.79-3.81-29.34-8.21-30.56-5.37Z"
                            style={{
                                fill: "url(#linear-gradient-60)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2314.43 1062.7s8.64-.38 19.73-7.65c.54-.35 1.25-.55 1.49-.3.89.93-3.64 10.07-11.52 12.08-5.6 1.43-11.98-.96-12-2.49 0-.65 1.12-1.21 2.3-1.64Z"
                            className="cls-36"
                        />
                        <path
                            d="M2483.29 1329.85c-42.94 15.07-99.91 57.43-103.73 111.71-5.87 83.36 118.27 129.1 101.73 187.51-4.51 15.93-18.77 30.29-111.71 63.83a1680.017 1680.017 0 0 1-104.26 33.8c113.72 16.76 333.24-4.87 328.9-62.04-11.01-145.15-31.25-257.39-51.58-343.35-20.6-.81-40.64 1.97-59.35 8.54Z"
                            style={{
                                opacity: 0.4,
                                fill: "url(#linear-gradient-61)",
                                mixBlendMode: "multiply",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2348.12 1500.41c69.84 70.9 169.55 93.24 246.2 57.77 106.46-49.26 122.92-188.93 98.1-276.34-41.44-145.93-222.04-231.03-278.93-192.15-41.15 28.11-40.75 136.88 8.28 191.33 44.08 48.94 111.78 36.58 130.19 86.43 13.79 37.34-12.86 74.97-15.15 78.11-29.64 40.58-94.24 54.35-155.33 26.48l-33.36 28.38Z"
                            style={{
                                fill: "url(#linear-gradient-62)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2209.84 1378.22c5.69-18.27 24.16-27.63 38.7-29.65 14.23-1.98 37.67 1.25 47.01 19.85 8.73 17.39 1.87 41.73-18.2 54.93-2.82-7.01-7.89-16.23-16.8-19.02-16.4-5.14-30.61 16.22-42.72 10.64-9.66-4.45-12.16-23.34-7.98-36.74Z"
                            className="cls-36"
                        />
                        <path
                            d="m2276.9 1488.95 53.74 9.34c10.41 1.81 19.35-7.49 17.13-17.82l-19.55-90.92a14.91 14.91 0 0 0-13.78-11.75l-64.35-3.44c-10.62-.57-18.4 9.85-14.85 19.87l30.15 85.02a14.9 14.9 0 0 0 11.5 9.7Z"
                            style={{
                                fill: "url(#linear-gradient-63)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M2370.7 1481.19c-4.41-31.66-17.76-39.94-22.59-42.3-8.1-3.95-12.09-.88-40.36-1.33-25.26-.4-31.24-2.99-34.44 1.33-6.05 8.18 6.38 29.69 20.47 42.3 19.75 17.68 44.25 19.19 54.33 19.21l22.59-19.21Z"
                            className="cls-36"
                        />
                        <path
                            d="M769.81 2064.5c-4.59 0-8.51-3.49-8.95-8.15-7.88-82.73-34.86-161.32-75.95-221.32-36.4-53.15-79.74-84.87-115.95-84.87h-.12c-131.88.26-159.47 303.05-159.73 306.11a9.003 9.003 0 0 1-9.74 8.2c-4.95-.43-8.62-4.79-8.2-9.74 1.13-13.16 29.37-322.29 177.64-322.58h.16c42.78 0 90.45 33.78 130.8 92.7 42.78 62.47 70.85 144.08 79.02 229.79.47 4.95-3.16 9.35-8.11 9.82-.29.03-.58.04-.86.04Z"
                            style={{
                                fill: "url(#linear-gradient-64)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m220.38 2687.67 173.61 87.9 105.19-322.79-173.32-432.75-49.15 12.05-74.57 621.51a33.704 33.704 0 0 0 18.24 34.09Z"
                            style={{
                                fill: "url(#linear-gradient-65)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="m499.18 2452.77-173.32-432.75-28.99 7.11c-4.02 57.78-2.25 105.33.48 139.95 11.62 147.34 50.21 188.34 31.51 291.12-15.54 85.47-49.49 97.07-46.52 154.57 3.23 62.62 46.91 115.07 98.84 156.31l12.81 6.48 105.19-322.79Z"
                            style={{
                                fill: "url(#linear-gradient-66)",
                                opacity: 0.35,
                                mixBlendMode: "multiply",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M325.85 2020.02h647.33l214.23 691.61-793.42 63.94-68.14-755.55z"
                            style={{
                                fill: "url(#linear-gradient-67)",
                                strokeWidth: 0,
                            }}
                        />
                        <path
                            d="M526.38 2079.3c-4.09 0-7.78-2.8-8.76-6.95-1.84-7.84-44.37-193.16 15.6-284.11 17.19-26.07 41.2-41.98 71.37-47.3 155.02-27.31 250.46 305.64 254.45 319.83 1.34 4.79-1.45 9.76-6.23 11.1-4.79 1.35-9.76-1.45-11.1-6.23-.93-3.32-94.89-331.52-233.99-306.96-25.46 4.49-44.91 17.4-59.47 39.48-55.74 84.54-13.53 268.24-13.1 270.09 1.14 4.84-1.87 9.69-6.71 10.82-.69.16-1.38.24-2.06.24Z"
                            style={{
                                fill: "url(#linear-gradient-68)",
                                strokeWidth: 0,
                            }}
                        />
                        <g
                            style={{
                                opacity: 0.35,
                                mixBlendMode: "multiply",
                            }}
                        >
                            <path
                                d="M973.18 2020.02H652.05c-15.84 16.11-27.08 34.68-28.15 55.5-5.05 97.85 219.91 130 241.6 264.11 15.65 96.75-80.65 208.38-166.57 258.11-90.53 52.4-151.87 25.86-213.09 84.04-26.9 25.56-43.28 57.52-53.02 90.65l754.6-60.8-214.23-691.61Z"
                                style={{
                                    fill: "url(#linear-gradient-69)",
                                    strokeWidth: 0,
                                }}
                            />
                        </g>
                        <circle
                            cx={526.45}
                            cy={2080.66}
                            r={25.16}
                            style={{
                                fill: "url(#linear-gradient-70)",
                                strokeWidth: 0,
                            }}
                            transform="rotate(-80.78 526.506 2080.698)"
                        />
                        <circle
                            cx={854.61}
                            cy={2078.32}
                            r={25.16}
                            style={{
                                fill: "url(#linear-gradient-71)",
                                strokeWidth: 0,
                            }}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}
