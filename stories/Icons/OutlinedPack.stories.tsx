import React from "react";

export default {
    title: "Icons/OutlinedPack",
    component: ({size}: { size?: number }) => {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2.6416 6.2002L9.99994 10.4585L17.3083 6.2252"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 18.0085V10.4502"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.27503 2.06706L3.82503 4.53373C2.8167 5.09206 1.9917 6.49206 1.9917 7.64206V12.3504C1.9917 13.5004 2.8167 14.9004 3.82503 15.4587L8.27503 17.9337C9.22503 18.4587 10.7834 18.4587 11.7334 17.9337L16.1834 15.4587C17.1917 14.9004 18.0167 13.5004 18.0167 12.3504V7.64206C18.0167 6.49206 17.1917 5.09206 16.1834 4.53373L11.7334 2.05873C10.775 1.53373 9.22503 1.53373 8.27503 2.06706Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
