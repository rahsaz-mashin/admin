import "./style.css"
import "@storybook/csf";
import type {Preview} from "@storybook/react";
import {HeroUIProvider} from "@heroui/system";
import "@/public/static/assets/fonts/style.css";
import { ReactNode} from "react";


const parameters = {
    // actions: {argTypesRegex: "^on[A-Z].*"},
    options: {
        storySort: {
            method: "alphabetical",
            order: ["Foundations", "Components"],
        },
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // darkMode: {
    //   current: "dark",
    //   stylePreview: true,
    //   darkClass: "dark",
    //   lightClass: "light",
    //   classTarget: "html",
    //   dark: {
    //     ...themes.dark,
    //     ...commonTheme,
    //     appBg: "#161616",
    //     barBg: "black",
    //     background: "black",
    //     appContentBg: "black",
    //     appBorderRadius: 14,
    //     brandImage: "/dark-logo.svg",
    //   },
    //   light: {
    //     ...themes.light,
    //     ...commonTheme,
    //     appBorderRadius: 14,
    //     brandImage: "/light-logo.svg",
    //   },
    // },
    layout: "fullscreen",
};

export const decorators = [
    (Story: () => ReactNode) => (
        <HeroUIProvider>
            <main dir="rtl" className="flex justify-center items-center h-screen">
                <Story/>
            </main>
        </HeroUIProvider>
    ),
];

const preview: Preview = {
    parameters,
    decorators,
};


export default preview
