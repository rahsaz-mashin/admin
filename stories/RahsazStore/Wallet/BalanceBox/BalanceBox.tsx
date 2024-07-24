"use client"

import React from "react";
import {Card, CardBody} from "@nextui-org/card";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    LineChart,
    Tooltip,
    ResponsiveContainer,
    Line,
    Brush,
    BarChart,
    Legend,
    Bar,
    Sector,
    PieChart,
    Pie,
    Cell
} from "recharts";
import {Button, useDisclosure} from "@nextui-org/react";
import {WalletIncreaseTypeModal} from "@/stories/RahsazStore/Wallet/IncreaseTypeModal";

export type WalletBalanceBoxProps = {}


export const WalletBalanceBox = (props: WalletBalanceBoxProps) => {
    const increaseTypeModal = useDisclosure();
    return (
        <Card
            shadow="none"
            radius="md"
            className="w-full"
        >
            <CardBody className="flex flex-col text-center justify-center gap-2 p-4">
                <span className="font-light">
                    موجودی کیف پول شما
                </span>
                <h6 className="font-bold text-primary text-lg">
                    <span>18,400,000</span>
                    {" "}
                    <span className="text-sm">تومان</span>
                </h6>
                <Button
                    size="lg"
                    variant="shadow"
                    color="primary"
                    onPress={() => increaseTypeModal.onOpen()}
                >
                    شارژ کیف پول
                </Button>
                <WalletIncreaseTypeModal state={increaseTypeModal}/>
            </CardBody>
        </Card>
    );
};


