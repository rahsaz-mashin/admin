import {auth} from "@/auth";

export default async function Page() {

    const session = await auth()

    return (
        <div
            className="flex justify-center items-center h-screen text-lg"
        >
            Rahsaz Info
            <br/>
            <pre>
                {JSON.stringify(session)}
            </pre>
        </div>
    );
}
