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
        setTimeout(() => setLoading(false), 2500)
    }, [])

    const activeWorkspace = m[2]
    const activeSection = m[3]
    const activeCategory = m[4]
    const activeMenu = m[5]

    const setActiveWorkspace = (workspace: string) => {
        router.push(["", "admin", workspace].join("/"));
    }

    const setActiveSection = (section: string, workspace: string = activeWorkspace) => {
        router.push(["", "admin", workspace, section].join("/"));
        setOpenDrawer(false)
    }

    const goToMenu = (menu: string, category: string, section: string = activeSection, workspace: string = activeWorkspace) => {
        router.push(["", "admin", workspace, section, category, menu].join("/"));
    }

    const editItem = (id: string | number, route: string = activeMenu) => {
        const a = [
            "", "admin", activeWorkspace, activeSection, activeCategory, route, id
        ]
        router.push(a.join("/"));
    }

    const backToList = (route: string = activeMenu) => {
        const a = [
            "", "admin", activeWorkspace, activeSection, activeCategory, route
        ]
        router.push(a.join("/"));
    }


    // OK
    const breadCrumbs = () => {
        const workspace = getCurrentWorkspace()
        const section = getCurrentSection()
        const category = getCurrentCategory()
        const menu = getCurrentMenu()

        const result = []
        if (section) {
            result.push({title: section.title, url: `/admin/${workspace?.key}/${section?.key}`,})
            if (category) {
                result.push({title: category.title, url: `/admin/${workspace?.key}/${section?.key}`,})
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
