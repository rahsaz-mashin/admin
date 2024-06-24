import React from "react";

export default {
    title: "Icons/OutlinedMarket",
    component: ({size}: { size?: number }) => {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 28 28"
                fill="currentColor"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_2619_6620)">
                    <path
                        d="M24.4999 15.1667V23.3333C24.4999 23.6428 24.377 23.9395 24.1582 24.1583C23.9394 24.3771 23.6427 24.5 23.3333 24.5H4.66659C4.35717 24.5 4.06042 24.3771 3.84163 24.1583C3.62283 23.9395 3.49992 23.6428 3.49992 23.3333V15.1667H2.33325V12.8333L3.49992 7H24.4999L25.6666 12.8333V15.1667H24.4999ZM5.83325 15.1667V22.1667H22.1666V15.1667H5.83325ZM4.71325 12.8333H23.2866L22.5866 9.33333H5.41325L4.71325 12.8333ZM6.99992 16.3333H16.3333V19.8333H6.99992V16.3333ZM3.49992 3.5H24.4999V5.83333H3.49992V3.5Z"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2619_6620">
                        <rect width="28" height="28" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    },
};

export const Icon = {
    args: {
        size: 48,
    },
};
