import React from "react";

export default {
    title: "Icons/HamburgerMenuIcon",
    component: ({size}: { size?: number }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor"
                stroke="none"
                width={size}
                height={size}
            >
                <path
                    d="M6 7H24V9H6V7ZM12 14H24V16H12V14ZM6 21H24V23H6V21Z"
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
