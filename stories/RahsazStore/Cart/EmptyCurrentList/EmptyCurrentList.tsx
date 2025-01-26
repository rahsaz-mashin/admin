import React from "react";
import {Card, CardBody} from "@nextui-org/card";

export type CartEmptyCurrentListProps = {}


export const CartEmptyCurrentList = (
    {}
        :
        CartEmptyCurrentListProps
) => {


    return (
        <Card>
            <CardBody className="flex flex-col items-center justify-center text-center gap-3 min-h-72">
                <EmptyCartIcon/>
                <b className="text-black font-black">سبد خرید شما خالی است!</b>
                <span className="text-gray-500 font-light">ابتدا محصولات مد نظرتون رو به سبد اضافه کنید!</span>
            </CardBody>
        </Card>
    );
};


export const EmptyCartIcon = () => {
    return (
        <svg
            className="h-12 us:h-20 md:h-28 xl:h-32"
            viewBox="0 0 114 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_2827_43260)">
                <g filter="url(#filter0_f_2827_43260)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M79.8332 55.0667L75.8665 56.2H35.2596H13.5332L35.2596 55.0667H79.8332Z"
                        fill="url(#paint0_linear_2827_43260)"
                    />
                </g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M69.5195 11.8868C69.5195 10.6662 70.5089 9.67676 71.7295 9.67676H90.1462C91.3668 9.67676 92.3562 10.6662 92.3562 11.8868C92.3562 13.1073 91.3668 14.0968 90.1462 14.0968H71.7295C70.5089 14.0968 69.5195 13.1073 69.5195 11.8868Z"
                    fill="url(#paint1_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M84.2531 7.4668H43.7363L46.2055 35.2454C46.4758 38.2861 49.0232 40.6168 52.0757 40.6168H75.9135C78.9661 40.6168 81.5133 38.2861 81.7836 35.2454L84.2531 7.4668ZM52.5763 31.961V17.0435C52.5763 15.8229 53.5658 14.8335 54.7863 14.8335C56.0069 14.8335 56.9963 15.8229 56.9963 17.0435V31.961C56.9963 33.1815 56.0069 34.171 54.7863 34.171C53.5658 34.171 52.5763 33.1815 52.5763 31.961ZM62.1531 17.0435V31.961C62.1531 33.1815 63.1425 34.171 64.3631 34.171C65.5837 34.171 66.5731 33.1815 66.5731 31.961V17.0435C66.5731 15.8229 65.5837 14.8335 64.3631 14.8335C63.1425 14.8335 62.1531 15.8229 62.1531 17.0435ZM71.7298 31.961V17.0435C71.7298 15.8229 72.7192 14.8335 73.9398 14.8335C75.1604 14.8335 76.1498 15.8229 76.1498 17.0435V31.961C76.1498 33.1815 75.1604 34.171 73.9398 34.171C72.7192 34.171 71.7298 33.1815 71.7298 31.961Z"
                    fill="url(#paint2_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.583 7.4668H50.3663L54.7863 40.6168H33.5411C30.5382 40.6168 28.0155 38.3586 27.6839 35.374L24.583 7.4668ZM44.4417 31.7743L42.9683 16.6726C42.7635 15.4694 41.6221 14.66 40.4188 14.8648C39.2156 15.0696 38.4062 16.211 38.611 17.4143L40.0843 32.516C40.2891 33.7192 41.4306 34.5286 42.6338 34.3238C43.8371 34.119 44.6465 32.9776 44.4417 31.7743ZM34.1283 16.6726L35.6017 31.7743C35.8065 32.9776 34.9971 34.119 33.7938 34.3238C32.5906 34.5286 31.4491 33.7192 31.2443 32.516L29.771 17.4143C29.5662 16.211 30.3756 15.0696 31.5788 14.8648C32.7821 14.66 33.9235 15.4694 34.1283 16.6726Z"
                    fill="url(#paint3_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.1104 7.4668H48.8937L53.3137 40.6168H32.0684C29.0655 40.6168 26.5428 38.3586 26.2112 35.374L23.1104 7.4668ZM42.969 31.7743L41.4957 16.6726C41.2909 15.4694 40.1494 14.66 38.9462 14.8648C37.7429 15.0696 36.9336 16.211 37.1384 17.4143L38.6117 32.516C38.8165 33.7192 39.9579 34.5286 41.1612 34.3238C42.3644 34.119 43.1738 32.9776 42.969 31.7743ZM32.6557 16.6726L34.129 31.7743C34.3338 32.9776 33.5244 34.119 32.3212 34.3238C31.1179 34.5286 29.9765 33.7192 29.7717 32.516L28.2984 17.4143C28.0936 16.211 28.9029 15.0696 30.1062 14.8648C31.3094 14.66 32.4509 15.4694 32.6557 16.6726Z"
                    fill="url(#paint4_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85.7264 7.4668H45.21L47.6792 35.2454C47.9495 38.2861 50.4967 40.6168 53.5494 40.6168H77.3873C80.44 40.6168 82.9871 38.2861 83.2574 35.2454L85.7264 7.4668ZM54.05 31.961V17.0435C54.05 15.8229 55.0394 14.8335 56.26 14.8335C57.4803 14.8335 58.4697 15.8229 58.4697 17.0435V31.961C58.4697 33.1815 57.4803 34.171 56.26 34.171C55.0394 34.171 54.05 33.1815 54.05 31.961ZM63.6264 17.0435V31.961C63.6264 33.1815 64.6158 34.171 65.8364 34.171C67.057 34.171 68.0464 33.1815 68.0464 31.961V17.0435C68.0464 15.8229 67.057 14.8335 65.8364 14.8335C64.6158 14.8335 63.6264 15.8229 63.6264 17.0435ZM73.2031 31.961V17.0435C73.2031 15.8229 74.1925 14.8335 75.4131 14.8335C76.6337 14.8335 77.6231 15.8229 77.6231 17.0435V31.961C77.6231 33.1815 76.6337 34.171 75.4131 34.171C74.1925 34.171 73.2031 33.1815 73.2031 31.961Z"
                    fill="url(#paint5_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9004 3.04676C20.9004 1.41935 22.2196 0.100098 23.8471 0.100098H44.4737C46.1011 0.100098 47.4204 1.41935 47.4204 3.04676V8.20343C47.4204 9.83084 46.1011 11.1501 44.4737 11.1501H23.8471C22.2196 11.1501 20.9004 9.83084 20.9004 8.20343V3.04676Z"
                    fill="url(#paint6_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9004 3.04676C20.9004 1.41935 22.2196 0.100098 23.8471 0.100098H44.4737C46.1011 0.100098 47.4204 1.41935 47.4204 3.04676V8.20343C47.4204 9.83084 46.1011 11.1501 44.4737 11.1501H23.8471C22.2196 11.1501 20.9004 9.83084 20.9004 8.20343V3.04676Z"
                    fill="url(#paint7_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.6318 3.04676C42.6318 1.41935 43.9511 0.100098 45.5785 0.100098H85.3587C86.9856 0.100098 88.3054 1.41935 88.3054 3.04676V8.20343C88.3054 9.83084 86.9856 11.1501 85.3587 11.1501H45.5785C43.9511 11.1501 42.6318 9.83084 42.6318 8.20343V3.04676Z"
                    fill="url(#paint8_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.6318 3.04676C42.6318 1.41935 43.9511 0.100098 45.5785 0.100098H85.3587C86.9856 0.100098 88.3054 1.41935 88.3054 3.04676V8.20343C88.3054 9.83084 86.9856 11.1501 85.3587 11.1501H45.5785C43.9511 11.1501 42.6318 9.83084 42.6318 8.20343V3.04676Z"
                    fill="url(#paint9_linear_2827_43260)"
                />
                <path
                    d="M90.8832 11.9617L66.5732 5.625"
                    stroke="url(#paint10_linear_2827_43260)"
                    strokeWidth="7.54"
                    strokeLinecap="round"
                />
                <path
                    d="M66.7577 6.50915C67.2663 6.50915 67.6786 6.09688 67.6786 5.58831C67.6786 5.07975 67.2663 4.66748 66.7577 4.66748C66.2492 4.66748 65.8369 5.07975 65.8369 5.58831C65.8369 6.09688 66.2492 6.50915 66.7577 6.50915Z"
                    fill="#424750"/>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M84.3663 22.2H43.8496L46.3188 49.9785C46.5891 53.0193 49.1364 55.35 52.189 55.35H76.0266C79.0793 55.35 81.627 53.0193 81.8973 49.9785L84.3663 22.2ZM52.6896 46.6941V31.7766C52.6896 30.5561 53.6791 29.5666 54.8996 29.5666C56.1202 29.5666 57.1096 30.5561 57.1096 31.7766V46.6941C57.1096 47.9147 56.1202 48.9041 54.8996 48.9041C53.6791 48.9041 52.6896 47.9147 52.6896 46.6941ZM62.2663 31.7766V46.6941C62.2663 47.9147 63.2557 48.9041 64.4763 48.9041C65.6969 48.9041 66.6863 47.9147 66.6863 46.6941V31.7766C66.6863 30.5561 65.6969 29.5666 64.4763 29.5666C63.2557 29.5666 62.2663 30.5561 62.2663 31.7766ZM71.8429 46.6941V31.7766C71.8429 30.5561 72.8323 29.5666 74.0529 29.5666C75.2735 29.5666 76.2629 30.5561 76.2629 31.7766V46.6941C76.2629 47.9147 75.2735 48.9041 74.0529 48.9041C72.8323 48.9041 71.8429 47.9147 71.8429 46.6941Z"
                    fill="url(#paint11_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.6973 22.2H50.4806L54.9006 55.35H33.6554C30.6524 55.35 28.1297 53.0918 27.7981 50.1072L24.6973 22.2ZM44.5559 46.5077L43.0826 31.4058C42.8778 30.2025 41.7363 29.3932 40.5331 29.598C39.3298 29.8027 38.5205 30.9442 38.7253 32.1474L40.1986 47.2489C40.4034 48.4525 41.5448 49.2617 42.7481 49.0571C43.9514 48.852 44.7607 47.7107 44.5559 46.5077ZM34.2426 31.4058L35.7159 46.5077C35.9207 47.7107 35.1114 48.852 33.9081 49.0571C32.7048 49.2617 31.5634 48.4525 31.3586 47.2489L29.8853 32.1474C29.6805 30.9442 30.4898 29.8027 31.6931 29.598C32.8963 29.3932 34.0378 30.2025 34.2426 31.4058Z"
                    fill="url(#paint12_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.2227 22.2H49.006L53.426 55.35H32.1807C29.1778 55.35 26.6551 53.0918 26.3235 50.1072L23.2227 22.2ZM43.0813 46.5077L41.608 31.4058C41.4032 30.2025 40.2618 29.3932 39.0585 29.598C37.8552 29.8027 37.0459 30.9442 37.2507 32.1474L38.724 47.2489C38.9288 48.4525 40.0703 49.2617 41.2735 49.0571C42.4767 48.852 43.2861 47.7107 43.0813 46.5077ZM32.768 31.4058L34.2413 46.5077C34.4461 47.7107 33.6367 48.852 32.4335 49.0571C31.2303 49.2617 30.0888 48.4525 29.884 47.2489L28.4107 32.1474C28.2059 30.9442 29.0152 29.8027 30.2185 29.598C31.4218 29.3932 32.5632 30.2025 32.768 31.4058Z"
                    fill="url(#paint13_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85.8401 22.2H45.3232L47.7924 49.9785C48.0627 53.0193 50.6101 55.35 53.6626 55.35H77.5005C80.5531 55.35 83.1003 53.0193 83.3706 49.9785L85.8401 22.2ZM54.1632 46.6941V31.7766C54.1632 30.5561 55.1527 29.5666 56.3732 29.5666C57.5941 29.5666 58.5835 30.5561 58.5835 31.7766V46.6941C58.5835 47.9147 57.5941 48.9041 56.3732 48.9041C55.1527 48.9041 54.1632 47.9147 54.1632 46.6941ZM63.7401 31.7766V46.6941C63.7401 47.9147 64.7295 48.9041 65.9501 48.9041C67.1707 48.9041 68.1601 47.9147 68.1601 46.6941V31.7766C68.1601 30.5561 67.1707 29.5666 65.9501 29.5666C64.7295 29.5666 63.7401 30.5561 63.7401 31.7766ZM73.3168 46.6941V31.7766C73.3168 30.5561 74.3062 29.5666 75.5268 29.5666C76.7474 29.5666 77.7368 30.5561 77.7368 31.7766V46.6941C77.7368 47.9147 76.7474 48.9041 75.5268 48.9041C74.3062 48.9041 73.3168 47.9147 73.3168 46.6941Z"
                    fill="url(#paint14_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.0137 17.7802C21.0137 16.1528 22.3329 14.8335 23.9603 14.8335H44.587C46.2144 14.8335 47.5337 16.1528 47.5337 17.7802V22.9368C47.5337 24.5642 46.2144 25.8835 44.587 25.8835H23.9603C22.3329 25.8835 21.0137 24.5642 21.0137 22.9368V17.7802Z"
                    fill="url(#paint15_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.0137 17.7802C21.0137 16.1528 22.3329 14.8335 23.9603 14.8335H44.587C46.2144 14.8335 47.5337 16.1528 47.5337 17.7802V22.9368C47.5337 24.5642 46.2144 25.8835 44.587 25.8835H23.9603C22.3329 25.8835 21.0137 24.5642 21.0137 22.9368V17.7802Z"
                    fill="url(#paint16_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.7451 17.7802C42.7451 16.1528 44.0644 14.8335 45.6918 14.8335H85.4719C87.0994 14.8335 88.4186 16.1528 88.4186 17.7802V22.9368C88.4186 24.5642 87.0994 25.8835 85.4719 25.8835H45.6918C44.0644 25.8835 42.7451 24.5642 42.7451 22.9368V17.7802Z"
                    fill="url(#paint17_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.7451 17.7802C42.7451 16.1528 44.0644 14.8335 45.6918 14.8335H85.4719C87.0994 14.8335 88.4186 16.1528 88.4186 17.7802V22.9368C88.4186 24.5642 87.0994 25.8835 85.4719 25.8835H45.6918C44.0644 25.8835 42.7451 24.5642 42.7451 22.9368V17.7802Z"
                    fill="url(#paint18_linear_2827_43260)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0664 28.8301C18.0664 27.6096 19.0559 26.6201 20.2764 26.6201H40.9031V31.0401H20.2764C19.0559 31.0401 18.0664 30.0507 18.0664 28.8301Z"
                    fill="url(#paint19_linear_2827_43260)"
                />
                <path
                    d="M40.9033 28.8301L66.6868 20.3584"
                    stroke="url(#paint20_linear_2827_43260)"
                    strokeWidth="7.54"
                    strokeLinecap="round"
                />
                <path
                    d="M66.871 21.2425C67.3796 21.2425 67.7919 20.8303 67.7919 20.3217C67.7919 19.8132 67.3796 19.4009 66.871 19.4009C66.3625 19.4009 65.9502 19.8132 65.9502 20.3217C65.9502 20.8303 66.3625 21.2425 66.871 21.2425Z"
                    fill="#424750"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_2827_43260"
                    x="10.8149"
                    y="52.3484"
                    width="71.7364"
                    height="6.56986"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur_2827_43260"/>
                </filter>
                <linearGradient
                    id="paint0_linear_2827_43260"
                    x1="41.6829"
                    y1="54.738"
                    x2="41.65"
                    y2="56.6771"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A1A3A8"/>
                    <stop offset="1" stopColor="#C1C3C7"/>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_2827_43260"
                    x1="69.5195"
                    y1="9.67676"
                    x2="69.5195"
                    y2="14.0968"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#62666D"/>
                    <stop offset="1" stopColor="#030A16"/>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_2827_43260"
                    x1="47.7112"
                    y1="13.971"
                    x2="47.7112"
                    y2="40.6168"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6E7681"/>
                    <stop offset="1" stopColor="#B0B6BD"/>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_2827_43260"
                    x1="27.5461"
                    y1="13.971"
                    x2="27.5461"
                    y2="40.6168"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6E7681"/>
                    <stop offset="1" stopColor="#B0B6BD"/>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_2827_43260"
                    x1="27.0468"
                    y1="13.0174"
                    x2="27.0468"
                    y2="40.6168"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#92959A"/>
                    <stop offset="0.901139" stopColor="#CACCD1"/>
                    <stop offset="1" stopColor="#B7BCC6"/>
                </linearGradient>
                <linearGradient
                    id="paint5_linear_2827_43260"
                    x1="63.9494"
                    y1="-0.0738366"
                    x2="40.5594"
                    y2="30.7086"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DDDEE0"/>
                    <stop offset="1" stopColor="#CACCD0"/>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_2827_43260"
                    x1="43.469"
                    y1="2.9298"
                    x2="23.5248"
                    y2="2.9298"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9BCC1"/>
                    <stop offset="1" stopColor="#A7AAB2"/>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_2827_43260"
                    x1="20.9004"
                    y1="0.100098"
                    x2="20.9004"
                    y2="11.1501"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FEFEFE" stopOpacity="0.578316"/>
                    <stop offset="0.163444" stopColor="white" stopOpacity="0.2"/>
                    <stop offset="0.840292" stopColor="white" stopOpacity="0.01"/>
                    <stop offset="1" stopOpacity="0.1"/>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_2827_43260"
                    x1="81.5003"
                    y1="2.9298"
                    x2="47.1516"
                    y2="2.9298"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DCDDE0"/>
                    <stop offset="1" stopColor="#CECFD4"/>
                </linearGradient>
                <linearGradient
                    id="paint9_linear_2827_43260"
                    x1="42.6318"
                    y1="0.100098"
                    x2="42.6318"
                    y2="11.1501"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FEFEFE" stopOpacity="0.578316"/>
                    <stop offset="0.163444" stopColor="white" stopOpacity="0.2"/>
                    <stop offset="0.840292" stopColor="white" stopOpacity="0.01"/>
                    <stop offset="1" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient
                    id="paint10_linear_2827_43260"
                    x1="103.038"
                    y1="8.85902"
                    x2="100.063"
                    y2="-2.7951"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#030A16"/>
                    <stop offset="1" stopColor="#62666D"/>
                </linearGradient>
                <linearGradient
                    id="paint11_linear_2827_43260"
                    x1="47.8244"
                    y1="28.7042"
                    x2="47.8244"
                    y2="55.35"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6E7681"/>
                    <stop offset="1" stopColor="#B0B6BD"/>
                </linearGradient>
                <linearGradient
                    id="paint12_linear_2827_43260"
                    x1="27.6603"
                    y1="28.7042"
                    x2="27.6603"
                    y2="55.35"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6E7681"/>
                    <stop offset="1" stopColor="#B0B6BD"/>
                </linearGradient>
                <linearGradient
                    id="paint13_linear_2827_43260"
                    x1="27.1591"
                    y1="27.7506"
                    x2="27.1591"
                    y2="55.35"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#92959A"/>
                    <stop offset="0.901139" stopColor="#CACCD1"/>
                    <stop offset="1" stopColor="#B7BCC6"/>
                </linearGradient>
                <linearGradient
                    id="paint14_linear_2827_43260"
                    x1="64.0626"
                    y1="14.6593"
                    x2="40.6727"
                    y2="45.4418"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DDDEE0"/>
                    <stop offset="1" stopColor="#CACCD0"/>
                </linearGradient>
                <linearGradient
                    id="paint15_linear_2827_43260"
                    x1="43.5823"
                    y1="17.6632"
                    x2="23.6381"
                    y2="17.6632"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9BCC1"/>
                    <stop offset="1" stopColor="#A7AAB2"/>
                </linearGradient>
                <linearGradient
                    id="paint16_linear_2827_43260"
                    x1="21.0137"
                    y1="14.8335"
                    x2="21.0137"
                    y2="25.8835"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FEFEFE" stopOpacity="0.578316"/>
                    <stop offset="0.163444" stopColor="white" stopOpacity="0.2"/>
                    <stop offset="0.840292" stopColor="white" stopOpacity="0.01"/>
                    <stop offset="1" stopOpacity="0.1"/>
                </linearGradient>
                <linearGradient
                    id="paint17_linear_2827_43260"
                    x1="81.6135"
                    y1="17.6632"
                    x2="47.2649"
                    y2="17.6632"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DCDDE0"/>
                    <stop offset="1" stopColor="#CECFD4"/>
                </linearGradient>
                <linearGradient
                    id="paint18_linear_2827_43260"
                    x1="42.7451"
                    y1="14.8335"
                    x2="42.7451"
                    y2="25.8835"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FEFEFE" stopOpacity="0.578316"/>
                    <stop offset="0.163444" stopColor="white" stopOpacity="0.2"/>
                    <stop offset="0.840292" stopColor="white" stopOpacity="0.01"/>
                    <stop offset="1" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient
                    id="paint19_linear_2827_43260"
                    x1="18.0664"
                    y1="26.6201"
                    x2="18.0664"
                    y2="31.0401"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#62666D"/>
                    <stop offset="1" stopColor="#030A16"/>
                </linearGradient>
                <linearGradient
                    id="paint20_linear_2827_43260"
                    x1="53.795"
                    y1="16.2408"
                    x2="49.0195"
                    y2="31.1924"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#62666D"/>
                    <stop offset="1" stopColor="#030A16"/>
                </linearGradient>
                <clipPath id="clip0_2827_43260">
                    <rect width="113" height="56" fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
}
