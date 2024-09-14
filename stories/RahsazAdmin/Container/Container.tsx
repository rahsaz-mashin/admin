import React, {ReactNode} from "react";
import {Header} from "@/stories/RahsazAdmin/Header/Header";


export type ContainerProps = {
    children: ReactNode,
}


export const Container = (props: ContainerProps) => {
    const {
        children,
    } = props



    return (
        <aside className="h-full z-0 pr-0 md:pr-80 flex-1 px-0">
            <Header />
            <div className="p-4">{children}</div>
        </aside>
    );
};
