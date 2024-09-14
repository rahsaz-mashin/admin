"use client"


import React, {ReactNode} from "react";
import {RahsazAdmin} from "@/stories"
import Scrollbar from "react-scrollbars-custom";
import {Session} from "next-auth";


export type RahsazAdminMainLayoutProps = {
    children: ReactNode;
    session: Session;
}



const RahsazAdminMainLayout = (props: RahsazAdminMainLayoutProps) => {
    const {children, session} = props

    return (
        <>
            <Scrollbar
                wrapperProps={{
                    renderer: (props) => {
                        const {elementRef, style, ...restProps} = props;
                        return (
                            <div
                                {...restProps}
                                ref={elementRef}
                                style={{overflow: "hidden", position: "absolute", inset: "0px 0px 0px 0px"}}
                                key="scrollbarWrapper"
                            />
                        );
                    },
                }}
                trackXProps={{
                    renderer: (props) => {
                        const {elementRef, style, ...restProps} = props;
                        return (
                            <div
                                {...restProps}
                                ref={elementRef}
                                className="!bg-scrolltrack"
                                style={{...style, height: "4px", left: 0, width: "100%", borderRadius: 0}}
                                key="scrollbarTrackX"
                            />
                        );
                    },
                }}
                thumbXProps={{
                    renderer: (props) => {
                        const {elementRef, style, ...restProps} = props;
                        return <div key="scrollbarThumbX" {...restProps} ref={elementRef} className="!bg-scrollthumb"/>;
                    },
                }}
                // ========================
                trackYProps={{
                    renderer: (props) => {
                        const {elementRef, style, ...restProps} = props;
                        return (
                            <div
                                key="scrollbarTrackY"
                                {...restProps}
                                ref={elementRef}
                                className="!bg-scrolltrack"
                                style={{...style, width: "4px", top: 0, height: "100%", borderRadius: 0}}
                            />
                        );
                    },
                }}
                thumbYProps={{
                    renderer: (props) => {
                        const {elementRef, style, ...restProps} = props;
                        return <div key="scrollbarThumbY" {...restProps} ref={elementRef} className="!bg-scrollthumb"/>;
                    },
                }}
                className="!fixed !h-full"
            >
                <RahsazAdmin.MainLayout session={session}>
                    {children}
                </RahsazAdmin.MainLayout>
            </Scrollbar>
        </>
    )
}


export default RahsazAdminMainLayout
