import React from "react";

export type ProductCampaignProps = {}


export const ProductCampaign = (
    {}
        :
        ProductCampaignProps
) => {

    return (
        <div className="flex items-center gap-1 text-sm text-[#800080]">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_2582_72196)">
                    <path
                        d="M10.8855 27.0106C13.3389 28.7931 16.6611 28.7932 19.1145 27.0106L25.1514 22.6246C27.6048 20.8421 28.6314 17.6825 27.6943 14.7984L25.3884 7.70163C24.4513 4.81747 21.7636 2.86474 18.731 2.86474H11.269C8.23644 2.86474 5.54874 4.81747 4.61162 7.70162L2.30575 14.7984C1.36863 17.6825 2.39524 20.8421 4.84865 22.6246L10.8855 27.0106Z"
                        fill="#800080"
                    />
                </g>
                <path
                    fillRule="evenodd" clipRule="evenodd"
                    d="M10.9013 8.4375C10.4625 8.4375 10.0527 8.65682 9.80924 9.02196L7.11732 13.0598C6.95252 13.307 6.93281 13.6236 7.06568 13.8893C8.53876 16.8355 10.5859 19.4574 13.0868 21.6011L14.3999 22.7265C14.7452 23.0225 15.2547 23.0225 15.5999 22.7265L16.913 21.6011C19.4139 19.4574 21.4611 16.8355 22.9342 13.8893C23.067 13.6236 23.0473 13.307 22.8825 13.0598L20.1906 9.02196C19.9472 8.65682 19.5374 8.4375 19.0985 8.4375H10.9013ZM10.7453 9.64599C10.7801 9.59383 10.8386 9.5625 10.9013 9.5625H12.6562L11.2198 13.0097C11.1867 13.0891 11.1618 13.171 11.1449 13.2542C10.6171 13.2149 10.0896 13.1675 9.56285 13.1121L8.50856 13.0011L10.7453 9.64599ZM8.4589 14.1271C9.80396 16.5946 11.5801 18.8035 13.7048 20.6484L11.3607 14.3975C10.7215 14.3536 10.0828 14.298 9.44508 14.2309L8.4589 14.1271ZM12.5885 14.4676L14.9999 20.898L17.4113 14.4676C15.8045 14.5407 14.1953 14.5407 12.5885 14.4676ZM18.6391 14.3975L16.295 20.6484C18.4198 18.8035 20.1959 16.5946 21.5409 14.1271L20.5547 14.2309C19.917 14.298 19.2784 14.3536 18.6391 14.3975ZM21.4913 13.0011L20.437 13.1121C19.9102 13.1675 19.3828 13.2149 18.8549 13.2542C18.8381 13.171 18.8131 13.0891 18.78 13.0097L17.3437 9.5625H19.0985C19.1612 9.5625 19.2198 9.59383 19.2545 9.64599L21.4913 13.0011ZM17.6937 13.3275C15.8991 13.4207 14.1008 13.4207 12.3061 13.3275L13.8749 9.5625H16.1249L17.6937 13.3275Z"
                    fill="#FFC700"
                />
                <defs>
                    <filter
                        id="filter0_i_2582_72196"
                        x="1.96265"
                        y="0.864258"
                        width="28.0747"
                        height="27.4834"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="2" dy="-2"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.895833 0 0 0 0 0.895833 0 0 0 0 0.895833 0 0 0 0.25 0"
                        />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2582_72196"/>
                    </filter>
                </defs>
            </svg>
            <span className="select-none font-black">کمپین فروش بهاره</span>
            <div className="mx-2"/>
            <div className="flex items-center text-red-600 gap-1 font-semibold">
                <span className="select-none">زمان باقیمانده:</span>
                <span className="select-none">0:00:58:39</span>
            </div>
        </div>
    );
};
