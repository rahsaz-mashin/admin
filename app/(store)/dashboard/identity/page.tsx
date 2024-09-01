import {DashboardIdentityInfoForm} from "@/stories/RahsazStore/Dashboard/Identity/InfoForm";
import {auth} from "@/auth";

export default async function Page() {

    const session = await auth()

    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <DashboardIdentityInfoForm session={session!}/>
        </main>
    );
}
