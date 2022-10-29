const today = new Date()
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const leapMos = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function getPayPeriod() {
    let date = today.getDate()
    let month = today.getMonth() 
    let year = today.getFullYear()
    let days = 0

    Number.isInteger(year / 4) ? days = leapMos[month] : months[month]
    if (date < 15 && month != 1) { days = 15 } else {
        if (month == 1) {days = 14 }
    }

    return `${month + 1}/${days}/${year}`
}