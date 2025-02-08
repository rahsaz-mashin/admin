import {useRouter} from "next-nprogress-bar";

export const useRouteManager = (workspace: string, section: string) => {
    const router = useRouter();
    return {
        push: (...path: string[]) => {
            if (!path) path = []
            if (process.env.NEXT_PUBLIC_BASE_PATH) {
                const adm = process.env.NEXT_PUBLIC_BASE_PATH.toString().replace("/", "")
                return router.push(["", adm, workspace, section, ...path].join("/"));
            }
        }
    }
}

