"use client"

import React, {useEffect, useState} from "react";
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
import {axiosCoreWithAuth} from "@/lib/axios";

export type WalletChartProps = {}

type ChartData = {
    name: string;
    price: number;
}

export const WalletChart = (props: WalletChartProps) => {

    const [data, setData] = useState<ChartData[]>([{name: "", price: 0}])

    const axios = axiosCoreWithAuth()
    const getChart = async () => {
        const data: ChartData[] = await axios.get(`store/wallet/chart`)
        setData(data)
    }
    useEffect(() => {
        getChart()
    }, []);

    return (
        <Card
            shadow="none"
            radius="md"
            className="w-full cursor-pointer shrink-0"
        >
            <CardBody className="flex flex-col gap-3 p-3">
                <AreaChartMode
                    data={data}
                />
                {/*Chart*/}
                {/*<LineChart*/}
                {/*    width={500}*/}
                {/*    height={300}*/}
                {/*    series={[*/}
                {/*        {*/}
                {/*            data: getPercents(a),*/}
                {/*            type: 'line',*/}
                {/*            label: 'a',*/}
                {/*            area: true,*/}
                {/*            stack: 'total',*/}
                {/*            showMark: false,*/}
                {/*        },*/}
                {/*        {*/}
                {/*            data: getPercents(b),*/}
                {/*            type: 'line',*/}
                {/*            label: 'b',*/}
                {/*            area: true,*/}
                {/*            stack: 'total',*/}
                {/*            showMark: false,*/}
                {/*        },*/}
                {/*        {*/}
                {/*            data: getPercents(c),*/}
                {/*            type: 'line',*/}
                {/*            label: 'c',*/}
                {/*            area: true,*/}
                {/*            stack: 'total',*/}
                {/*            showMark: false,*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*    xAxis={[*/}
                {/*        {*/}
                {/*            scaleType: 'time',*/}
                {/*            data: time,*/}
                {/*            min: time[0].getTime(),*/}
                {/*            max: time[time.length - 1].getTime(),*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*/>*/}
            </CardBody>
        </Card>
    );
};


const AreaChartMode = ({data, items}: { data: any[]; items?: any[] }) => {
    return (
        <div dir="ltr" className="w-full">
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    {/*<Brush dataKey="name" height={30} stroke="#8884d8"/>*/}
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip wrapperClassName="text-right text-sm"/>
                    {/* <Legend /> */}
                    {/*{items.map(({ key, name, fill, stroke }) => (*/}
                    {/*    <Area type="linear" key={key} dataKey={key} name={name} fill={fill} stroke={stroke} activeDot={{ r: 6 }} />*/}
                    {/*))}*/}
                    <Area dataKey="price" fill="#FF921F" stroke="#FF921F"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

