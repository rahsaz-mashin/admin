/* eslint-disable @typescript-eslint/no-explicit-any */



export function convertFilterToQueryString(filter: any) {
    if (!filter) return ""
    const queryString = Object.entries(filter).map(([key, value]) => {
        if (Array.isArray(value)) {
            return value.map((item, idx) => {
                if (idx === 0) return midResult(key, item)
                return midResult(key, {$or: item})
            }).join("&")
        } else {
            return midResult(key, value)
        }
    }).join('&');
    return queryString;
}


const midResult = (key: string, value: any) => {
    if(!value) return ""
    if (typeof value === "string") {
        const result = innerResult(value)
        return result.map((res) => (`filter.${key}=${res}`)).join("&")
    }
    return Object.keys(value).map((operator) => {
        const val = value[operator];
        const result = innerResult(val)
        return result.filter((res) => (!!res)).map((res) => (`filter.${key}=${operator}:${res}`)).join("&")
    }).join("&")
}

const innerResult = (value: any): any[] => {
    if (!value) return []
    if (Array.isArray(value)) {
        return [value.join(',')];
    }
    if (typeof value === 'object') {
        const rr = []
        for (const ou of Object.keys(value)) {
            const val = value[ou];
            rr.push(`${ou}:${innerResult(val)}`)
        }
        return rr
    }
    return [value];
}





