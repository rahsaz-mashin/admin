import React, {ReactNode} from "react";
import {Header, HeaderProps} from "@/stories/RahsazAdmin/Header/Header";


export type ContainerProps = {
    headerProps: HeaderProps,
    children: ReactNode,
}


export const Container = (
    {
        headerProps,
        children,
    }: ContainerProps
) => {
    return (
        <aside className="h-full z-0 pr-0 md:pr-80 flex-1 px-0">
            <Header {...headerProps}/>
            <div className="pb-4 px-4">{children}</div>
        </aside>
    );
};
