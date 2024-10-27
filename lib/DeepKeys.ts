export type DeepKeys<T> = T extends object
    ? {
        [K in keyof T]: K extends string | number
            ? T[K] extends object
                ? `${K}` | `${K}.${DeepKeys<T[K]>}`
                : `${K}`
            : never;
    }[keyof T]
    : never;