"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {useRouter} from 'next-nprogress-bar'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import {Suspense} from "react";
import {SessionProvider} from "next-auth/react";


export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>
                <SessionProvider>
                    <Suspense>
                        {children}
                        <ProgressBar
                            height="3px"
                            color="#FF921F"
                            options={{showSpinner: true}}
                            shallowRouting
                            stopDelay={500}
                            disableSameURL={false}
                        />
                    </Suspense>
                </SessionProvider>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
