import React, {ReactNode, useCallback, useEffect, useState} from "react";
import {Control, useController, useWatch} from "react-hook-form";
import {Accept, DropEvent, FileRejection, useDropzone} from "react-dropzone";
import {toast} from "@/lib/toast";
import {FileStorage} from "@/interfaces/FileStorage.interface";
import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ScrollShadow,
    useDisclosure
} from "@nextui-org/react";
import {axiosCoreWithAuth} from "@/lib/axios";
import NextImage from "next/image";
import {
    MimetypeAudioIcon, MimetypeExcelIcon, MimetypeImageIcon,
    MimetypeOtherIcon, MimetypePdfIcon, MimetypePresentationIcon, MimetypeVideoIcon,
    MimetypeWordIcon,
    MimetypeZipIcon
} from "@/stories/General/MinorUploader/Icons";
import {formatBytes} from "@/lib/formatBytes";
import {DeleteOutlined, EditOutlined, FileDownloadOutlined, Visibility} from "@mui/icons-material";
import {Tooltip} from "@nextui-org/tooltip";
import {UseDisclosureReturn} from "@nextui-org/use-disclosure";
import {Spinner} from "@nextui-org/spinner";
import ReactPlayer from "react-player";


export type MinorUploaderProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;

    accept?: Accept;
    isMultiple?: boolean;
    minSize?: number;
    maxSize?: number;
    maxFiles?: number;

    withPreview?: boolean;
    isAvatar?: boolean;
}


