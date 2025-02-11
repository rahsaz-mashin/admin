import React from "react";
import {Chip} from "@heroui/react";
import {Verified} from "@mui/icons-material";
import {identityTypesEnum} from "@/interfaces/Identity.interface";
import {Account} from "@/interfaces/Account.interface";

export const AccountDisplay = ({account} : {account: Account}) => {
  return (
      <div className="flex gap-2 items-center">
        {!account.identity && (
            <div className="flex gap-1 flex-col p-2 truncate bg-default-400 rounded-3xl">
              <span>هویت ثبت نشده</span>
              <Chip color="default" size="sm" variant="flat">
                شناسه کاربر: {account.id}
              </Chip>
            </div>
        )}
        {!!account.identity && (
            <div className="flex flex-col gap-3 items-start justify-center">
              <div className="flex flex-row gap-2 items-center truncate">
                {account.identity.isVerified
                    ?
                    (<Verified className="text-blue-500 text-base"/>)
                    :
                    (<Verified className="text-gray-200 text-base"/>)
                }
                {(account.identity.identityType === identityTypesEnum.real) && (
                    <span className="font-bold text-sm">
                      {account.identity.firstName + " " + account.identity.lastName}
                    </span>
                )}
                {(account.identity.identityType === identityTypesEnum.legal) && (
                    <span className="font-bold text-sm">
                      {account.identity.legalName}
                    </span>
                )}
                {(account.identity.identityType === identityTypesEnum.legal) && (
                    <span className="font-light text-sm">
                      ({account.identity.tradeMark})
                    </span>
                )}
              </div>
              <Chip color="default" size="sm" variant="flat">
                شناسه: {account.id}
              </Chip>
            </div>
        )}
      </div>
  );
};
