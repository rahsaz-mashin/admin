import React from "react";
import {
    Card,
    CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger
} from "@nextui-org/react";
import {DashboardIcon, MyWalletIcon, MyCartIcon, NotificationsIcon, LogoutIcon, UserIcon} from "@/stories/Icons";


export const ToolsButton = () => {

    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];

    return (
        <>
            <div className="hidden md:flex relative h-20 min-w-20 items-center justify-center overflow-hidden">
                <Dropdown>
                    <DropdownTrigger>
                        <Card isPressable shadow="none"
                              className="w-full h-full hover:text-primary transition-colors duration-500" radius="lg">
                            <CardBody className="flex flex-row gap-2 items-center justify-center overflow-y-hidden">
                                <DashboardIcon size={36}/>
                            </CardBody>
                        </Card>
                    </DropdownTrigger>
                    <DropdownMenu
                        color="primary"
                        variant="shadow"
                        aria-label="Dropdown menu with description"
                    >
                        <DropdownSection title="ابزارها" showDivider>
                            <DropdownItem
                                key="my-notifications"
                                // description="آخرین پیغام های من"
                                startContent={<NotificationsIcon size={28}/>}
                            >
                                پیغام ها
                            </DropdownItem>
                            <DropdownItem
                                key="my-wallet"
                                // description={
                                //     <span className="flex items-center">
                                //         2,000,000{" "}<div className="text-primary text-xs">تومانءء</div>
                                //     </span>
                                // }
                                startContent={<MyWalletIcon size={28}/>}
                            >
                                کیف پول من
                            </DropdownItem>
                            <DropdownItem
                                key="my-cart"
                                // description={
                                //     <span className="flex items-center">
                                //         800,000{" "}<div className="text-primary text-xs">تومانءء</div>
                                //     </span>
                                // }
                                startContent={<MyCartIcon size={28}/>}
                            >
                                سبد خرید من
                            </DropdownItem>
                        </DropdownSection>
                        <DropdownSection title="حساب کاربری">
                            <DropdownItem
                                key="my-cart"
                                // description={
                                //     <span className="flex items-center">
                                //         800,000{" "}<div className="text-primary text-xs">تومانءء</div>
                                //     </span>
                                // }
                                startContent={<UserIcon size={28}/>}
                            >
                                پروفایل من
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
                                // description="از حساب کاربری خود خارج شوید!"
                                startContent={<LogoutIcon size={28}/>}
                            >
                                خروج از حساب
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    );
};
