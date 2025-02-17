import React from "react";

export const Component = ({size = 20}: { size?: number }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75 21C9.75 21.4142 9.41421 21.75 9 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V15C2.25 14.5858 2.58579 14.25 3 14.25C3.41421 14.25 3.75 14.5858 3.75 15V19.1893L10.4697 12.4697C10.7626 12.1768 11.2374 12.1768 11.5303 12.4697C11.8232 12.7626 11.8232 13.2374 11.5303 13.5303L4.81066 20.25H9C9.41421 20.25 9.75 20.5858 9.75 21Z"
            />
        </svg>
    )
}

export default {
    title: "AdminIcons/BoldDuotoneFooter",
    component: Component,
}

export const Icon = {
    args: {},
}