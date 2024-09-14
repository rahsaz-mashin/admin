

export default function Page({params}: { params: { workspace: string; } }) {
    const {workspace} = params

    return (
        <>
            <div className="h-full w-full flex flex-col justify-center items-center gap-3">
                <div className="font-bold text-purple-700 text-xl">
                    Current Workspace
                </div>
                <div className="font-extrabold text-primary text-7xl">
                    {workspace}
                </div>
                <span>
                    Choose section from drawer
                </span>
            </div>
        </>
    )
}