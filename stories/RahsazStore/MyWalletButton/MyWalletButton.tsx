import React, {useContext} from "react";
import {Card, CardBody} from "@nextui-org/react";
import {MyWalletIcon} from "@/stories/Icons";
import Link from "next/link";
import {WalletContext} from "@/context/wallet.context";
import {NumericFormat} from "react-number-format";
import {Session} from "next-auth";
import {usePathname} from "next/navigation";


export type MyWalletButtonProps = {
    session: Session | null;
}


export const MyWalletButton = (props: MyWalletButtonProps) => {

    const {
        session,
    } = props

    const walletContext = useContext(WalletContext)

    const pathname = usePathname()

    return (
        <>
            <div
                className={
                    [
                        "relative h-20 min-w-20 items-center justify-center hidden xl:flex transition-width duration-500 group",
                        "after:absolute after:h-0 data-[active=true]:after:h-[30px] after:bottom-[-16px] after:end-[-30px] after:w-[30px] after:bg-store-header-end",
                        "before:absolute before:h-0 data-[active=true]:before:h-[30px] before:bottom-[-16px] before:start-[-30px] before:w-[30px] before:bg-store-header-start",
                    ].join(" ")
                }
                data-active={pathname === "/dashboard/wallet"}
            >
                <div className="bg-white w-full h-0 group-data-[active=true]:h-[30px] absolute bottom-[-16px]"/>
                <Card
                    shadow="none"
                    className="w-full h-full hover:text-primary transition-colors duration-500 group-data-[active=true]:rounded-b-none"
                    radius="lg"
                    as={Link}
                    href="/dashboard/wallet"
                >
                    <CardBody className="flex flex-row gap-4 px-4 items-center justify-center overflow-y-hidden">
                        <MyWalletIcon size={36}/>
                        <div className="xl:flex flex-col items-start hidden">
                            <span className="font-bold flex items-center text-black gap-1">
                                <NumericFormat
                                    value={walletContext.balance || 0}
                                    thousandSeparator=","
                                    decimalSeparator="."
                                    allowNegative={false}
                                    decimalScale={0}
                                    allowLeadingZeros={false}
                                    displayType="text"
                                />
                                {" "}
                                <div className="text-primary text-xs">تومانءء</div>
                            </span>
                            <h4 className="text-gray-500 text-xs">کیف پول من</h4>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
