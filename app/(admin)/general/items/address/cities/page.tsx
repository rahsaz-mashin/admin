"use client"

import {use} from "react";
import {FormListContext} from "@/stories/FormListContext";
import context, {T} from "./context";


export default function Page({params}: { params: Promise<{ id: string }> }) {

    const {id} = use(params)

    return (
        <FormListContext<T>
            editingId={id}
            {...context}
        />
    )
}