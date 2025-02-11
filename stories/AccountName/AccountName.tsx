import React from "react";

export const AccountName = ({name}: {name: string}) => {
  return (
    <div className="block w-full relative">
      <span className="font-bold truncate">{name}</span>
    </div>
  );
};
