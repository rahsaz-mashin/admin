import {Metadata} from "next";
import React from "react";
import {Cover} from "@/stories/RahsazGate/Cover";
import {Input} from "@nextui-org/input";
import {LoginByPhoneOtpForm} from "@/stories/RahsazGate/LoginByPhoneOtpForm";

export const metadata: Metadata = {
    title: "احراز هویت مرکزی",
};


export default function Layout({children}: { children: React.ReactNode }) {


    return (
        <main className="fixed h-full w-full bg-primary">
            <div className="h-full w-full relative">
                <div
                    className="absolute flex justify-center items-start w-full h-full bottom-0 end-0"
                >
                    <div className="h-full w-full z-10 relative flex flex-col lg:flex-row items-center justify-end">
                        <div className="flex-1 max-h-96 max-w-80 w-full overflow-x-hidden z-10 ps-0 pe-0 py-3">
                            {children}
                        </div>
                        <div className="absolute -bottom-3 w-full flex justify-center items-center lg:hidden">
                            <svg
                                className="w-[1024px] min-w-[1024px]"

                                viewBox="0 0 1024 417" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2810_3139)">
                                    <g filter="url(#filter0_i_2810_3139)">
                                        <path
                                            d="M14.4993 191.592C22.6208 172.449 42.1453 160.712 62.8614 162.521L249.042 178.773C269.758 180.581 286.954 195.523 291.636 215.784L333.712 397.875C338.394 418.136 329.497 439.107 311.674 449.821L151.498 546.107C133.675 556.821 110.981 554.84 95.2842 541.2L-45.7865 418.617C-61.4832 404.978 -66.612 382.782 -58.4906 363.639L14.4993 191.592Z"
                                            fill="white" fillOpacity="0.7"
                                        />
                                    </g>
                                    <g filter="url(#filter1_i_2810_3139)">
                                        <path
                                            d="M725.682 354.035C714.647 336.41 716.217 313.683 729.569 297.742L837.829 168.494C851.182 152.553 873.281 147.022 892.568 154.796L1048.94 217.817C1068.23 225.59 1080.32 244.899 1078.89 265.644L1067.27 433.841C1065.84 454.586 1051.21 472.05 1031.04 477.098L867.487 518.028C847.314 523.076 826.185 514.561 815.15 496.936L725.682 354.035Z"
                                            fill="white" fillOpacity="0.7"
                                        />
                                    </g>
                                    <g filter="url(#filter2_i_2810_3139)">
                                        <path
                                            d="M366.747 378.96C346.884 372.803 333.245 354.557 332.963 333.764L330.039 118.65C329.757 97.8572 342.895 79.2471 362.583 72.553L566.266 3.29904C585.953 -3.39504 607.713 3.34952 620.163 20.0053L748.969 192.318C761.419 208.974 761.729 231.752 749.735 248.74L625.66 424.489C613.666 441.477 592.098 448.81 572.236 442.654L366.747 378.96Z"
                                            fill="white" fillOpacity="0.7"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_i_2810_3139"
                                        x="-66.3049"
                                        y="158.338"
                                        width="401.253"
                                        height="394.631"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dx="-4" dy="-4"/>
                                        <feGaussianBlur stdDeviation="6"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                        />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2810_3139"/>
                                    </filter>
                                    <filter
                                        id="filter1_i_2810_3139"
                                        x="714.366"
                                        y="147.313"
                                        width="364.636"
                                        height="372.154"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dx="-4" dy="-4"/>
                                        <feGaussianBlur stdDeviation="6"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                        />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2810_3139"/>
                                    </filter>
                                    <filter
                                        id="filter2_i_2810_3139"
                                        x="326.035"
                                        y="-3.25916"
                                        width="432.488"
                                        height="448.068"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dx="-4" dy="-4"/>
                                        <feGaussianBlur stdDeviation="6"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                        />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2810_3139"/>
                                    </filter>
                                    <clipPath id="clip0_2810_3139">
                                        <rect width="1024" height="417" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Cover/>*/}

        </main>
    );
}
