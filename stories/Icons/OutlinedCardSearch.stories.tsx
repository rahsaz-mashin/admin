import React from "react";

export default {
    title: "Icons/OutlinedCardSearch",
    component: ({size}: { size?: number }) => {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.5 9.75V9C16.5 6.17157 16.5 4.75736 15.6213 3.87868C14.7426 3 13.3284 3 10.5 3H7.5C4.67157 3 3.25736 3 2.37868 3.87868C1.5 4.75736 1.5 6.17157 1.5 9C1.5 11.8284 1.5 13.2426 2.37868 14.1213C3.25736 15 4.67157 15 7.5 15H9.75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M7.5 12H4.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M1.5 7.5L16.5 7.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <circle
                    cx="13.5"
                    cy="12.75"
                    r="2.25"
                    strokeWidth="1.5"
                />
                <path
                    d="M15.375 14.625L16.125 15.375"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>

        );
    },
};

export const Icon = {
    args: {
        size: 48,
    },
};
