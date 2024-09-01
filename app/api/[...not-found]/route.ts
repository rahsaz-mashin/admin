import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const page = +(searchParams?.get('page') || 0)
    const per = +(searchParams?.get('per') || 10)
    const selected = searchParams?.getAll('selected')
    const search = searchParams?.getAll('search')


    const items: any[] = [
        {key: 1, label: "یک", section: "اعداد غیر اول"},
        {key: 2, label: "دو", section: "اعداد اول"},
        {key: 3, label: "سه",},
        {key: 4, label: "چهار", section: "اعداد غیر اول"},
        {key: 5, label: "پنج", section: "اعداد اول"},
        {key: 6, label: "شش", section: "اعداد غیر اول"},
        {key: 7, label: "هفت", section: "اعداد اول"},
        {key: 8, label: "هشت", section: "اعداد غیر اول"},
        {key: 9, label: "نه", section: "اعداد غیر اول"},
        {key: 10, label: "ده", section: "اعداد غیر اول"},
        {key: 11, label: "یازده", section: "اعداد اول"},
        {key: 12, label: "دوازده", section: "اعداد غیر اول"},
        {key: 13, label: "سیزده", section: "اعداد اول"},
        {key: 14, label: "چهارده", section: "اعداد غیر اول"},
        {key: 15, label: "پانزده", section: "اعداد غیر اول"},
        {key: 16, label: "شانزده", section: "اعداد غیر اول"},
        {key: 17, label: "هفده", section: "اعداد اول"},
        {key: 18, label: "هجده", section: "اعداد غیر اول"},
        {key: 19, label: "نوزده", section: "اعداد اول"},
        {key: 20, label: "بیست", section: "اعداد غیر اول"},
        {key: 21, label: "بیست و یک", section: "اعداد غیر اول"},
        {key: 22, label: "بیست و دو", section: "اعداد غیر اول"},
        {key: 23, label: "بیست و سه", section: "اعداد اول"},
        {key: 24, label: "بیست و چهار", section: "اعداد غیر اول"},
        {key: 25, label: "بیست و پنج", section: "اعداد غیر اول"},
        {key: 26, label: "بیست و شش", section: "اعداد غیر اول"},
        {key: 27, label: "بیست و هفت", section: "اعداد غیر اول"},
        {key: 28, label: "بیست و هشت", section: "اعداد غیر اول"},
        {key: 29, label: "بیست و نه", section: "اعداد اول"},
        {key: 30, label: "سی", section: "اعداد غیر اول"},
        {key: 31, label: "سی و یک", section: "اعداد اول"},
        {key: 32, label: "سی و دو", section: "اعداد غیر اول"},
        {key: 33, label: "سی و سه", section: "اعداد غیر اول"},
    ]



    const list = items.filter((v) => (v.label.includes(search))).splice((page) * per, (page+1) * per)

    return NextResponse.json({items: list, count: items.length})

    return NextResponse.json({ok: false, error: "Not found!", code: "NOT_FOUND"} , {status: 404})
}


