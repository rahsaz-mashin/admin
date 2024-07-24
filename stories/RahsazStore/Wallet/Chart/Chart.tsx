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

export type WalletChartProps = {}


export const WalletChart = (props: WalletChartProps) => {

    return (
        <Card
            shadow="none"
            radius="md"
            className="w-full cursor-pointer"
        >
            <CardBody className="flex flex-col gap-3 p-3">
                <AreaChartMode
                    data={[
                        {
                            name: 'فروردین 1403',
                            price: 25,
                        },
                        {
                            name: 'اردیبهشت 1403',
                            price: 40,
                        },
                        {
                            name: 'خرداد 1403',
                            price: 12,
                        },
                        {
                            name: 'تیر 1403',
                            price: 36,
                        },
                        {
                            name: 'مرداد 1403',
                            price: 39,
                        },
                        {
                            name: 'شهریور 1403',
                            price: 75,
                        },
                        {
                            name: 'مهر 1403',
                            price: 42,
                        },
                    ]}
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
                    <Area dataKey="price" fill="#FF921F" stroke="#FF921F" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

