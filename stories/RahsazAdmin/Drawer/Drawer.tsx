import React from "react";
import { Logo } from "../../General";
import { AccountAvatar } from "../AccountAvatar";
import { AccountName } from "../AccountName";
import { DrawerItem } from "./Item";
import {
  OutlinedArrowDownIcon,
  OutlinedCustomizationIcon,
  OutlinedMoreIcon,
} from "../../Icons";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export const Drawer = ({ isOpenSideBar }: { isOpenSideBar: boolean }) => {
  const userMenu = [
    {
      key: "edit-profile",
      label: "ویرایش پروفایل",
    },
    {
      key: "notifications",
      label: "اعلانات",
    },
    {
      key: "logout",
      label: "خروج از حساب کاربری",
    },
  ];

  return (
    <nav
      className={
        "h-full z-20 select-none w-80 md:translate-x-0 shadow-2xl fixed transition-transform duration-1000" +
        (isOpenSideBar ? " translate-x-0" : " translate-x-96")
      }
    >
      <div className="bg-white h-full w-full relative rounded-tl-3xl flex">
        <div className="w-[76px] h-full overflow-hidden bg-gradient-to-b from-[#FFD4A5] to-[#FF921F]">
          <div className="relative w-full h-full flex items-center flex-col justify-between">
            {/* logo */}
            <div className="flex items-center justify-center w-full py-3 px-3">
              <Logo />
            </div>

            {/* sections items */}
            {/*<div className="absolute pb-[150px] min-h-[278px] h-full flex flex-col z-10 w-full">*/}
            {/* open sections */}
            {/*<svg*/}
            {/*  width="107"*/}
            {/*  height="172"*/}
            {/*  className="z-10"*/}
            {/*  viewBox="0 0 107 172"*/}
            {/*  fill="none"*/}
            {/*  xmlns="http://www.w3.org/2000/svg"*/}
            {/*>*/}
            {/*  <g>*/}
            {/*    <path*/}
            {/*      fillRule="evenodd"*/}
            {/*      clipRule="evenodd"*/}
            {/*      d="M8 8H27V58.6582C27 71.1988 32.351 83.1434 41.7089 91.4917L80.291 125.911C89.649 134.259 95 146.204 95 158.745V160H8V8Z"*/}
            {/*      fill="white"*/}
            {/*      fillOpacity="0.06"*/}
            {/*      shapeRendering="crispEdges"*/}
            {/*    />*/}
            {/*  </g>*/}
            {/*  <defs>*/}
            {/*    <filter*/}
            {/*      id="filter0_bd_1948_5126"*/}
            {/*      x="-22"*/}
            {/*      y="-22"*/}
            {/*      width="147"*/}
            {/*      height="212"*/}
            {/*      filterUnits="userSpaceOnUse"*/}
            {/*      colorInterpolationFilters="sRGB"*/}
            {/*    >*/}
            {/*      <feFlood floodOpacity="0" result="BackgroundImageFix" />*/}
            {/*      <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />*/}
            {/*      <feComposite*/}
            {/*        in2="SourceAlpha"*/}
            {/*        operator="in"*/}
            {/*        result="effect1_backgroundBlur_1948_5126"*/}
            {/*      />*/}
            {/*      <feColorMatrix*/}
            {/*        in="SourceAlpha"*/}
            {/*        type="matrix"*/}
            {/*        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
            {/*        result="hardAlpha"*/}
            {/*      />*/}
            {/*      <feOffset dx="2" dy="2" />*/}
            {/*      <feGaussianBlur stdDeviation="5" />*/}
            {/*      <feComposite in2="hardAlpha" operator="out" />*/}
            {/*      <feColorMatrix*/}
            {/*        type="matrix"*/}
            {/*        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"*/}
            {/*      />*/}
            {/*      <feBlend*/}
            {/*        mode="normal"*/}
            {/*        in2="effect1_backgroundBlur_1948_5126"*/}
            {/*        result="effect2_dropShadow_1948_5126"*/}
            {/*      />*/}
            {/*      <feBlend*/}
            {/*        mode="normal"*/}
            {/*        in="SourceGraphic"*/}
            {/*        in2="effect2_dropShadow_1948_5126"*/}
            {/*        result="shape"*/}
            {/*      />*/}
            {/*    </filter>*/}
            {/*  </defs>*/}
            {/*</svg>*/}

            {/*  /!* sections *!/*/}
            {/*  /!*<div className="bg-white/[0.06] z-0 backdrop-blur-[30px] shadow-[2px_2px_10px_#00000029] flex-1 w-[calc(100%-12px)] mt-[-12px] mb-[-8px] mr-[12px]" />*!/*/}

            {/*  /!*<svg width="107" height="389" viewBox="0 0 107 389" fill="none" xmlns="http://www.w3.org/2000/svg">*!/*/}
            {/*  /!*    <g filter="url(#filter0_bd_1949_2325)">*!/*/}
            {/*  /!*        <path fillRule="evenodd" clipRule="evenodd" d="M95 8H8V377H95V8Z" fill="white" fillOpacity="0.06" shapeRendering="crispEdges"/>*!/*/}
            {/*  /!*    </g>*!/*/}
            {/*  /!*    <defs>*!/*/}
            {/*  /!*        <filter id="filter0_bd_1949_2325" x="-22" y="-22" width="147" height="429" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">*!/*/}
            {/*  /!*            <feFlood floodOpacity="0" result="BackgroundImageFix"/>*!/*/}
            {/*  /!*            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15"/>*!/*/}
            {/*  /!*            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1949_2325"/>*!/*/}
            {/*  /!*            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>*!/*/}
            {/*  /!*            <feOffset dx="2" dy="2"/>*!/*/}
            {/*  /!*            <feGaussianBlur stdDeviation="5"/>*!/*/}
            {/*  /!*            <feComposite in2="hardAlpha" operator="out"/>*!/*/}
            {/*  /!*            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>*!/*/}
            {/*  /!*            <feBlend mode="normal" in2="effect1_backgroundBlur_1949_2325" result="effect2_dropShadow_1949_2325"/>*!/*/}
            {/*  /!*            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1949_2325" result="shape"/>*!/*/}
            {/*  /!*        </filter>*!/*/}
            {/*  /!*    </defs>*!/*/}
            {/*  /!*</svg>*!/*/}

            {/*  /!* close section *!/*/}
            {/*  /!*<svg*!/*/}
            {/*  /!*  width="107"*!/*/}
            {/*  /!*  height="102"*!/*/}
            {/*  /!*  className="z-10"*!/*/}
            {/*  /!*  viewBox="0 0 107 102"*!/*/}
            {/*  /!*  fill="none"*!/*/}
            {/*  /!*  xmlns="http://www.w3.org/2000/svg"*!/*/}
            {/*  /!*>*!/*/}
            {/*  /!*  <g filter="url(#filter0_bd_1948_5127)">*!/*/}
            {/*  /!*    <path*!/*/}
            {/*  /!*      fillRule="evenodd"*!/*/}
            {/*  /!*      clipRule="evenodd"*!/*/}
            {/*  /!*      d="M8 8V89.9953H27L80.2911 42.4538C89.649 34.1055 95 22.1609 95 9.62036V8H8Z"*!/*/}
            {/*  /!*      fill="white"*!/*/}
            {/*  /!*      fillOpacity="0.06"*!/*/}
            {/*  /!*      shapeRendering="crispEdges"*!/*/}
            {/*  /!*    />*!/*/}
            {/*  /!*  </g>*!/*/}
            {/*  /!*  <defs>*!/*/}
            {/*  /!*    <filter*!/*/}
            {/*  /!*      id="filter0_bd_1948_5127"*!/*/}
            {/*  /!*      x="-22"*!/*/}
            {/*  /!*      y="-22"*!/*/}
            {/*  /!*      width="147"*!/*/}
            {/*  /!*      height="141.995"*!/*/}
            {/*  /!*      filterUnits="userSpaceOnUse"*!/*/}
            {/*  /!*      colorInterpolationFilters="sRGB"*!/*/}
            {/*  /!*    >*!/*/}
            {/*  /!*      <feFlood floodOpacity="0" result="BackgroundImageFix" />*!/*/}
            {/*  /!*      <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />*!/*/}
            {/*  /!*      <feComposite*!/*/}
            {/*  /!*        in2="SourceAlpha"*!/*/}
            {/*  /!*        operator="in"*!/*/}
            {/*  /!*        result="effect1_backgroundBlur_1948_5127"*!/*/}
            {/*  /!*      />*!/*/}
            {/*  /!*      <feColorMatrix*!/*/}
            {/*  /!*        in="SourceAlpha"*!/*/}
            {/*  /!*        type="matrix"*!/*/}
            {/*  /!*        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*!/*/}
            {/*  /!*        result="hardAlpha"*!/*/}
            {/*  /!*      />*!/*/}
            {/*  /!*      <feOffset dx="2" dy="2" />*!/*/}
            {/*  /!*      <feGaussianBlur stdDeviation="5" />*!/*/}
            {/*  /!*      <feComposite in2="hardAlpha" operator="out" />*!/*/}
            {/*  /!*      <feColorMatrix*!/*/}
            {/*  /!*        type="matrix"*!/*/}
            {/*  /!*        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"*!/*/}
            {/*  /!*      />*!/*/}
            {/*  /!*      <feBlend*!/*/}
            {/*  /!*        mode="normal"*!/*/}
            {/*  /!*        in2="effect1_backgroundBlur_1948_5127"*!/*/}
            {/*  /!*        result="effect2_dropShadow_1948_5127"*!/*/}
            {/*  /!*      />*!/*/}
            {/*  /!*      <feBlend*!/*/}
            {/*  /!*        mode="normal"*!/*/}
            {/*  /!*        in="SourceGraphic"*!/*/}
            {/*  /!*        in2="effect2_dropShadow_1948_5127"*!/*/}
            {/*  /!*        result="shape"*!/*/}
            {/*  /!*      />*!/*/}
            {/*  /!*    </filter>*!/*/}
            {/*  /!*  </defs>*!/*/}
            {/*  /!*</svg>*!/*/}
            {/*</div>*/}
            <div className="flex items-center justify-center h-[150px] pt-[74px] w-full">
              <AccountAvatar />
            </div>
          </div>
        </div>
        <ul className="h-full flex flex-col p-3 gap-3 flex-1 overflow-auto">
          <DrawerItem
            label="محصولات"
            id="products"
            Icon={OutlinedCustomizationIcon}
          />
          <DrawerItem
            label="محصولات"
            id="products"
            Icon={OutlinedCustomizationIcon}
          />
          <DrawerItem
            label="محصولات"
            id="products"
            Icon={OutlinedCustomizationIcon}
          />
          <DrawerItem
            label="محصولات"
            id="products"
            Icon={OutlinedCustomizationIcon}
          />
          <li className="min-h-[130px] w-full" />
        </ul>
      </div>
      <svg
        width="244"
        height="150"
        viewBox="0 0 244 150"
        fill="none"
        className="absolute bottom-0 start-[76px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M244 0V150H0C0 108.026 34.0264 74 76 74H170C179.718 74 189.34 72.0859 198.319 68.3671C207.297 64.6482 215.454 59.1974 222.326 52.3259C229.197 45.4544 234.648 37.2967 238.367 28.3186C242.086 19.3405 244 9.71782 244 0Z"
          fill="url(#grad)"
        />
        <defs>
          <linearGradient id="grad" x1="122" y1="0" x2="122" y2="0">
            <stop stopColor="#FFD4A5" />
            <stop offset="1" stopColor="#FF921F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="px-8 flex justify-between text-white items-center absolute bottom-0 start-[76px] cursor-pointer w-[calc(100%-76px)] h-[76px]">
        <AccountName />
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              isIconOnly
              size="sm"
              radius="full"
              variant="light"
              color="default"
              className="text-white"
            >
              <OutlinedMoreIcon size={28} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="UserCenter Actions" items={userMenu}>
            {(item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "logout" ? "danger" : "default"}
                className={item.key === "logout" ? "text-danger" : ""}
                showDivider={item.key !== "logout"}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};
