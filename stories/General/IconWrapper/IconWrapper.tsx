import React, {ReactNode} from "react";
import clsx from "clsx";


export type IconWrapperProps = {
  children: ReactNode;
  className?: string;
}


export const IconWrapper = ({children, className}: IconWrapperProps) => (
    <div className={clsx(className, "flex items-center rounded-small justify-center w-9 h-9")}>
      {children}
    </div>
);
