function hourToMins(time) {
    const [hour, min] = time.split(":").map(Number)
    return hour * 60 + min
}

function solution(plans) {
    
    // 대기 중인 과제
    const arr = []

    // 내림차순 정렬
    const sortedPlans = plans.map(([assignment, startTime, runTime]) => [assignment, hourToMins(startTime), Number(runTime)]).sort((a, b) => b[1] - a[1])

    while (sortedPlans.length) {
        const [assignment, startTime, runTime] = sortedPlans.pop()
        
        // 진행 가능한 과제
        arr.forEach((wait, idx) => {
            
            if (startTime < wait[1]) arr[idx][1] += runTime
        })
        arr.push([assignment, startTime + runTime])
    }

    // 완료 시간 기준 정렬
    return arr.sort((a, b) => a[1] - b[1]).map(a => a[0])
}
