import React from "react";

export default {
    title: "Icons/Separator",
    component: ({size}: { size?: number }) => {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 16 16"
                fill="currentColor"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.35347 4.97976C9.54873 5.17502 9.54873 5.4916 9.35347 5.68687L7.04036 7.99998L9.35347 10.3131C9.54873 10.5084 9.54873 10.8249 9.35347 11.0202C9.15821 11.2155 8.84163 11.2155 8.64636 11.0202L5.9797 8.35353C5.78444 8.15827 5.78444 7.84169 5.9797 7.64643L8.64636 4.97976C8.84163 4.7845 9.15821 4.7845 9.35347 4.97976Z"
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
