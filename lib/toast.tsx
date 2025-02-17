import * as ReactDOMClient from "react-dom/client";
import {SnackbarMessage, SnackbarProvider, useSnackbar} from "notistack";

const isBrowser = typeof window !== "undefined";

let root: ReactDOMClient.Root;
if (isBrowser) {
    const mountPoint = window.document.createElement("div");
    root = ReactDOMClient.createRoot(mountPoint);
    window.document.body.appendChild(mountPoint);
}


type ShowSnackbarPropsType = {
    message: SnackbarMessage;
    variant: "default" | "error" | "success" | "warning" | "info"
}

const ShowSnackbar = ({message, variant}: ShowSnackbarPropsType) => {
    const {enqueueSnackbar} = useSnackbar();
    if (!message) return null
    enqueueSnackbar(message, {variant})
    return null
};

export const toast = (msg: SnackbarMessage, variant: "default" | "error" | "success" | "warning" | "info" = "default") => {
    if (root) {
        const provider = (
            <SnackbarProvider maxSnack={5} className="z-[999]" anchorOrigin={{horizontal: "center", vertical: "top"}}>
                <ShowSnackbar message={msg} variant={variant}/>
            </SnackbarProvider>
        );
        if (!!msg) root.render(provider);
    }
};

toast.success = (msg: SnackbarMessage) => {
    toast(msg, "success");
};
toast.warning = (msg: SnackbarMessage) => {
    toast(msg, "warning");
};
toast.info = (msg: SnackbarMessage) => {
    toast(msg, "info");
};
toast.error = (msg: SnackbarMessage) => {
    toast(msg, "error");
};
