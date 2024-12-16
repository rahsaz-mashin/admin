import React from "react";
import {
    Card,
    CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger
} from "@nextui-org/react";
import {DashboardIcon, MyWalletIcon, MyCartIcon, NotificationsIcon, LogoutIcon, UserIcon} from "@/stories/Icons";
import Link from "next/link";


export const ToolsButton = () => {


    return (
        <>
            <div className="hidden md:flex relative h-20 min-w-20 items-center justify-center overflow-hidden">
                <Dropdown>
                    <DropdownTrigger>
                        <Card
                            isPressable
                            shadow="none"
                            className="w-full h-full hover:text-primary transition-colors duration-500"
                            radius="lg"
                        >
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
                                startContent={<NotificationsIcon size={28}/>}
                                as={Link}
                                href="/dashboard/notifications"
                            >
                                پیغام ها
                            </DropdownItem>
                            <DropdownItem
                                key="my-wallet"
                                startContent={<MyWalletIcon size={28}/>}
                                as={Link}
                                href="/dashboard/wallet"
                            >
                                کیف پول من
                            </DropdownItem>
                            <DropdownItem
                                key="my-cart"
                                startContent={<MyCartIcon size={28}/>}
                                as={Link}
                                href="/cart"
                            >
                                سبد خرید من
                            </DropdownItem>
                        </DropdownSection>
                        <DropdownSection title="حساب کاربری">
                            <DropdownItem
                                key="my-profile"
                                startContent={<UserIcon size={28}/>}
                                as={Link}
                                href="/dashboard/profile"
                            >
                                پروفایل من
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                className="text-danger"
                                color="danger"
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