export const MinorUploader = (props: MinorUploaderProps) => {
    const {
        name,
        control,

        label,

        isDisabled,
        isReadOnly,

        description,
        errorMessage,
        isInvalid,

        className = "",

        minSize,
        maxSize,
        maxFiles,


        isAvatar,
    } = props

    const isMultiple = isAvatar ? false : props.isMultiple
    const withPreview = props.withPreview || (!!isAvatar)
    const accept = isAvatar
        ?
        {
            'image/png': ['.png', '.PNG'],
            'image/jpg': ['.jpg', '.JPG', '.jpeg', '.JPEG'],
        }
        :
        props.accept


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control, defaultValue: []})


    const [oldValue, setOldValue] = useState<FileStorage[] | FileStorage>();

    const axios = axiosCoreWithAuth()
    const upload = async (file: File, title?: string, alt?: string) => {
        return new Promise(async (resolve, reject) => {
            const formData = new FormData();
            formData.append("files", file);
            if (title) formData.set('title', title)
            if (alt) formData.set('alt', alt)
            const result: FileStorage[] = await axios.postForm('fileStorage', formData)
            if (isMultiple) setOldValue((prev) => ([...(prev as FileStorage[] || []), ...result]))
            else setOldValue(result[0])
            resolve(true)
        })
    }

    useEffect(() => {
        if (isMultiple) {
            if (!!oldValue && !!(oldValue as FileStorage[])?.length) {
                field.onChange(oldValue)
            } else {
                field.onChange([])
            }
        } else {
            if (!!oldValue) {
                field.onChange(oldValue)
            } else {
                field.onChange(null)
            }
        }
    }, [JSON.stringify(oldValue)]);

    useEffect(() => {
        if (!oldValue && (isMultiple && !!field.value.length) || (!isMultiple && !!field.value)) setOldValue(field.value)
    }, [JSON.stringify(field.value)]);


    const onDrop = useCallback((acceptedFiles: File[]) => {

    }, [])


    const onError = useCallback((error: Error) => {
        toast.error("خطا رخ داده")
        toast.error(JSON.stringify(error))
    }, [])


    const onDropAccepted = useCallback(async (files: File[], event: DropEvent) => {
        for (let idx = 0; idx < files.length; idx++) {
            await upload(files[idx])
            if (idx === (files.length - 1)) toast.success("با موفقیت آپلود شد")
        }
    }, [])


    const onDropRejected = useCallback((fileRejections: FileRejection[], event: DropEvent) => {
        console.log({fileRejections})
        // setFilesList((prev) => ([...prev, ...fileRejections]))
        toast.error("آپلود نشد")
    }, [])


    const onFileDialogOpen = useCallback(() => {
        // toast.info("فایل منیجر باز شد")
    }, [])

    const onFileDialogCancel = useCallback(() => {
        // toast.info("فایل منیجر کنسل شد")
    }, [])


    const {
        getRootProps,
        getInputProps,
        isDragActive,
        open,
        acceptedFiles,
        fileRejections,
        isDragAccept,
        isDragReject,
        isFileDialogActive,
        isFocused,
    } = useDropzone({
        onDrop,
        onError,
        onDropAccepted,
        onDropRejected,
        onFileDialogOpen,
        onFileDialogCancel,

        disabled: isDisabled || isReadOnly,
        accept,
        minSize,
        maxSize,
        maxFiles,
        multiple: isMultiple,
    })

    const removeFile = (id: number) => {
        if (isMultiple) {
            const v: FileStorage[] = !!field.value && Array.isArray(field.value) ? field.value : [field.value]
            const idx = v.findIndex((file) => (file.id === id))
            if (idx >= 0) {
                v.splice(idx, 1)
                setOldValue([...v])
            }
        } else {
            setOldValue(undefined)
        }
        previewModal.onClose()
    }

    const previewModal = useDisclosure({defaultOpen: false});

    const [preview, setPreview] = useState<FileStorage>()

    const previewFile = (id: number) => {
        previewModal.onOpen()
        const v: FileStorage[] = !!field.value && Array.isArray(field.value) ? field.value : [field.value]
        setPreview(v.find((file) => (file.id === id)))
    }

    useEffect(() => {
        if (!previewModal.isOpen) setPreview(undefined)
    }, [previewModal.isOpen]);

    const downloadFile = async (id: number) => {
        const v: FileStorage[] = !!field.value && Array.isArray(field.value) ? field.value : [field.value]
        const file = v.find((file) => (file.id === id))
        if (file) {
            const response = await fetch(`${file.system.baseUrl}/${file.path}`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${file.path}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    }

    const hasHelper = !!description || isInvalid || fieldState.invalid
    const hasError = (!!errorMessage || !!fieldState.error?.message || !!fieldState.error?.root?.message)
    return (
        <>
            <div
                className={"relative h-full w-full data-[isavatar]:w-fit justify-self-center outline-none group flex flex-col gap-2 justify-center min-h-72 data-[isavatar]:min-h-0 " + className}
                {...getRootProps()}
                data-has-helper={hasHelper || undefined}
                data-invalid={hasError || undefined}
                data-dragged={isDragActive || undefined}
                data-drag-accept={isDragAccept || undefined}
                data-drag-reject={isDragReject || undefined}
                data-isactive={(!isDisabled && !isReadOnly) || undefined}
                data-filedialog-active={isFileDialogActive || undefined}
                data-with-preview={withPreview || undefined}
                data-have-file={(Array.isArray(field.value) ? !!field.value?.length : !!field.value) || undefined}
                data-isavatar={isAvatar || undefined}
            >
                <div
                    className="relative overflow-hidden group-data-[dragged]:z-[99999999] h-full p-4 group-data-[isavatar]:p-0 flex flex-col gap-8 justify-between items-center bg-white border-2 transition duration-500 group-data-[isactive]:cursor-pointer group-data-[isactive]:group-[&:not([data-filedialog-active])]:group-[&:not([data-dragged])]:group-hover:bg-primary-50 group-data-[isactive]:group-[&:not([data-filedialog-active])]:group-[&:not([data-dragged])]:group-hover:border-primary group-data-[invalid]:border-danger group-data-[invalid]:bg-danger-50 group-data-[drag-accept]:border-success group-data-[drag-accept]:bg-success-50 group-data-[drag-reject]:border-danger group-data-[drag-reject]:bg-danger-50 group-data-[filedialog-active]:group-[&:not([data-dragged])]:border-primary border-dashed border-gray-300 rounded-xl group-data-[isavatar]:rounded-full group-data-[isavatar]:aspect-square group-data-[isavatar]:min-w-28 group-data-[isavatar]:max-w-28 group-data-[isavatar]:min-h-28 group-data-[isavatar]:max-h-28"
                >
                    <div className="relative flex justify-center items-center flex-col w-full h-full">
                        <div
                            className="relative flex justify-center items-center flex-col w-full h-full group-data-[with-preview]:group-data-[have-file]:group-[&:not([data-isavatar])]:mb-20 "
                        >
                            <span
                                className="absolute flex flex-col gap-3 justify-center items-center scale-0 group-data-[filedialog-active]:group-[&:not([data-dragged])]:scale-100 transition duration-500 text-primary"
                            >
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        opacity="0.5"
                                        d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                                    />
                                    <path
                                        d="M20 6.23751C19.9992 5.94016 19.9949 5.76263 19.9746 5.60842C19.7974 4.26222 18.7381 3.2029 17.3919 3.02567C17.1969 3 16.9647 3 16.5003 3H9.98828C10.1042 3.10392 10.2347 3.23445 10.45 3.44975L11.0003 4C11.8161 4.81578 12.2239 5.22367 12.7124 5.49543C12.9807 5.64471 13.2653 5.7626 13.5606 5.84678C14.0982 6 14.675 6 15.8287 6H16.2024C17.9814 6 19.1593 6 20 6.23751Z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.25 10C12.25 9.58579 12.5858 9.25 13 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z"
                                    />
                                </svg>
                                <div className="font-bold group-data-[isavatar]:hidden">
                                    انتخاب کنید تا آپلود شوند
                                </div>
                            </span>
                            <span
                                className="absolute flex flex-col gap-3 justify-center items-center scale-0 group-data-[drag-accept]:scale-100 transition duration-500 text-success"
                            >
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        opacity="0.5"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2.25C12.2106 2.25 12.4114 2.33852 12.5535 2.49392L16.5535 6.86892C16.833 7.17462 16.8118 7.64902 16.5061 7.92852C16.2004 8.20802 15.726 8.18678 15.4465 7.88108L12.75 4.9318V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V4.9318L8.55353 7.88108C8.27403 8.18678 7.79963 8.20802 7.49393 7.92852C7.18823 7.64902 7.16698 7.17462 7.44648 6.86892L11.4465 2.49392C11.5886 2.33852 11.7894 2.25 12 2.25Z"
                                    />
                                </svg>
                                <div className="font-bold group-data-[isavatar]:hidden">
                                    رها کنید تا آپلود شوند
                                </div>
                            </span>
                            <span
                                className="absolute flex flex-col gap-3 justify-center items-center scale-0 group-data-[drag-reject]:scale-100 transition duration-500 text-danger"
                            >
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.5"
                                        d="M12 3C9.68925 3 8.23007 5.58716 5.31171 10.7615L4.94805 11.4063C2.52291 15.7061 1.31034 17.856 2.40626 19.428C3.50217 21 6.21356 21 11.6363 21H12.3637C17.7864 21 20.4978 21 21.5937 19.428C22.6897 17.856 21.4771 15.7061 19.0519 11.4063L18.6883 10.7615C15.7699 5.58716 14.3107 3 12 3Z"
                                    />
                                    <path
                                        d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                                    />
                                    <path
                                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                                    />
                                </svg>
                                <div className="font-bold group-data-[isavatar]:hidden">
                                    همه یا برخی از فایل ها مجاز به آپلود نیستند
                                </div>
                            </span>
                            <div
                                className="group-[&:not([data-isactive])]:scale-0 group-data-[filedialog-active]:scale-0 group-data-[dragged]:scale-0 overflow-hidden flex flex-col justify-center items-center transition"
                            >
                                 <span
                                     className="inline-flex justify-center items-center transition duration-500 group-data-[isactive]:group-hover:text-primary text-gray-700"
                                 >
                                     <svg
                                         width="36"
                                         height="36"
                                         viewBox="0 0 24 24"
                                         fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="block group-data-[isavatar]:hidden"
                                     >
                                         <path
                                             opacity="0.5"
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                                         />
                                         <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M12 2.25C12.2106 2.25 12.4114 2.33852 12.5535 2.49392L16.5535 6.86892C16.833 7.17462 16.8118 7.64902 16.5061 7.92852C16.2004 8.20802 15.726 8.18678 15.4465 7.88108L12.75 4.9318V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V4.9318L8.55353 7.88108C8.27403 8.18678 7.79963 8.20802 7.49393 7.92852C7.18823 7.64902 7.16698 7.17462 7.44648 6.86892L11.4465 2.49392C11.5886 2.33852 11.7894 2.25 12 2.25Z"
                                         />
                                     </svg>
                                     <svg
                                         width="64"
                                         height="64"
                                         viewBox="0 0 24 24"
                                         fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="hidden group-data-[isavatar]:block"
                                     >
                                         <circle cx="12" cy="6" r="4"/>
                                         <path
                                             opacity="0.5"
                                             d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                         />
                                     </svg>
                                </span>
                                <div
                                    className="mt-4 flex flex-wrap justify-center items-center text-sm leading-6 text-gray-600 group-data-[isavatar]:hidden"
                                >
                                    <span className="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                                      {isMultiple ? "فایل ها را اینجا رها کنید یا" : "فایل را اینجا رها کنید یا"}
                                    </span>
                                    <span className="text-secondary">
                                        کلیک کنید
                                    </span>
                                </div>
                                <div
                                    className="hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5 truncate group-data-[isavatar]:hidden">
                                    {(!!description && !(!!errorMessage || fieldState.error?.message || fieldState.error?.root?.message)) && (
                                        <div className="text-tiny text-foreground-400 text-center">
                                            {description}
                                        </div>
                                    )}
                                    {(!!errorMessage || fieldState.error?.message || fieldState.error?.root?.message) && (
                                        <div className="text-tiny text-danger">
                                            {errorMessage || fieldState.error?.message || fieldState.error?.root?.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {withPreview && (
                            <UploaderPreview
                                files={!!field.value && Array.isArray(field.value) ? field.value : (field.value ? [field.value] : [])}
                                previewFile={previewFile}
                                isAvatar={isAvatar}
                            />
                        )}
                    </div>
                    <input {...getInputProps()}/>
                </div>
                <div
                    className="group-data-[dragged]:block hidden z-[9999999] fixed backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen inset-0"
                />
                <div
                    className="hidden group-data-[has-helper=true]:group-data-[isavatar]:flex p-1 relative flex-col gap-1.5 truncate">
                    {(!!description && !(!!errorMessage || fieldState.error?.message || fieldState.error?.root?.message)) && (
                        <div className="text-tiny text-foreground-400 text-center">
                            {description}
                        </div>
                    )}
                    {(!!errorMessage || fieldState.error?.message || fieldState.error?.root?.message) && (
                        <div className="text-tiny text-danger">
                            {errorMessage || fieldState.error?.message || fieldState.error?.root?.message}
                        </div>
                    )}
                </div>
            </div>
            <PreviewModal
                state={previewModal}
                file={preview}
                removeFile={removeFile}
                downloadFile={downloadFile}
            />
        </>
    )
};


type UploaderPreviewPropsType = {
    previewFile: (id: number) => void;
    files?: FileStorage[];
    isAvatar?: boolean;
}


const UploaderPreview = (props: UploaderPreviewPropsType) => {
    const {previewFile, files, isAvatar} = props

    if (!files?.length) return null
    if (isAvatar) {
        return (
            <div
                className="w-full h-full bg-red-600 rounded-full absolute transition flex justify-center items-center"
            >
                {files?.map((file, idx) => (
                    <UploaderPreviewItem
                        key={idx}
                        file={file}
                        preview={() => previewFile(file.id!)}
                        isAvatar
                    />
                ))}
            </div>
        )
    }
    return (
        <div
            className="w-full h-full absolute transition flex flex-col justify-end items-center"
        >
            <div className="flex flex-col justify-end items-center h-20 hover:h-60 transition-all duration-500">
                <ScrollShadow
                    hideScrollBar
                    orientation="vertical"
                    size={20}
                    className="backdrop-blur-xl"
                >
                    <div
                        className="w-full flex flex-col justify-start items-center overflow-x-hidden px-2 py-4"
                    >
                        <div className="relative flex flex-wrap gap-2 items-center justify-center">
                            {files?.map((file, idx) => (
                                <UploaderPreviewItem
                                    key={idx}
                                    file={file}
                                    preview={() => previewFile(file.id!)}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollShadow>
            </div>

        </div>
    )
}


type UploaderPreviewItemPropsType = {
    file: FileStorage,
    preview: () => void;
    isAvatar?: boolean;
}

const UploaderPreviewItem = (props: UploaderPreviewItemPropsType) => {
    const {file, preview, isAvatar} = props

    // console.log({mm: file})
    // return null
    const {
        system,
        mimetype,
        path,
        filesize,
        title,
        alt,
    } = file

    let icon: ReactNode
    let color: string
    let bg: string

    if (mimetype.includes("image")) {
        icon = <MimetypeImageIcon/>
        bg = "bg-[#FFA500]"
        color = "border-[#FFA500] bg-[#FFA500] hover:text-[#FFA500]"
    } else if (mimetype.includes("audio")) {
        icon = <MimetypeAudioIcon/>
        bg = "bg-[#008080]"
        color = "border-[#008080] bg-[#008080] hover:text-[#008080]"
    } else if (mimetype.includes("video")) {
        icon = <MimetypeVideoIcon/>
        bg = "bg-[#1E90FF]"
        color = "border-[#1E90FF] bg-[#1E90FF] hover:text-[#1E90FF]"
    } else if (mimetype.includes("pdf")) {
        icon = <MimetypePdfIcon/>
        bg = "bg-[#FA0F00]"
        color = "border-[#FA0F00] bg-[#FA0F00] hover:text-[#FA0F00]"
    } else if (mimetype.includes("zip") || mimetype.includes("vnd.rar")) {
        icon = <MimetypeZipIcon/>
        bg = "bg-[#800080]"
        color = "border-[#800080] bg-[#800080] hover:text-[#800080]"
    } else if (mimetype.includes("msword") || mimetype.includes("vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        icon = <MimetypeWordIcon/>
        bg = "bg-[#2B7CD3]"
        color = "border-[#2B7CD3] bg-[#2B7CD3] hover:text-[#2B7CD3]"
    } else if (mimetype.includes("vnd.ms-excel") || mimetype.includes("vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
        icon = <MimetypeExcelIcon/>
        bg = "bg-[#217346]"
        color = "border-[#217346] bg-[#217346] hover:text-[#217346]"
    } else if (mimetype.includes("vnd.ms-powerpoint") || mimetype.includes("vnd.openxmlformats-officedocument.presentationml.presentation")) {
        icon = <MimetypePresentationIcon/>
        bg = "bg-[#ED6C47]"
        color = "border-[#ED6C47] bg-[#ED6C47] hover:text-[#ED6C47]"
    } else {
        icon = <MimetypeOtherIcon/>
        bg = "bg-[#708090]"
        color = "border-[#708090] bg-[#708090] hover:text-[#708090]"
    }


    return (
        <div
            title={title}
            className={`relative border group/item group-[&:not([data-isavatar])]:hover:scale-105 text-white size-20 group-data-[isavatar]:size-full group-data-[isavatar]:border-none shrink-0 rounded-lg group-data-[isavatar]:rounded-full overflow-hidden transition-all duration-500 flex flex-col gap-1 justify-center items-center ${color}`}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                preview()
            }}
        >
            <span className="group-hover/item:opacity-0 transition-opacity">
                {icon}
            </span>
            <span className="group-hover/item:opacity-0 transition-opacity truncate font-light text-xs font-sans">
                {formatBytes(filesize)}
            </span>
            {/*<div className={`absolute left-0 w-[20%] h-full z-20 ${bg}`}>*/}

            {/*</div>*/}
            <div className="absolute w-full h-full">
                <Image
                    as={NextImage}
                    width={100}
                    height={100}
                    alt={file.alt}
                    title={file.title}
                    src={`${file.system.baseUrl}/${file.path}`}
                    radius="none"
                    loading="eager"
                    className="object-fill !h-full !w-full"
                    classNames={{wrapper: "h-full w-full !max-w-none"}}
                />
            </div>
            <div
                className="absolute z-30 bg-white w-full h-full justify-center items-center flex transition-opacity opacity-0 group-[&:not([data-isavatar])]:group-hover/item:opacity-100"
            >
                <Tooltip
                    color="foreground"
                    placement="top"
                    showArrow
                    content="نمایش"
                    className="select-none"
                    radius="sm"
                >
                    <div
                        className="flex justify-center items-center p-1"
                    >
                        <Visibility className="text-xl"/>
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}


type PreviewModalPropsType = {
    state: UseDisclosureReturn;
    file?: FileStorage;
    removeFile: (id: number) => void;
    downloadFile: (id: number) => void;
}

const PreviewModal = (props: PreviewModalPropsType) => {

    const {state, file, removeFile, downloadFile} = props

    const imageMimetype = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/webp', 'image/svg+xml']
    const audioMimetype = ['audio/aac', 'audio/mpeg', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/webm']
    const videoMimetype = ['video/x-msvideo', 'video/mpeg', 'video/mp4', 'video/ogg', 'video/webm']
    let preview: ReactNode = null

    if (file) {
        if (imageMimetype.includes(file.mimetype)) {
            preview = (
                <Image
                    as={NextImage}
                    width={1024}
                    height={1024}
                    alt={file.alt}
                    title={file.title}
                    src={`${file.system.baseUrl}/${file.path}`}
                    radius="none"
                    loading="eager"
                    className="object-contain !h-fit !w-fit"
                    fallbackSrc={(
                        <div className="size-24 flex justify-center items-center text-white bg-[#FFA500] rounded-xl">
                            <MimetypeImageIcon size={54}/>
                        </div>
                    )}
                />
            )
        } else if (audioMimetype.includes(file.mimetype) || videoMimetype.includes(file.mimetype)) {
            preview = (
                <ReactPlayer
                    url={`${file.system.baseUrl}/${file.path}`}
                    title={file.title}
                    height={audioMimetype.includes(file.mimetype) ? 54 : 360}
                    width={audioMimetype.includes(file.mimetype) ? 420 : 640}
                    controls
                    fallback={(
                        <div className="size-24 flex justify-center items-center text-white bg-[#008080] rounded-xl">
                            <MimetypeAudioIcon size={54}/>
                        </div>
                    )}
                />
            )
        } else if (file.mimetype.includes("pdf")) {
            preview = (
                <div className="size-24 flex justify-center items-center text-white bg-[#FA0F00] rounded-xl">
                    <MimetypePdfIcon size={54}/>
                </div>
            )
        } else if (file.mimetype.includes("zip") || file.mimetype.includes("vnd.rar")) {
            preview = (
                <div className="size-24 flex justify-center items-center text-white bg-[#800080] rounded-xl">
                    <MimetypeZipIcon size={54}/>
                </div>
            )
        } else if (file.mimetype.includes("msword") || file.mimetype.includes("vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            preview = (
                <div className="size-24 flex justify-center items-center text-white bg-[#2B7CD3] rounded-xl">
                    <MimetypeWordIcon size={54}/>
                </div>
            )
        } else if (file.mimetype.includes("vnd.ms-excel") || file.mimetype.includes("vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            preview = (
                <div className="size-24 flex justify-center items-center text-white bg-[#217346] rounded-xl">
                    <MimetypeExcelIcon size={54}/>
                </div>
            )
        } else if (file.mimetype.includes("vnd.ms-powerpoint") || file.mimetype.includes("vnd.openxmlformats-officedocument.presentationml.presentation")) {
            preview = (
                <div className="size-24 flex justify-center items-center text-white bg-[#ED6C47] rounded-xl">
                    <MimetypePresentationIcon size={54}/>
                </div>
            )
        } else {
            preview = (
                <div className="size-24 flex justify-center items-center text-white bg-[#708090] rounded-xl">
                    <MimetypeOtherIcon size={54}/>
                </div>
            )
        }
    }

    return (
        <Modal
            //
            backdrop="blur"
            isOpen={state.isOpen}
            onClose={() => state.onClose()}
            scrollBehavior="inside"
            placement="center"
            hideCloseButton
            isDismissable
            className="max-w-fit"
        >
            <ModalContent className="bg-transparent shadow-none">
                {file && (
                    <ModalHeader className="justify-center">
                        <Tooltip
                            color="foreground"
                            placement="top"
                            showArrow
                            content="حذف"
                            className="select-none"
                            radius="sm"
                        >
                            <Button
                                isIconOnly
                                radius="full"
                                variant="light"
                                color="danger"
                                onPress={() => {
                                    if (file.id) removeFile(file.id)
                                }}
                            >
                                <DeleteOutlined/>
                            </Button>
                        </Tooltip>
                        <Tooltip
                            color="foreground"
                            placement="top"
                            showArrow
                            content="دانلود"
                            className="select-none"
                            radius="sm"
                        >
                            <Button
                                isIconOnly
                                radius="full"
                                variant="light"
                                color="success"
                                onPress={() => {
                                    if (file.id) downloadFile(file.id)
                                }}
                            >
                                <FileDownloadOutlined/>
                            </Button>
                        </Tooltip>
                        <Tooltip
                            color="foreground"
                            placement="top"
                            showArrow
                            content="ویرایش"
                            className="select-none"
                            radius="sm"
                        >
                            <Button
                                isIconOnly
                                radius="full"
                                variant="light"
                                color="secondary"
                            >
                                <EditOutlined/>
                            </Button>
                        </Tooltip>
                    </ModalHeader>
                )}
                <ModalBody>
                    <div className="flex justify-center items-center">
                        {!file && <Spinner/>}
                        {!!file && preview}
                    </div>
                </ModalBody>
                {file && (
                    <ModalFooter className="justify-center font-bold">
                        <span>
                            حجم:
                        </span>
                        <span
                            className="truncate font-sans"
                        >
                            {formatBytes(file.filesize)}
                        </span>
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    )
}




