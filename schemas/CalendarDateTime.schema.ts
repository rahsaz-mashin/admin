import {z} from "zod";
import {CalendarDateTime} from "@internationalized/date";
import moment from "moment";
import jMoment from "jalali-moment";

export const CalendarDateTimeSchema = (min?: Date, max?: Date) => {
    let message = "زمان معتبر 2نیست"
    if(min && max) {
        const n = jMoment(min).format("jYYYY/jM/jDD HH:mm")
        const x = jMoment(max).format("jYYYY/jM/jDD HH:mm")
        message = `زمان می بایست بین ${n} و ${x} باشد`
    }
    if(min) {
        const n = jMoment(min).format("jYYYY/jM/jDD HH:mm")
        message = `زمان باید بعد از ${n} باشد`
    }
    if(max) {
        const x = jMoment(max).format("jYYYY/jM/jDD HH:mm")
        message = `زمان باید قبل از ${x} باشد`
    }
    return (
        z
            .instanceof(CalendarDateTime, {message: "زمان معتبر نیست"})
            .refine((v) => {
                    const r = Object.assign({...v})
                    const d = new Date(
                        r.year, r.month, r.day,
                        r.hour, r.minute, r.second,
                    )
                    const current = moment(d)
                    if (min && moment(min).diff(current) > 0) return false
                    if (max && moment(max).diff(current) < 0) return false
                    //
                    return true
                },
                {message: message}
            )
            .transform((v) => {
                return new Date(
                    v.year, v.month, v.day,
                    v.hour, v.minute, v.second,
                )
            })
    )
}