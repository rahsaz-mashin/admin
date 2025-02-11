import NextAuth from "next-auth"


import {Account} from "@/interfaces/Account.interface";

declare module "next-auth" {

    interface Session {
        accessToken: string;
        account: Account;
    }

    interface User {
        accessToken: string;
        account: Account;
    }

    interface JWT {
        accessToken: string;
        account: Account;
    }

}