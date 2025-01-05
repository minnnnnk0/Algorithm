function solution(stones, k) {
  let left = 1
  let right = 200000000
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    let cnt = 0
    let check = false
    
    for (const stone of stones) {
      if (stone - mid <= 0) {
        cnt++
        if (cnt >= k) {
          check = true
          break
        }
      } else {
        cnt = 0
      }
    }
    
    if (check) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  
  return left
}
