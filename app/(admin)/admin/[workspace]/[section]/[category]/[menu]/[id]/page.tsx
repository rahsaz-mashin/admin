"use client"

import {RahsazAdminContext} from "@/components/RahsazAdminContext";

export default function Page(props: PropsType) {
    return <RahsazAdminContext {...props.params}/>
}


type PropsType = {
    params: {
        workspace: string;
        section: string;
        category: string;
        menu: string;
        id?: string;
    }
}