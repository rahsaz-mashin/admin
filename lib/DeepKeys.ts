import {Path} from "react-hook-form";

export type DeepKeys<T> = Path<T> extends object
    ? {
        [K in keyof T]: K extends string | number
            ? T[K] extends object
                ? `${K}` | `${K}.${DeepKeys<T[K]>}`
                : `${K}`
            : never;
    }[keyof T]
    : never;