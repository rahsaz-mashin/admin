export function sortArray(d: any[], key?: string) {
    return d.sort((a, b) => {
        if (!key) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
        else {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        }
    })
}
