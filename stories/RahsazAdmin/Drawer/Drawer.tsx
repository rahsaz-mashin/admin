import React, {CSSProperties, useCallback, useContext, useRef, useState} from "react";
import {ScrollShadow} from "@nextui-org/react";
import {Logo} from "@/stories/General";
import {AccountAvatar} from "@/stories/RahsazAdmin/AccountAvatar";
import {AccountName} from "@/stories/RahsazAdmin/AccountName";
import {DrawerWorkspaceItem} from "@/stories/RahsazAdmin/Drawer/DrawerWorkspaceItem";
import {DrawerMenuItem} from "@/stories/RahsazAdmin/Drawer/DrawerMenuItem";
import {Clock} from "@/stories/RahsazAdmin/Clock";
import {AdminContext} from "@/context/admin.context";
import {Session} from "next-auth";
import {identityTypesEnum} from "@/interfaces/Identity.interface";
import {DrawerUserMenu} from "@/stories/RahsazAdmin/Drawer/DrawerUserMenu";


export type DrawerProps = {
    session: Session;
}


export const Drawer = (props: DrawerProps) => {

    const {session} = props


    const [height, setHeight] = useState<null | number>(500);
    const div = useCallback((node: any) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
            const resizeObserver = new ResizeObserver((event) => {
                setHeight(event[0].contentBoxSize[0].blockSize)
            });
            resizeObserver.observe(node);
        }
    }, []);
    const sidebarHeight = height ? (height > 630 ? 530 : height < 300 ? 200 : (height - 100)) : 200


    const [clockShowing, setClockShowing] = useState(false)
    const timeoutClock = useRef<ReturnType<typeof setTimeout>>();


    const adminContext = useContext(AdminContext)

    const activeWorkspace = adminContext.activeWorkspace;
    const activeSection = adminContext.activeSection;

    const workspacesList = adminContext.workspacesList()
    const sectionsList = adminContext.sectionsList()


    let accountName = "[هویت ثبت نشده]"
    const accountAvatar = session.account.avatar?.system ? (session.account.avatar?.system?.baseUrl + "/" + session.account.avatar?.path) : ""
    if (session.account.identity?.identityType === identityTypesEnum.real) {
        accountName = session.account.identity?.firstName! + " " + session.account.identity?.lastName!
    }
    if (session.account.identity?.identityType === identityTypesEnum.legal) {
        accountName = session.account.identity?.legalName!
    }

    console.log({session})


    return (
        <nav
            className={
                "h-full z-20 select-none w-80 md:translate-x-0 shadow-2xl fixed transition-transform duration-1000" +
                (adminContext.isOpenDrawer ? " translate-x-0" : " translate-x-96")
            }
        >
            <div className="bg-white overflow-hidden h-full w-full relative rounded-tl-3xl flex">
                <div className="w-[76px] h-full overflow-hidden bg-gradient-to-b from-[#FFD4A5] to-[#FF921F]">
                    <div className="relative w-full h-full flex items-center flex-col justify-between">
                        {/* logo */}
                        <div
                            className="flex items-center justify-center cursor-pointer z-20 w-full py-3 px-3"
                            onClick={() => {
                                setClockShowing(true)
                            }}
                            onMouseLeave={() => {
                                if (clockShowing) {
                                    timeoutClock.current = setTimeout(() => {
                                        setClockShowing(false)
                                    }, 5000)
                                }
                            }}
                            onMouseEnter={() => {
                                if (timeoutClock.current) {
                                    clearTimeout(timeoutClock.current)
                                }
                            }}
                        >
                            {clockShowing ? <Clock/> : <Logo size={60}/>}
                        </div>


                        {/* workspaces items */}
                        <div className="absolute pb-[150px] min-h-[278px] h-full flex flex-col z-10 w-full">
                            <div className="h-full relative" ref={div}>
                                <svg
                                    width="107"
                                    height={sidebarHeight + 94}
                                    viewBox={`0 0 107 ${sidebarHeight + 94}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    fillOpacity="0.06"
                                    shapeRendering="crispEdges"
                                    filter="url(#filter_shadow)"
                                    className="absolute backdrop-blur"
                                >
                                    <path
                                        d="M8 8H27V58.6582C27 71.1988 32.351 83.1434 41.7089 91.4917L80.291 125.911C89.649 134.259 95 146.204 95 158.745V160H8V8Z"
                                    />
                                    <path
                                        d={`M95 160H8V${sidebarHeight}H95V160Z`}
                                    />
                                    <path
                                        d={`M8 ${sidebarHeight}V${sidebarHeight + 81.995}H27L80.2911 ${sidebarHeight + 34.454}C89.649 ${sidebarHeight + 26.106} 95 ${sidebarHeight + 14.161} 95 ${sidebarHeight + 1.62}V${sidebarHeight}H8Z`}
                                    />
                                    <defs>
                                        <filter
                                            id="filter_shadow"
                                            x="-22" y="-22"
                                            width="147"
                                            height={sidebarHeight + 133.995}
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15"/>
                                            <feComposite
                                                in2="SourceAlpha" operator="in"
                                                result="effect1_backgroundBlur_2360_80713"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dx="2" dy="2"/>
                                            <feGaussianBlur stdDeviation="5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_backgroundBlur_2360_80713"
                                                result="effect2_dropShadow_2360_80713"
                                            />
                                            <feBlend
                                                mode="normal" in="SourceGraphic"
                                                in2="effect2_dropShadow_2360_80713"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className="flex-1 relative overflow-hidden z-10 mt-36 mr-2.5">

                                    {/* workspaces list */}
                                    {!!workspacesList?.length && (
                                        <ScrollShadow
                                            hideScrollBar
                                            size={25}
                                            className="flex relative flex-row h-full "
                                            style={{height: `${sidebarHeight - 125}px`}}
                                        >
                                            <div className="absolute top-2">
                                                <svg
                                                    width="8" height="37" viewBox="0 0 8 37" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="transition-all transform"
                                                    style={{"--tw-translate-y": `${(workspacesList?.findIndex(({key}) => (key === activeWorkspace)) * 56) || 0}px`} as CSSProperties}
                                                >
                                                    <mask id="path-1-inside-1_794_12086" fill="white">
                                                        <path
                                                            fillRule="evenodd" clipRule="evenodd"
                                                            d="M4.1181 0C6.2253 2.74955 7.41968 6.15684 7.41968 9.7342V27.259C7.41968 30.8363 6.2253 34.2436 4.1181 36.9932C3.99983 35.9389 3.79771 34.8944 3.51312 33.8699L0.729674 23.8495C-0.243182 20.3472 -0.243182 16.646 0.729674 13.1437L3.51312 3.12331C3.79771 2.09878 3.99983 1.05434 4.1181 0Z"
                                                        />
                                                    </mask>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M4.1181 0C6.2253 2.74955 7.41968 6.15684 7.41968 9.7342V27.259C7.41968 30.8363 6.2253 34.2436 4.1181 36.9932C3.99983 35.9389 3.79771 34.8944 3.51312 33.8699L0.729674 23.8495C-0.243182 20.3472 -0.243182 16.646 0.729674 13.1437L3.51312 3.12331C3.79771 2.09878 3.99983 1.05434 4.1181 0Z"
                                                          fill="url(#paint0_linear_794_12086)"
                                                    />
                                                    <path
                                                        d="M4.1181 0L3.12433 -0.111479L3.40118 -2.57942L4.91182 -0.608288L4.1181 0ZM4.1181 36.9932L4.91182 37.6015L3.40118 39.5726L3.12433 37.1047L4.1181 36.9932ZM3.51312 33.8699L2.5496 34.1375L3.51312 33.8699ZM0.729674 23.8495L1.69319 23.5818H1.69319L0.729674 23.8495ZM0.729674 13.1437L1.69319 13.4114H1.69319L0.729674 13.1437ZM3.51312 3.12331L4.47664 3.39095L3.51312 3.12331ZM6.41968 9.7342C6.41968 6.38054 5.30011 3.18629 3.32438 0.608288L4.91182 -0.608288C7.15048 2.31281 8.41968 5.93315 8.41968 9.7342H6.41968ZM6.41968 27.259V9.7342H8.41968V27.259H6.41968ZM3.32438 36.3849C5.30011 33.8069 6.41968 30.6127 6.41968 27.259H8.41968C8.41968 31.06 7.15049 34.6804 4.91182 37.6015L3.32438 36.3849ZM3.12433 37.1047C3.01197 36.103 2.81996 35.1108 2.5496 34.1375L4.47664 33.6022C4.77546 34.678 4.98768 35.7747 5.11187 36.8817L3.12433 37.1047ZM2.5496 34.1375L-0.233844 24.1171L1.69319 23.5818L4.47664 33.6022L2.5496 34.1375ZM-0.233843 24.1171C-1.25534 20.4397 -1.25534 16.5535 -0.233844 12.8761L1.69319 13.4114C0.768979 16.7385 0.768979 20.2547 1.69319 23.5818L-0.233843 24.1171ZM-0.233844 12.8761L2.5496 2.85566L4.47664 3.39095L1.69319 13.4114L-0.233844 12.8761ZM2.5496 2.85566C2.81996 1.88236 3.01197 0.890149 3.12433 -0.111479L5.11187 0.111479C4.98768 1.21854 4.77546 2.3152 4.47664 3.39095L2.5496 2.85566Z"
                                                        fill="white" fillOpacity="0.4" style={{mixBlendMode: "overlay"}}
                                                        mask="url(#path-1-inside-1_794_12086)"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="paint0_linear_794_12086" x1="-20.2572" y1="20.4966"
                                                            x2="-0.257221" y2="42.4966" gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#F08824"/>
                                                            <stop offset="1" stopColor="#FFB800"/>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <ul className="flex flex-col w-full items-center h-full gap-0">
                                                {workspacesList?.map(({key, title, icon, isEnable}) => {
                                                    return (
                                                        <DrawerWorkspaceItem
                                                            key={key}
                                                            id={key}
                                                            label={title}
                                                            icon={icon}
                                                            isActive={activeWorkspace === key}
                                                            isEnable={isEnable}
                                                        />
                                                    )
                                                })}
                                            </ul>
                                        </ScrollShadow>
                                    )}

                                </div>
                            </div>
                        </div>
                        {/* account */}
                        <div className="flex items-center justify-center z-20 h-[150px] pt-[74px] w-full">
                            <AccountAvatar
                                name={accountName}
                                avatar={accountAvatar}
                            />
                        </div>

                    </div>
                </div>
                {/* sections list */}
                {!!sectionsList?.length && (
                    <ScrollShadow hideScrollBar size={75} className="flex-1 h-[calc(100%-130px)]">
                        <ul className="flex flex-col p-3 gap-3 z-50">
                            {sectionsList.map(({key, title, icon, isEnable}) => {
                                return (
                                    <DrawerMenuItem
                                        key={key}
                                        id={key}
                                        label={title}
                                        icon={icon}
                                        isActive={activeSection === key}
                                        isEnable={isEnable}
                                    />
                                )
                            })}
                        </ul>
                    </ScrollShadow>
                )}
            </div>
            <svg
                width="244"
                height="150"
                viewBox="0 0 244 150"
                fill="none"
                className="absolute bottom-0 start-[76px] z-10"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M244 0V150H0C0 108.026 34.0264 74 76 74H170C179.718 74 189.34 72.0859 198.319 68.3671C207.297 64.6482 215.454 59.1974 222.326 52.3259C229.197 45.4544 234.648 37.2967 238.367 28.3186C242.086 19.3405 244 9.71782 244 0Z"
                    fill="url(#grad)"
                />
                <defs>
                    <linearGradient id="grad" x1="122" y1="0" x2="122" y2="0">
                        <stop stopColor="#FFD4A5"/>
                        <stop offset="1" stopColor="#FF921F"/>
                    </linearGradient>
                </defs>
            </svg>
            <div
                className="px-8 z-20 flex justify-between text-white items-center absolute bottom-0 start-[76px] cursor-pointer w-[calc(100%-76px)] h-[76px]"
            >
                <AccountName name={accountName}/>
                <DrawerUserMenu/>
            </div>
        </nav>
    );
};//
//
//