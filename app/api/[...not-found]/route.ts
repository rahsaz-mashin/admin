import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({ok: false, error: "Not found!", code: "NOT_FOUND"}, {status: 404})
}


