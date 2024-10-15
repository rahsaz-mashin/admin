import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import {CartNavigationIcon, CloseIcon, HomeNavigationIcon} from "@/stories/Icons";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {SearchIcon} from "@storybook/icons";
import {Input} from "@nextui-org/input";
import {AnimatePresence, motion} from "framer-motion";
import {ClickAwayListener} from "@mui/base";


export type BottomNavigationProps = {

}

export const BottomNavigation = (props: BottomNavigationProps) => {

    const {

    } = props

    const pathname = usePathname()
    const m = pathname.split("/")
    const [searchVisible, setSearchVisible] = useState(false)

    const handleCloseSearch = () => {
        setSearchVisible(false)
    }
    const handleOpenSearch = () => {
        setSearchVisible(true)
    }

    const handleToggleSearch = () => {
        if (searchVisible) handleCloseSearch()
        else handleOpenSearch()
    }

    return (

        <div
            className="w-full z-30 absolute -bottom-0.5 flex md:hidden justify-center items-end text-white bg-center h-20"
            style={{backgroundImage: `url(/static/assets/images/bottom-nav-bg.svg)`}}
        >
            <ClickAwayListener onClickAway={handleCloseSearch}>
                <div className="flex w-[360px] h-full relative mx-8 items-end justify-center">
                    <div className="flex w-full h-[70px] justify-between items-center">
                        <Button
                            variant="light"
                            color="primary"
                            size="lg"
                            radius="full"
                            isIconOnly
                            href="/"
                            as={Link}
                            onPress={handleCloseSearch}
                        >
                            <HomeNavigationIcon
                                size={32}
                                isActive={m[1] === ""}
                            />
                        </Button>
                        <Button
                            variant="shadow"
                            color="primary"
                            size="lg"
                            radius="full"
                            isIconOnly
                            className="w-16 h-16 bottom-4"
                            onPress={handleToggleSearch}
                        >
                            {!searchVisible && <SearchIcon size={30}/>}
                            {searchVisible && <CloseIcon size={30}/>}
                        </Button>
                        <Button
                            variant="light"
                            color="primary"
                            size="lg"
                            radius="full"
                            isIconOnly
                            href="/cart"
                            as={Link}
                            onPress={handleCloseSearch}
                        >
                            <CartNavigationIcon
                                size={32}
                                isActive={m[1] === "cart"}
                            />
                        </Button>
                    </div>
                    <AnimatePresence>
                        {searchVisible && (
                            <motion.div
                                initial={{scale: 0, bottom: 0}}
                                animate={{scale: 1, bottom: "80px"}}
                                exit={{scale: 0, bottom: 0}}
                                className="absolute z-20 h-full w-full p-1 flex justify-center items-center overflow-hidden text-black"
                            >
                                <Input
                                    type="search"
                                    placeholder="جستجو در راهساز ماشین..."
                                    size="lg"
                                    isClearable
                                    fullWidth
                                    autoFocus
                                    variant="faded"
                                    startContent={
                                        <i className="text-default-500 cursor-pointer">
                                            <SearchIcon size={24}/>
                                        </i>
                                    }
                                    classNames={{
                                        input: "placeholder:text-default-500 dark:placeholder:text-white/60",
                                        inputWrapper: "h-full"
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </ClickAwayListener>
        </div>
    );
};
