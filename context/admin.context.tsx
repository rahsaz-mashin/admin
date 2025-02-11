"use client";

import React, {createContext, ReactNode, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {useRouter} from "next-nprogress-bar";
import {
    AdminMenu,
    getCategoryByKey,
    getCategoryList,
    getMenuByKey,
    getSectionByKey,
    getSectionListByKey,
    getWorkspaceByKey,
    getWorkspaceList,
} from "@/data/admin";


// ====================================================================================================================> Context

export type AdminContextType = {
    isLoading: boolean;
    setLoading: (i: boolean) => void;

    isOpenDrawer: boolean;
    setOpenDrawer: (i: boolean) => void;

    activeWorkspace?: string;
    setActiveWorkspace: (ws: string) => void;

    activeSection?: string;
    setActiveSection: (s: string, ws?: string) => void;

    activeCategory?: string;
    activeMenu?: string;
    goToMenu: (m: string, c: string, s?: string, ws?: string) => void;

    workspacesList: () => AdminMenu[] | undefined;
    sectionsList: () => AdminMenu[] | undefined;
    categoriesList: () => AdminMenu[] | undefined;

    getCurrentWorkspace: () => AdminMenu | undefined;
    getCurrentSection: () => AdminMenu | undefined;
    getCurrentCategory: () => AdminMenu | undefined;
    getCurrentMenu: () => AdminMenu | undefined;

    breadCrumbs: () => { title?: string, url?: string }[] | undefined

    editItem: (id: string| number, route?: string) => void,
    backToList: (route?: string) => void,
}


const defaultContext = {
    isLoading: false,
    setLoading: () => {
    },

    isOpenDrawer: false,
    setOpenDrawer: () => {
    },

    activeWorkspace: undefined,
    setActiveWorkspace: () => {
    },

    activeSection: undefined,
    setActiveSection: () => {
    },

    activeCategory: undefined,
    activeMenu: undefined,
    goToMenu: () => {
    },


    workspacesList: () => [],
    sectionsList: () => [],
    categoriesList: () => [],

    getCurrentWorkspace: () => undefined,
    getCurrentSection: () => undefined,
    getCurrentCategory: () => undefined,
    getCurrentMenu: () => undefined,

    breadCrumbs: () => undefined,

    editItem: () => undefined,
    backToList: () => undefined,
}
export const AdminContext = createContext<AdminContextType>(defaultContext)


// ====================================================================================================================> Provider

type ProviderPropsType = {
    children: ReactNode;
    initial?: {
        isOpenDrawer: boolean;
    }
}
export const AdminProvider = ({children, initial}: ProviderPropsType) => {

    const pathname = usePathname()
    const router = useRouter();
    const m = pathname?.split("/")

    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500)
    }, [])

    let startAt = 0
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
        startAt = 1
    }

    const activeWorkspace = m[startAt + 1]
    const activeSection = m[startAt + 2]
    const activeCategory = m[startAt + 3]
    const activeMenu = m[startAt + 4]

    const setActiveWorkspace = (workspace: string) => {
        let r: string[] = []
        if (process.env.NEXT_PUBLIC_BASE_PATH) {
            const adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
            r = ["", adm, workspace];
        } else {
            r = ["", workspace];
        }
        router.push(r.join("/"));
    }

    const setActiveSection = (section: string, workspace: string = activeWorkspace) => {
        let r: string[] = []
        if (process.env.NEXT_PUBLIC_BASE_PATH) {
            const adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
            r = ["", adm, workspace, section];
        } else {
            r = ["", workspace, section];
        }
        router.push(r.join("/"));
        setOpenDrawer(false)
    }

    const goToMenu = (menu: string, category: string, section: string = activeSection, workspace: string = activeWorkspace) => {
        let r: string[] = []
        if (process.env.NEXT_PUBLIC_BASE_PATH) {
            const adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
            r = ["", adm, workspace, section, category, menu];
        } else {
            r = ["", workspace, section, category, menu];
        }
        router.push(r.join("/"));
    }

    const editItem = (id: string | number, route: string = activeMenu) => {
        let r: string[] = []
        if (process.env.NEXT_PUBLIC_BASE_PATH) {
            const adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
            r = ["", adm, activeWorkspace, activeSection, activeCategory, route, id.toString()];
        } else {
            r = ["", activeWorkspace, activeSection, activeCategory, route, id.toString()];
        }
        router.push(r.join("/"));
    }

    const backToList = (route: string = activeMenu) => {
        let r: string[] = []
        if (process.env.NEXT_PUBLIC_BASE_PATH) {
            const adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
            r = ["", adm, activeWorkspace, activeSection, activeCategory, route];
        } else {
            r = ["", activeWorkspace, activeSection, activeCategory, route];
        }
        router.push(r.join("/"));
    }


    // OK
    const breadCrumbs = () => {
        const workspace = getCurrentWorkspace()
        const section = getCurrentSection()
        const category = getCurrentCategory()
        const menu = getCurrentMenu()

        const result = []
        if (workspace?.key && section?.key) {
            let adm: string = ""
            if (process.env.NEXT_PUBLIC_BASE_PATH) {
                adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
            }

            result.push({title: section.title, url: `${adm ? ("/" + adm) : ""}/${workspace.key}/${section.key}`})
            if (category) {
                result.push({title: category.title, url: `${adm ? ("/" + adm) : ""}/${workspace.key}/${section.key}`})
                if (menu) {
                    result.push({title: menu.title})
                }
            }
        }
        return result
    }


    const getCurrentWorkspace = () => {
        return getWorkspaceByKey(activeWorkspace)
    }

    const getCurrentSection = () => {
        return getSectionByKey(activeWorkspace, activeSection)
    }

    const getCurrentCategory = () => {
        return getCategoryByKey(activeWorkspace, activeSection, activeCategory)
    }

    const getCurrentMenu = () => {
        return getMenuByKey(activeWorkspace, activeSection, activeCategory, activeMenu)
    }

    const workspacesList = () => {
        return getWorkspaceList()
    }

    const sectionsList = () => {
        return getSectionListByKey(activeWorkspace)
    }

    const categoriesList = () => {
        return getCategoryList(activeWorkspace, activeSection)
    }


    const value = {
        isLoading,
        setLoading,
        isOpenDrawer,
        setOpenDrawer,
        activeWorkspace,
        setActiveWorkspace,
        activeSection,
        setActiveSection,
        activeCategory,
        activeMenu,
        goToMenu,
        workspacesList,
        sectionsList,
        categoriesList,
        getCurrentWorkspace,
        getCurrentSection,
        getCurrentCategory,
        getCurrentMenu,

        breadCrumbs,
        editItem,
        backToList
    }

    return <>
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    </>
};
