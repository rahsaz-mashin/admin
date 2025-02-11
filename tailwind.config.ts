import {heroui} from "@heroui/react";
import plugin from "tailwindcss/plugin";
import {gridAreas} from "tailwindcss-grid-areas";


export default {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './stories/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                scrollthumb: "rgb(255,146,31)",
                scrolltrack: "rgb(217,217,217)",
            },
            screens: {
                'us': '320px',
                'xs': '480px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1680px',
                '4xl': '1920px',
                '5xl': '2250px',
                '6xl': '2500px',
                '7xl': '2750px',
                '8xl': '3000px',
            }
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        background: "rgb(239 239 239)",
                        primary: {
                            DEFAULT: "#FF921F",
                            50: "#ffe1c3",
                            100: "#facb9c",
                            200: "#fcb97a",
                            300: "#ffa74f",
                            400: "#ff921f",
                            500: "#ff8f16",
                            600: "#ff870b",
                            700: "#ec7900",
                            800: "#d26c00",
                            900: "#814200",
                        },
                        secondary: {
                            DEFAULT: "#0075FF",
                            50: "#E6F1FE",
                            100: "#CCE3FD",
                            200: "#99C7FB",
                            300: "#66AAF9",
                            400: "#338EF7",
                            500: "#006FEE",
                            600: "#005BC4",
                            700: "#004493",
                            800: "#002E62",
                            900: "#001731",
                        },
                    },
                },
                dark: {
                    colors: {
                        background: "rgb(239 239 239)",
                        primary: {
                            DEFAULT: "#FF921F",
                            50: "#ffe1c3",
                            100: "#facb9c",
                            200: "#fcb97a",
                            300: "#ffa74f",
                            400: "#ff921f",
                            500: "#ff8f16",
                            600: "#ff870b",
                            700: "#ec7900",
                            800: "#d26c00",
                            900: "#814200",
                        },
                        secondary: {
                            DEFAULT: "#0075FF",
                            50: "#E6F1FE",
                            100: "#CCE3FD",
                            200: "#99C7FB",
                            300: "#66AAF9",
                            400: "#338EF7",
                            500: "#006FEE",
                            600: "#005BC4",
                            700: "#004493",
                            800: "#002E62",
                            900: "#001731",
                        },
                    },
                },
            },
        }),
        gridAreas({}),
        plugin(({addUtilities}) => {
            addUtilities({
                ".field-sizing-content": {
                    "field-sizing": "content",
                },
            });
        })
    ],
};

