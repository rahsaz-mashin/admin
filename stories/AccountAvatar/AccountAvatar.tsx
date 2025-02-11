import React from "react";
import { Avatar } from "@heroui/react";

export const AccountAvatar = ({name, avatar}: {name: string, avatar?: string}) => {
  return (
    <Avatar
      size="md"
      isBordered
      name={name}
      src={avatar}
    />
  );
};
