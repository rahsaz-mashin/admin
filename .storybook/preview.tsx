import "./style.css"
import "@/public/styles/fonts.css";

import {themes} from "@storybook/theming";
import {NextUIProvider} from "@nextui-org/system";
import type {Preview} from "@storybook/react";


const decorators: Preview["decorators"] = [
    (Story, {globals: {locale}}) => {
        if (!locale) locale = defaultLocal
        // @ts-ignore
        const direction = locale && new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "rtl" : undefined;

        return (
            <NextUIProvider locale={locale}>
                <div className="bg-dark" lang={locale} dir={direction}>
                    <Story/>
                </div>
            </NextUIProvider>
        );
    },
];


const commonTheme = {
    brandTitle: "Rahsaz Mashin",
    brandUrl: "https://rahsazmashin.com",
    brandTarget: "_self",

};


const parameters: Preview["parameters"] = {
    actions: {argTypesRegex: "^on[A-Z].*"},
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
    darkMode: {
        current: "dark",
        stylePreview: true,
        darkClass: "dark",
        lightClass: "light",
        classTarget: "html",
        dark: {
            ...themes.dark,
            ...commonTheme,
            appBg: "#161616",
            barBg: "black",
            background: "black",
            appContentBg: "black",
            appBorderRadius: 14,
            brandImage: "/dark-logo.svg",
        },
        light: {
            ...themes.light,
            ...commonTheme,
            appBorderRadius: 14,
            brandImage: "/light-logo.svg",
        },
    },
    layout: "fullscreen",
};


const locales = [
    "ar-AE",
    "en-US",
    "fa-IR"
];

const defaultLocal = locales[2]

const globalTypes: Preview["globalTypes"] = {
    locale: {
        defaultValue: defaultLocal,
        toolbar: {
            icon: "globe",
            items: locales.map((locale) => ({
                    value: locale,
                    title: new Intl.DisplayNames(undefined, {type: "language"}).of(locale),
                    // @ts-ignore
                    right: new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "Right to Left" : undefined,
                })
            ),
        },
    },
};


const preview: Preview = {
    decorators,
    parameters,
    globalTypes,
};


export default preview
