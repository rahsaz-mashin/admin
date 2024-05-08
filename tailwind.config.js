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
        extend: {},
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
        })
    ],
}
