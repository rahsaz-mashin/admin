import {useRouter} from "next/navigation";

export const useRouteManager = (workspace: string, section: string) => {
    const router = useRouter();
    return {
        push: (...path: string[]) => {
            if (!path) path = []
            return router.push(["", "admin", workspace, section, ...path].join("/"));
        }
    }
}

