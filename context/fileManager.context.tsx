"use client";

import React, {ReactNode, useState, createContext} from "react";
import {FileManager} from "@/stories/General/FileManager";
import * as ReactDOMClient from "react-dom/client";


type UDFile = {
    width: number;
    height: number;
}


// ====================================================================================================================> Context

export type FileManagerContextType = {
    uploads: UDFile[];
    downloads: UDFile[];
}

const defaultContext: FileManagerContextType = {
    uploads: [],
    downloads: [],
}

export const FileManagerContext = createContext<FileManagerContextType>(defaultContext)


// ====================================================================================================================> Provider

type ProviderPropsType = {
    children: ReactNode;
    initial?: FileManagerContextType;
}
export const FileManagerProvider = ({children, initial}: ProviderPropsType) => {
    const [uploads, setUploads] = useState<UDFile[]>(initial?.uploads || []);
    const [downloads, setDownloads] = useState<UDFile[]>(initial?.downloads || []);

    const value = {
        uploads,
        downloads,
    }

    return (
        <FileManagerContext.Provider value={value}>
            <FileManager/>
            {children}
        </FileManagerContext.Provider>
    )
};
