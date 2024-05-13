import {nextui} from '@nextui-org/theme'

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
    ],
}
