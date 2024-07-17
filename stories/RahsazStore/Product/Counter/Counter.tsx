import React from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {AddRounded, DeleteOutlined, RemoveRounded} from "@mui/icons-material";


export type ProductCounterProps = {}


export const ProductCounter = (
    {}
        :
        ProductCounterProps
) => {


    return (
       <div className="flex gap-1 items-center">
           <Button
               color="primary"
               variant="light"
               isIconOnly
           >
               <AddRounded/>
           </Button>
           <Input
                color="primary"
                variant="faded"
                className="w-10"
                classNames={{input: "text-center font-bold text-lg", inputWrapper: "px-0"}}
                value="5"
           />
           <Button
               color="primary"
               variant="light"
               isIconOnly
           >
               <RemoveRounded/>
           </Button>
           <Button
               color="default"
               variant="flat"
               isIconOnly
           >
               <DeleteOutlined/>
           </Button>
       </div>
    );
};
