import React from "react";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";

export const Header = ({ setOpenSideBar }: { setOpenSideBar: any }) => {
  return (
    <header className="w-full select-none flex items-start gap-3 sticky top-0 bg-background">
      <div
        className="block md:hidden cursor-pointer text-primary hover:text-primary/80 transition group"
        onClick={() => setOpenSideBar((o: any) => !o)}
      >
        <svg
          width="43"
          height="56"
          viewBox="0 0 43 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1903_1119)">
            <path
              d="M43 0H10.7697C-5.29471 12.2963 -3.38748 29.6311 16.4912 40.731L43 55.533V0Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M14 12H32V14H14V12ZM20 19H32V21H20V19ZM14 26H32V28H14V26Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_i_1903_1119"
              x="-2"
              y="0"
              width="45"
              height="55.533"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1903_1119"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col w-full md:px-4 py-1">
        <div className="flex items-center gap-2">
          <Button
            // onPress={() => router.back()}
            isIconOnly
            radius="full"
            variant="light"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 30 30"
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.8371 10.6629C16.471 10.2968 16.471 9.7032 16.8371 9.33709C17.2032 8.97097 17.7968 8.97097 18.1629 9.33709L23.1629 14.3371C23.529 14.7032 23.529 15.2968 23.1629 15.6629L18.1629 20.6629C17.7968 21.029 17.2032 21.029 16.8371 20.6629C16.471 20.2968 16.471 19.7032 16.8371 19.3371L20.2367 15.9375H8.125C7.60723 15.9375 7.1875 15.5178 7.1875 15C7.1875 14.4822 7.60723 14.0625 8.125 14.0625H20.2367L16.8371 10.6629Z" />
            </svg>
          </Button>
          <h1 className="font-bold text-primary text-lg">راهساز استور</h1>
        </div>
        <Breadcrumbs
          underline="hover"
          color="secondary"
          separator={
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.35347 4.97976C9.54873 5.17502 9.54873 5.4916 9.35347 5.68687L7.04036 7.99998L9.35347 10.3131C9.54873 10.5084 9.54873 10.8249 9.35347 11.0202C9.15821 11.2155 8.84163 11.2155 8.64636 11.0202L5.9797 8.35353C5.78444 8.15827 5.78444 7.84169 5.9797 7.64643L8.64636 4.97976C8.84163 4.7845 9.15821 4.7845 9.35347 4.97976Z"
                fill="#0075FF"
              />
            </svg>
          }
        >
          <BreadcrumbItem>محصولات</BreadcrumbItem>
          <BreadcrumbItem>لیست محصولات</BreadcrumbItem>
          <BreadcrumbItem>موتور چهار پمپ</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </header>
  );
};
