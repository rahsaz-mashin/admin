import {nextui} from '@nextui-org/theme'

const plugin = require('tailwindcss/plugin')
import {gridAreas} from "tailwindcss-grid-areas";


const fieldSizing = () => {
    return plugin(({addUtilities}) => {
        addUtilities({
            ".field-sizing-content": {
                "field-sizing": "content",
            },
        });
    })
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './stories/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],

    theme: {
        extend: {
            backgroundImage: {
                'store-navigation-up': `url("data:image/svg+xml,<svg width='30' height='30' viewBox='0 0 30 30' fill='white' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 0.5V30.5H30C13.4315 30.5 0 17.0685 0 0.5Z' /></svg>")`,
                'store-navigation-down': `url("data:image/svg+xml,<svg width='30' height='30' viewBox='0 0 30 30' fill='white' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 30V0H30C13.4315 0 0 13.4315 0 30Z' /></svg>")`,
                'store-header-start': `url("data:image/svg+xml,<svg width='30' height='30' viewBox='0 0 30 30' fill='white' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M30 30L0 30L-3.57746e-07 3.57746e-07C-1.60169e-07 16.5685 13.4315 30 30 30Z' /></svg>")`,
                'store-header-end': `url("data:image/svg+xml,<svg width='30' height='30' viewBox='0 0 30 30' fill='white' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 30L30 30L30 3.57746e-07C30 16.5685 16.5685 30 0 30Z' /></svg>")`,
            },
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
        nextui({
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
                        },
                        telegram: {
                            DEFAULT: "#0088cc",
                        },
                        instagram: {
                            DEFAULT: "#bc2a8d",
                        },
                        whatsapp: {
                            DEFAULT: "#25D366",
                        },
                    },
                },
                dark: {
                    colors: {
                        background: "rgb(239 239 239)",
                        primary: {
                            DEFAULT: "#FF921F",
                        },
                        secondary: {
                            DEFAULT: "#0075FF",
                        },
                        telegram: {
                            DEFAULT: "#0088cc",
                        },
                        instagram: {
                            DEFAULT: "#bc2a8d",
                        },
                        whatsapp: {
                            DEFAULT: "#25D366",
                        },
                    },
                },
            },
        }),
        require('tailwind-scrollbar')({nocompatible: true, preferredStrategy: 'pseudoelements'}),
        require("@xpd/tailwind-3dtransforms"),
        gridAreas(),
        fieldSizing(),
    ],
}
