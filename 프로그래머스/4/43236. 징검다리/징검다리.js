function solution(distance, rocks, n) {
    // 거리 기준 이분탐색
    // 남은 돌 사이의 최소 거리를 최대화
    rocks.push(0)
    rocks.push(distance)
    rocks.sort((a, b) => a - b)
    
    // console.log(rocks)
    
//     const diff = []
//     for (let i=1; i<rocks.length; i++) {
//         let temp = rocks[i] - rocks[i-1]
//         diff.push(temp)
//       }
    
//     console.log(diff)
    
    let minDist = 0 , maxDist = distance // maxDist가 최종 값 -> 최대의 최소 거리
    let answer = 0
    
    while (minDist <= maxDist) {
        
        let mid = Math.floor((minDist + maxDist) / 2)
        
        let cnt = 0 // 제거할 돌
        let now = 0
        
        for (let i=1; i<rocks.length; i++) {
            // 현재 돌과 now 사이의 거리가 mid보다 작으면 제거 => cnt++
            if (rocks[i]-now < mid) {
                cnt++ 
            } else {
                now = rocks[i] // now를 현재 돌로 업뎃
            }
        }
        
        // 요약
        // cnt가 n보다 많으면 => mid를 줄여 => 더 큰 거리
        // cnt가 n 이하 => mid를 늘려 => 더 작은 거리

        // 제거할 돌 cnt가 n보다 많으면 => 범위 줄임
        if (cnt > n) {
            maxDist = mid - 1
        } else {
            minDist = mid + 1
        }
        answer = maxDist
    }
    return maxDist
    
}