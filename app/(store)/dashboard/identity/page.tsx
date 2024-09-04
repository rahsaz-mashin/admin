import {DashboardIdentity} from "@/stories/RahsazStore/Dashboard/Identity";
import {auth} from "@/auth";

export default async function Page() {

    const session = await auth()

    return (
        <>
            <DashboardIdentity session={session!}/>
        </>
    );
}
