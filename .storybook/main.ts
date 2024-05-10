import type {StorybookConfig} from "@storybook/nextjs";
import path from "node:path";

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    staticDirs: ["..\\public"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-postcss",
            options: {
                cssLoaderOptions: {
                    // When you have split your css over multiple files
                    // and use @import('./other-styles.css')
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    // When using postCSS 8
                    implementation: require("postcss"),
                },
            },
        }
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {
            image: {
                loading: "eager",
            },
            nextConfigPath: path.resolve(__dirname, "../next.config.js"),
        },
    },
    core: {
        disableTelemetry: true
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
