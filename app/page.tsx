import {auth} from "@/auth";

export default async function Page() {

    const session = await auth()

    return (
        <div
            className="flex flex-col justify-center items-center h-screen text-lg"
        >
            Rahsaz Admin
            <br/>
            <pre>
                {JSON.stringify(session)}
            </pre>
        </div>
    );
}
