"use client"

import React, {useEffect, useState} from "react";
import {
    Dropdown,
    DropdownMenu,
    DropdownTrigger,
    DropdownItem,
    ScrollShadow,
    Card,
    CardBody,
    Button,
    PopoverContent,
    Popover,
    PopoverTrigger,
} from "@nextui-org/react";
import {AnimatePresence, motion, useMotionValue} from "framer-motion";


// @ts-ignore
const MotionCardBody = motion(CardBody);


export type CallWidgetProps = {
    className?: string;
}


export const CallWidget = ({className = ""}: CallWidgetProps) => {
    const [status, setStatus] = useState<"default" | "menu" | "calling">(
        "default"
    );
    const [callingTo, setCallingTo] = useState<null | string>(null);

    useEffect(() => {
        if (status === "menu" || status === "calling") {
            if (callingTo) setStatus("calling");
            else setStatus("menu");
        }
    }, [callingTo]);

    const [callLines, setCallLines] = useState([
        {
            id: "sale",
            label: "فروش",
        },
        {
            id: "warehouse",
            label: "انبار",
        },
        {
            id: "support",
            label: "پشتیبانی",
        },
        {
            id: "finance",
            label: "مالی",
        },
        {
            id: "management",
            label: "مدیریت",
        },
    ]);

    const onCall = callLines.find(({id}) => id === callingTo);

    const [callDuration, setCallDuration] = useState(0);
    return (
        <>
            <div className={className + " relative w-full max-w-96 items-center justify-center h-20 flex"}>
                <Card shadow="none" className="mr-6 w-full h-full" radius="lg">
                    <AnimatePresence>
                        {status === "default" && (
                            <MotionCardBody
                                initial={{scaleY: 0}}
                                animate={{scaleY: 1}}
                                exit={{scaleY: 0}}
                                transition={{type: "spring"}}
                                className="text-center relative overflow-hidden p-0 pr-6 cursor-pointer items-center flex flex-row select-none"
                            >
                                <div className="flex flex-col flex-[1_1_0] truncate text-sm px-1.5">
                                    <a
                                        href="tel:+9851 3344 5566"
                                        className="hover:text-primary transition"
                                    >
                                        <b>05133445566</b>
                                    </a>
                                    <span className="hover:text-primary transition">
                    ساعت کار:                 <b>8</b> الی <b>18</b>
                                    </span>
                                    <a
                                        href="https://maps.app.goo.gl/RwzjMTQQn2Vdnfkk9"
                                        className="hover:text-primary transition overflow-y-hidden hide-scrollbar"
                                    >
                                         مشهد - کوشش 27 - خبیری 15 - پلاک 117
                                    </a>
                                </div>
                                <div className="flex flex-col p-3 min-w-8 justify-between">
                                    <a href="https://t.me/">
                                        <svg
                                            className="w-5 h-5 transition text-black hover:text-telegram hover:scale-110 active:scale-90"
                                            viewBox="0 0 18 18"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.34059 10.5147C4.37342 10.5258 4.40656 10.5336 4.43966 10.5384C4.47576 10.6233 4.52241 10.733 4.57683 10.8614C4.70963 11.1746 4.88858 11.5982 5.07328 12.0401C5.44997 12.9414 5.82993 13.8705 5.91384 14.1364C6.01773 14.4651 6.12753 14.6886 6.24741 14.8412C6.30939 14.9201 6.38108 14.989 6.46496 15.0412C6.50719 15.0674 6.55179 15.089 6.59835 15.105C6.6004 15.1057 6.60245 15.1064 6.6045 15.1071C6.84451 15.1977 7.06333 15.16 7.20033 15.1138C7.27364 15.0891 7.33295 15.0593 7.37499 15.0351C7.39642 15.0228 7.41453 15.0113 7.42897 15.0016L7.43238 14.9993L9.55205 13.6774L12.0004 15.5545C12.0366 15.5823 12.076 15.6055 12.1177 15.6237C12.4118 15.7521 12.6967 15.7968 12.9646 15.7602C13.2321 15.7237 13.4445 15.6113 13.6025 15.4848C13.7574 15.361 13.8623 15.2223 13.9277 15.1192C13.961 15.0665 13.9861 15.02 14.0038 14.9843C14.0127 14.9664 14.0198 14.951 14.0253 14.9386L14.0324 14.9222L14.035 14.9158L14.0362 14.913L14.0367 14.9118L14.0371 14.9106C14.05 14.8784 14.0599 14.8452 14.0666 14.8112L16.3018 3.54205C16.3089 3.50601 16.3125 3.46936 16.3125 3.43262C16.3125 3.10261 16.1882 2.78881 15.8958 2.59839C15.6459 2.43564 15.3675 2.42863 15.1916 2.44199C15.0018 2.45639 14.8265 2.50324 14.7089 2.54068C14.6477 2.56016 14.5964 2.57896 14.5594 2.5933C14.5408 2.60051 14.5255 2.60669 14.5142 2.61141L14.5057 2.615L1.97038 7.53241L1.96876 7.53299C1.96077 7.5359 1.95051 7.53972 1.93832 7.54447C1.91405 7.55392 1.88153 7.56724 1.84354 7.58445C1.76945 7.61803 1.66551 7.67051 1.55886 7.74355C1.38847 7.86023 0.996599 8.17981 1.06259 8.70728C1.11523 9.12809 1.40351 9.38653 1.57915 9.5108C1.6756 9.57904 1.76722 9.62785 1.83395 9.65961C1.86491 9.67435 1.92918 9.70046 1.95707 9.71179L1.9641 9.71465L4.34059 10.5147ZM14.9444 3.6509L14.9426 3.65166C14.9364 3.65437 14.9301 3.65697 14.9237 3.65946L2.37324 8.58284C2.36669 8.58541 2.36009 8.58785 2.35344 8.59018L2.34645 8.59283C2.33843 8.59595 2.32491 8.60144 2.30794 8.60913C2.29832 8.61349 2.28828 8.61825 2.27804 8.62335C2.29211 8.63127 2.30557 8.63815 2.31753 8.64385C2.32901 8.64931 2.33777 8.65305 2.34256 8.65502L4.69953 9.44851C4.74267 9.46304 4.78289 9.48228 4.81981 9.50548L12.6024 4.94961L12.6097 4.9453C12.6154 4.94195 12.6228 4.93765 12.6317 4.9326C12.6494 4.92259 12.6738 4.90926 12.7027 4.89453C12.7567 4.86704 12.8431 4.82623 12.9405 4.79614C13.0083 4.77519 13.2081 4.71617 13.4242 4.78548C13.5576 4.82825 13.6956 4.92021 13.7854 5.07599C13.83 5.15338 13.8538 5.23112 13.8653 5.30229C13.8959 5.4144 13.8911 5.5251 13.8671 5.62068C13.8156 5.82656 13.6709 5.98715 13.5393 6.10999C13.4265 6.2153 11.9675 7.62219 10.5281 9.01101C9.81035 9.7036 9.09988 10.3893 8.56885 10.902L8.22006 11.2387L12.624 14.615C12.725 14.6512 12.7847 14.6493 12.8124 14.6456C12.8453 14.6411 12.8722 14.6284 12.8997 14.6064C12.9305 14.5818 12.9574 14.5485 12.9775 14.5168L12.9783 14.5155L15.1462 3.58576C15.114 3.5935 15.0815 3.6027 15.0501 3.61268C15.0146 3.62399 14.9853 3.63475 14.9659 3.64228C14.9563 3.646 14.9494 3.64883 14.9456 3.65039L14.9444 3.6509ZM8.59841 12.9463L7.7198 12.2727L7.5069 13.627L8.59841 12.9463ZM6.91378 10.9361L7.78752 10.0926C8.31858 9.57991 9.02911 8.89409 9.74698 8.20143L10.4764 7.49775L5.58633 10.3603L5.61257 10.4222C5.74585 10.7365 5.92559 11.162 6.11128 11.6063C6.25012 11.9385 6.39531 12.2883 6.52756 12.6122L6.73983 11.2619C6.7603 11.1317 6.8239 11.019 6.91378 10.9361Z"
                                            />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com/">
                                        <svg
                                            className="w-5 h-5 transition text-black hover:text-instagram hover:scale-110 active:scale-90"
                                            viewBox="0 0 18 18"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 5.25003C12 4.83582 12.3358 4.50003 12.75 4.50003C13.1642 4.50003 13.5 4.83582 13.5 5.25003C13.5 5.66425 13.1642 6.00003 12.75 6.00003C12.3358 6.00003 12 5.66425 12 5.25003Z"/>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.00002 5.43753C7.0325 5.43753 5.43752 7.03252 5.43752 9.00003C5.43752 10.9675 7.0325 12.5625 9.00002 12.5625C10.9675 12.5625 12.5625 10.9675 12.5625 9.00003C12.5625 7.03252 10.9675 5.43753 9.00002 5.43753ZM6.56252 9.00003C6.56252 7.65384 7.65382 6.56253 9.00002 6.56253C10.3462 6.56253 11.4375 7.65384 11.4375 9.00003C11.4375 10.3462 10.3462 11.4375 9.00002 11.4375C7.65382 11.4375 6.56252 10.3462 6.56252 9.00003Z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.9437 2.1248C10.3438 1.83422 7.65627 1.83422 5.05634 2.1248C3.5473 2.29345 2.32905 3.48221 2.15163 4.99911C1.84073 7.65733 1.84073 10.3427 2.15163 13.001C2.32905 14.5179 3.5473 15.7066 5.05634 15.8753C7.65627 16.1659 10.3438 16.1659 12.9437 15.8753C14.4527 15.7066 15.671 14.5179 15.8484 13.001C16.1593 10.3427 16.1593 7.65733 15.8484 4.99911C15.671 3.48221 14.4527 2.29345 12.9437 2.1248ZM5.1813 3.24283C7.69818 2.96154 10.3019 2.96154 12.8188 3.24283C13.8163 3.35433 14.6154 4.14154 14.731 5.1298C15.0318 7.70119 15.0318 10.2989 14.731 12.8703C14.6154 13.8585 13.8163 14.6457 12.8187 14.7572C10.3019 15.0385 7.69819 15.0385 5.1813 14.7572C4.18372 14.6457 3.3846 13.8585 3.26902 12.8703C2.96827 10.2989 2.96827 7.70119 3.26902 5.1298C3.3846 4.14154 4.18372 3.35433 5.1813 3.24283Z"
                                            />
                                        </svg>
                                    </a>
                                    <a href="https://whatsapp.com/">
                                        <svg
                                            className="w-5 h-5 transition text-black hover:text-whatsapp hover:scale-110 active:scale-90"
                                            viewBox="0 0 18 18"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.66437 5.37739C6.80159 5.38107 6.95372 5.38848 7.09846 5.70977C7.19444 5.92366 7.35613 6.31741 7.48783 6.63816C7.59032 6.88775 7.67466 7.09313 7.69576 7.13517C7.74399 7.23117 7.77368 7.34194 7.71061 7.47117C7.70317 7.48641 7.69615 7.50099 7.68938 7.51502C7.63879 7.62002 7.60279 7.69474 7.51771 7.79245C7.48272 7.83261 7.44628 7.87664 7.40997 7.92052C7.34612 7.99768 7.28267 8.07435 7.22829 8.12851C7.13184 8.22445 7.03163 8.32793 7.14293 8.51993C7.25428 8.71193 7.64384 9.3434 8.21891 9.85301C8.83716 10.4034 9.37477 10.6354 9.64653 10.7526C9.69929 10.7754 9.74203 10.7938 9.77339 10.8094C9.96636 10.9054 10.0813 10.8907 10.1926 10.7614C10.304 10.6322 10.675 10.2001 10.8049 10.0081C10.931 9.81611 11.0608 9.84565 11.2389 9.9121C11.417 9.97855 12.3668 10.4438 12.5597 10.5398C12.5978 10.5588 12.6335 10.5759 12.6666 10.5918C12.8008 10.6562 12.892 10.6999 12.9307 10.7651C12.9789 10.8464 12.9789 11.2304 12.8194 11.6809C12.6562 12.1314 11.8696 12.5635 11.5135 12.5967C11.4797 12.5999 11.4462 12.604 11.4116 12.6081C11.0852 12.6476 10.6709 12.6977 9.19463 12.1167C7.37559 11.4013 6.17483 9.62655 5.93206 9.26773C5.91289 9.2394 5.8997 9.2199 5.89264 9.21044L5.88853 9.20494C5.77808 9.05715 5.10237 8.153 5.10237 7.22014C5.10237 6.32762 5.54204 5.86295 5.74258 5.651C5.75529 5.63757 5.76704 5.62515 5.77765 5.61371C5.95571 5.42171 6.16352 5.37371 6.29335 5.37371C6.42324 5.37371 6.55308 5.37371 6.66437 5.37739Z"/>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1.63804 15.9986C1.57668 16.2213 1.77955 16.4269 2.00308 16.3685L5.45859 15.4659C6.54936 16.0568 7.77741 16.3706 9.02776 16.3706H9.03145C13.1459 16.3706 16.4999 13.0361 16.4999 8.93719C16.4999 6.95051 15.7244 5.08195 14.3146 3.67868C12.9048 2.27547 11.0312 1.5 9.03139 1.5C4.91696 1.5 1.56299 4.83454 1.56299 8.93352C1.56252 10.2375 1.90671 11.5187 2.561 12.6484L1.63804 15.9986ZM3.6456 12.9472C3.72571 12.6564 3.68569 12.3456 3.53451 12.0845C2.9794 11.1261 2.68759 10.0391 2.68799 8.93352C2.68799 5.46119 5.53294 2.625 9.03139 2.625C10.7338 2.625 12.3221 3.28274 13.521 4.47604C14.7185 5.66802 15.3749 7.24958 15.3749 8.93719C15.3749 12.4094 12.53 15.2456 9.03145 15.2456H9.02776C7.96537 15.2456 6.92138 14.9789 5.99441 14.4767C5.74351 14.3408 5.45035 14.3054 5.17428 14.3775L3.10248 14.9186L3.6456 12.9472Z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </MotionCardBody>
                        )}
                    </AnimatePresence>
                    {(status === "menu" || status === "calling") && (
                        <MotionCardBody
                            initial={{scaleY: 0}}
                            animate={{scaleY: 1}}
                            exit={{scaleY: 0}}
                            transition={{type: "spring"}}
                            className="text-center relative overflow-hidden p-0 pr-6 h-20 cursor-pointer items-center flex flex-row select-none"
                        >
                            <div className="flex flex-col w-full gap-2 text-sm flex-1 px-1.5">
                                {/* ========== menu ========== */}
                                {status === "menu" && (
                                    <motion.b
                                        initial={{scaleY: 0}}
                                        animate={{scaleY: 1}}
                                        exit={{scaleY: 0}}
                                        transition={{type: "spring"}}
                                    >
                                        تماس رایگان با{" "}
                                        <span className="text-primary">راهساز ماشین</span>
                                    </motion.b>
                                )}
                                {status === "menu" && (
                                    <motion.div
                                        initial={{scaleX: 0}}
                                        animate={{scaleX: 1}}
                                        exit={{scaleX: 0}}
                                        transition={{type: "spring"}}
                                        className="flex gap-2 overflow-y-hidden hide-scrollbar"
                                    >
                                        {callLines.map(({id, label}) => (
                                            <Button
                                                key={id}
                                                onClick={() => setCallingTo(id)}
                                                color="primary"
                                                radius="full"
                                                size="sm"
                                            >
                                                {label}
                                            </Button>
                                        ))}
                                    </motion.div>
                                )}
                                {/* ========== calling ========== */}
                                {status === "calling" && (
                                    <motion.b
                                        // className="me-24"
                                        initial={{scaleY: 0}}
                                        animate={{scaleY: 1}}
                                        exit={{scaleY: 0}}
                                        transition={{type: "spring"}}
                                    >
                                        در حال تماس با{" "}
                                        <span className="text-primary">{onCall?.label}</span>
                                    </motion.b>
                                )}
                                {status === "calling" && (
                                    <motion.b
                                        // className="me-24"
                                        initial={{scaleX: 0}}
                                        animate={{scaleX: 1}}
                                        exit={{scaleX: 0}}
                                        transition={{type: "spring"}}
                                    >
                                        00:00:00
                                    </motion.b>
                                )}
                            </div>
                            <AnimatePresence>
                                {status === "calling" && (
                                    <motion.div
                                        // whileTap={{width: 96}}
                                        onClick={() => setCallingTo(null)}
                                        className="bg-red-600 text-white text-sm end-0 hover:shadow hover:bg-red-200 hover:text-red-600 transition-colors duration-700 h-full flex justify-center items-center overflow-hidden whitespace-nowrap"
                                        initial={{width: 0}}
                                        animate={{width: 96}}
                                        // exit={{width: 0}}
                                        transition={{ease: "anticipate", duration: 1}}
                                    >
                                        {/*{i18n.t("callWidget.endCall")}*/}
                                        پایان مکالمه
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </MotionCardBody>
                    )}
                </Card>
                {/* =========== icons =========== */}
                {status === "default" && (
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        onClick={() => setStatus("menu")}
                        className="bg-white cursor-pointer start-0 absolute w-12 h-12 p-1 border-3 flex items-center justify-center border-primary rounded-full text-primary"
                    >
                        <motion.svg
                            animate={{rotate: [-20, 0, 20, 0, -20]}}
                            transition={{repeat: Infinity, duration: 3}}
                            viewBox="0 0 30 30"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.2503 12.3256C8.6458 17.543 12.9083 21.6911 18.2077 23.9399L19.0572 24.3183C21.0007 25.1843 23.2854 24.5264 24.4709 22.7595L25.581 21.1049C25.9419 20.5669 25.832 19.8423 25.3278 19.4356L21.563 16.3983C21.01 15.9522 20.1969 16.0561 19.7738 16.627L18.6092 18.1985C15.6207 16.7244 13.1944 14.2981 11.7202 11.3095L13.2917 10.1449C13.8626 9.72186 13.9665 8.90872 13.5204 8.35574L10.483 4.59081C10.0763 4.08671 9.35196 3.97675 8.81401 4.33746L7.14796 5.45458C5.37002 6.64672 4.7158 8.95028 5.60171 10.899L6.24932 12.3235L6.2503 12.3256Z"/>
                        </motion.svg>
                    </motion.div>
                )}
                {status === "menu" && (
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        onClick={() => setStatus("default")}
                        className="bg-white cursor-pointer start-0 absolute w-12 h-12 p-1 border-3 flex items-center justify-center border-danger rounded-full text-danger"
                    >
                        <motion.svg
                            viewBox="0 0 30 30"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.19242 20.076C3.07225 20.3133 3.11547 20.6007 3.30012 20.7922C3.48477 20.9837 3.7704 21.0373 4.01192 20.9258L7.1361 19.4839C9.76185 18.272 12.6273 17.7176 15.4878 17.848C15.5217 18.7666 15.5722 19.6847 15.639 20.6019L15.7246 21.7757C15.7765 22.4877 16.5704 22.8858 17.1721 22.5013C19.7833 20.8328 22.0534 18.6829 23.8613 16.1661L24.4365 15.3653C24.593 15.1475 24.593 14.854 24.4365 14.6361L23.8613 13.8353C22.0534 11.3185 19.7833 9.16861 17.1721 7.50008C16.5704 7.11566 15.7765 7.51371 15.7246 8.22577L15.639 9.39947C15.5816 10.1868 15.5363 10.9748 15.5032 11.7631H14.6993C10.2231 11.7631 6.1272 14.2802 4.10508 18.2736L3.19242 20.076Z"/>
                        </motion.svg>
                    </motion.div>
                )}
                {status === "calling" && (
                    <motion.div
                        animate={{boxShadow: ["0 0 0px", "0 0 25px", "0 0 0px"]}}
                        transition={{repeat: Infinity, duration: 1.2}}
                        className="bg-white cursor-pointer start-0 absolute w-12 h-12 p-1 border-3 flex items-center justify-center border-success rounded-full text-success shadow-success-100"
                    >
                        <motion.svg
                            viewBox="0 0 30 30"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.35683 10.4297C3.89139 10.8229 2.8125 12.1605 2.8125 13.75V17.5C2.8125 19.3985 4.35152 20.9375 6.25 20.9375H9.375C9.89277 20.9375 10.3125 20.5178 10.3125 20V11.25C10.3125 10.7322 9.89277 10.3125 9.375 10.3125H7.26853C7.80499 7.22503 10.9483 4.6875 15 4.6875C19.0517 4.6875 22.195 7.22503 22.7315 10.3125H20.625C20.1072 10.3125 19.6875 10.7322 19.6875 11.25V20C19.6875 20.5178 20.1072 20.9375 20.625 20.9375H22.7038C22.2805 22.7292 20.671 24.0625 18.75 24.0625H17.3183C16.9474 23.1463 16.0492 22.5 15 22.5C13.6193 22.5 12.5 23.6193 12.5 25C12.5 26.3807 13.6193 27.5 15 27.5C16.0492 27.5 16.9474 26.8537 17.3183 25.9375H18.75C21.7497 25.9375 24.2299 23.713 24.6308 20.8236C26.1025 20.4346 27.1875 19.094 27.1875 17.5V13.75C27.1875 12.1605 26.1086 10.8229 24.6432 10.4297C24.1663 6.04949 19.9078 2.8125 15 2.8125C10.0922 2.8125 5.83366 6.04949 5.35683 10.4297Z"/>
                        </motion.svg>
                    </motion.div>
                )}
            </div>
        </>
    );
};
