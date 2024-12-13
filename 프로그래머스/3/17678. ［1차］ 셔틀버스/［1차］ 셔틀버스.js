function solution(n, t, m, timetable) {
    
    timetable = timetable.map(time => {
        const [hour, minute] = time.split(":").map(Number)
        return hour * 60 + minute
    })

    timetable.sort((a, b) => a - b)

    let busTime = 9 * 60
    
    for (let busIdx = 1; busIdx <= n; busIdx++) {
        const passengers = timetable.filter((v) => v <= busTime).length

        if (busIdx === n) {
            
            if (passengers < m) continue
            busTime = timetable[m - 1] - 1
            
        } else {
            const minPassengers = Math.min(passengers, m)
            timetable.splice(0, minPassengers)
            busTime += t
        }
    }

    const hours = String(Math.floor(busTime / 60)).padStart(2, '0')
    const minutes = String(busTime % 60).padStart(2, '0')
    
    return `${hours}:${minutes}`
}
