import {auth} from "@/auth";


export default async function Page() {

    const session = await auth();

    return (
        <div>
            <h1>Admin</h1>
            <pre>{JSON.stringify(session)}</pre>
        </div>
    );
}
