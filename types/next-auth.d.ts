import { Session as SessionType } from "@/interfaces/Session.interface";

declare module "next-auth" {
    interface Session extends SessionType { }
}
