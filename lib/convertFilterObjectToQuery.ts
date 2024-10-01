export function convertFilterToQueryString(filter: any) {
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
    console.log(queryString);
    return queryString;
}


const midResult = (key: string, value: any) => {
    return Object.keys(value).map((operator) => {
        const val = value[operator];
        const result = innerResult(val)
        return result.map((res) => (`filter.${key}=${operator}:${res}`)).join("&")
    }).join("&")
}

const innerResult = (value: any): any[] => {
    if (Array.isArray(value)) {
        return [value.join(',')];
    }
    if (typeof value === 'object') {
        let rr = []
        for (const ou of Object.keys(value)) {
            const val = value[ou];
            console.log(val)
            rr.push(`${ou}:${innerResult(val)}`)
        }
        return rr
    }
    return [value];
}





