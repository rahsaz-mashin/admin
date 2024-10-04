import React, {ReactNode, useRef, useState} from "react";
import {Input, Textarea} from "@nextui-org/input";
import {Control, useController} from "react-hook-form";
import {TimeValue} from "@react-types/datepicker";
import {Button, DateValue} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {Clear} from "@mui/icons-material";
import {Editor} from "@tinymce/tinymce-react";
import {Spinner} from "@nextui-org/spinner";


export type MinorTagProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isDisabled?: boolean;
    isReadOnly?: boolean;

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
    classNames?: { [key: string]: string };
}


export const MinorEditor = (props: MinorTagProps) => {
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
        classNames,
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    // const _props = {
    //     label: label,
    //
    //
    //     description: description,
    //
    //     isInvalid: isInvalid || fieldState.invalid,
    //     errorMessage: errorMessage || fieldState.error?.message,
    // }


    const [isLoading, setLoading] = useState(true)

    const hasHelper = !!description || isInvalid || fieldState.invalid

    return (
        <div
            className={"group relative flex flex-col gap-3 items-start " + className}
            data-has-helper={hasHelper}
            data-loading={isLoading || undefined}
        >
            <div
                className="absolute z-10 flex-col justify-center items-center gap-5 w-full h-full bg-white/40 min-h-60 hidden group-data-[loading]:flex">
                <Spinner/>
                <span>در حال بارگذاری ادیتور ...</span>
            </div>
            {label && (
                <label
                    className="origin-top-left rtl:origin-top-right subpixel-antialiased block text-foreground-500 cursor-text will-change-auto text-small pe-2 max-w-full text-ellipsis overflow-hidden"
                >
                    {label}
                </label>
            )}
            <Editor
                apiKey="c5202p0ybgpmcrokfgwn78asoww5xabm9hxbqxxvzxwgsmhg"
                onEditorChange={field.onChange}
                textareaName={field.name}
                value={field.value}
                onInit={() => {
                    setLoading(false);
                }}
                init={{
                    height: 500,
                    width: "100%",
                    menubar: true,
                    directionality: "rtl",
                    plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount", "directionality"],
                    toolbar: "insertfile undo redo | blocks | " + "image | " + "bold italic forecolor | alignleft aligncenter " + "alignright alignjustify | ltr rtl | bullist numlist outdent indent | " + "removeformat | help |",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }",
                    // images_upload_handler: !mediaUploadPath
                    //     ? undefined
                    //     : async (blobInfo, progress) => {
                    //         const formData = new FormData();
                    //         formData.append(mediaUploaderField, blobInfo.blob(), blobInfo.filename());
                    //         const headers = { "Content-Type": "multipart/form-data" };
                    //         const { data } = await api.post(process.env.NEXT_PUBLIC_BASE_URL + "/storage/" + mediaUploadPath, formData, { headers });
                    //         return process.env.NEXT_PUBLIC_STORAGE_BASE_URL + "/" + data.path;
                    //     },
                    // automatic_uploads: !!mediaUploadPath,
                    // paste_data_images: !!mediaUploadPath,
                    // file_picker_types: "image",
                    // file_picker_callback: !useMediaLibrary
                    //     ? undefined
                    //     : function (callback, value, meta) {
                    //         callbackInsertImage.current = callback;
                    //         setOpenLibrary(true);
                    //     },
                }}
                disabled={isDisabled || isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting}
            />
            <div className="hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5">
                {!!description && (
                    <div className="text-tiny text-foreground-400">
                        {description}
                    </div>
                )}
                {!!errorMessage || fieldState.error?.message && (
                    <div className="text-tiny text-danger">
                        {errorMessage || fieldState.error?.message}
                    </div>
                )}
            </div>
        </div>
    )

};
