function solution(n, times) {
    let left = 1
    let right = Math.max(...times) * n

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        let total = 0

        // 처리할 수 있는 사람 수 +=
        for (const time of times) {
            total += Math.floor(mid / time)
        }
    
        // 처리 가능 인간이 n명 이상이면 -> 시간을 줄임 => right = mid
        if (total >= n) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
