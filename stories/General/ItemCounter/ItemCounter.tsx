import React from "react";
import {ChevronLeftIcon} from "@storybook/icons";

export type ItemCounterProps = {
    number?: number;
}


export const ItemCounter = ({number}: ItemCounterProps) => (
    <div className="flex items-center gap-1 text-default-400">
        {!!number && <span className="text-small">{number}</span>}
        <ChevronLeftIcon className="text-xl"/>
    </div>
);
