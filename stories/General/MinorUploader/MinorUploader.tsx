import React, {ReactNode} from "react";
import {Control, useController} from "react-hook-form";
import {Button} from "@nextui-org/react";


export type MinorUploaderProps = {
    name: string;
    control: Control<any, any>;

    label?: string;

    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;

    description?: ReactNode;
    errorMessage?: ReactNode;
    isInvalid?: boolean;

    className?: string;
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
    } = props


    const {
        field,
        fieldState,
        formState,
    } = useController({name, control})


    // const _props = {
    //     // label: label,
    //
    //     isDisabled: isDisabled,
    //     isReadOnly: isReadOnly || formState.isValidating || formState.isLoading || formState.isSubmitting,
    //
    //     // description: description,
    //     // isInvalid: isInvalid || fieldState.invalid,
    //     // errorMessage: errorMessage || fieldState.error?.message,
    //
    //     value: field.value,
    //     onChange: field.onChange,
    //     onBlur: field.onBlur,
    //     name: field.name,
    // }




    const hasHelper = !!description || isInvalid || fieldState.invalid

    return (
        <div

            className={"relative h-full group flex flex-col gap-2 justify-center " + className}
            data-has-helper={hasHelper}
        >
            <label
                htmlFor="uploader"
                className="cursor-pointer h-full p-6 flex justify-center bg-white border-2 transition duration-500 group-hover:bg-primary/10 group-hover:border-primary border-dashed border-gray-300 rounded-xl"
            >
                <div className="flex justify-center items-center flex-col">
                    <span
                        className="inline-flex justify-center items-center group-hover:text-primary transition duration-500 size-16 bg-default-100 text-gray-800  rounded-full"
                    >
                        <svg
                            width="36"
                            height="36"
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
                    </span>

                    <div className="mt-4 flex flex-wrap justify-center items-center text-sm leading-6 text-gray-600">
                        <span className="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                          فایل(ها) را اینجا رها کنید یا
                        </span>
                        <Button
                            variant="light"
                            color="secondary"
                            size="sm"
                        >
                            کلیک کنید
                        </Button>
                    </div>
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
                <input id="uploader" type="file" className="hidden"/>
            </label>

        </div>
    )
};


/*

<div data-hs-file-upload-preview="">
                    <div
                        className="p-3 bg-white border border-solid border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
                        <div className="mb-1 flex justify-between items-center">

                            <div className="flex items-center gap-x-2">
                                <button type="button"
                                        className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        data-hs-file-upload-remove="">
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                         height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <div
                                className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                                role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}
                                data-hs-file-upload-progress-bar="">
                                <div
                                    className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition-all duration-500 hs-file-upload-complete:bg-green-500"
                                    style={{"width": 0}}
                                    data-hs-file-upload-progress-bar-pane=""
                                ></div>
                            </div>
                            <div className="w-10 text-end">
          <span className="text-sm text-gray-800 dark:text-white">
            <span data-hs-file-upload-progress-bar-value="">0</span>%
          </span>
                            </div>
                        </div>
                    </div>
                </div>

<div className="flex items-center gap-x-3">
          <span
              className="size-10 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700 dark:text-neutral-500"
              data-hs-file-upload-file-icon="">
            <img className="rounded-lg hidden" data-dz-thumbnail=""/>
          </span>
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                                        <span className="truncate inline-block max-w-[300px] align-bottom"
                                              data-hs-file-upload-file-name=""></span>.<span
                                        data-hs-file-upload-file-ext=""></span>
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-neutral-500"
                                       data-hs-file-upload-file-size=""></p>
                                </div>
                            </div>

 */