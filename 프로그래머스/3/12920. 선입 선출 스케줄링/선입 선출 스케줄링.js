function solution(n, cores) {
    // n이 코어의 수보다 작거나 같을 경우 즉시반환
    if (n <= cores.length) {
        return n
    }
  
    let min = Math.min(...cores)
    let max = min * n
    let mid, work
  
    while (min <= max) {
        mid = Math.floor((min + max) / 2)
        work = cores.length
  
        for (let i = 0; i < cores.length; i++) {
            work += Math.floor(mid / cores[i])
        }
  
        if (work < n) {
            min = mid + 1
        } else {
            max = mid - 1
        }
    }
  
    work = cores.length
    const prevTime = min-1
    for (let i = 0; i < cores.length; i++) {
        work += Math.floor(prevTime / cores[i])
    }
  
    for (let i = 0; i < cores.length; i++) {
        if (min % cores[i] === 0) {
            work++
        }
        if (work === n) {
            return i + 1
        }
    }
}