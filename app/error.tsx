'use client'

export default function Error({error, reset}: { error: Error, reset: () => void }) {

    return (
        <div>
            <h2>مشکلی به وجود اومده</h2>
            <pre dir="ltr" className="select-all">{error.message}</pre>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                تلاش مجدد
            </button>
        </div>
    )
}