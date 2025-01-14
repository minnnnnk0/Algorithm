function checkFunc(i) {
  if (i === 1) {
    return 0
  }
    
  let smallest = 0
  for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
      
    if (i % j === 0) {
      let div = Math.round(i / j)
      if (div > 10000000) {
        smallest = j
        continue
          
      } else {
        return div
      }
    }
  }
  return smallest ? smallest : 1
}

function solution(begin, end) {
  const answer = []
  for (let i = begin; i <= end; i++) {
    answer.push(checkFunc(i))
  }
  return answer
}
