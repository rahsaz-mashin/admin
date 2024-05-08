import React, { ReactNode } from "react";

export const Container = ({
  header,
  children,
}: {
  header: ReactNode;
  children: ReactNode;
}) => {
  return (
    <aside className="h-full z-0 pr-0 md:pr-80 flex-1 px-0">
      {header}
      <div className="pb-4 px-4">{children}</div>
    </aside>
  );
};
