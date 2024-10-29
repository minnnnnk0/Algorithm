function solution(number, k) {
  // 배열 마지막 숫자와 현재 숫자를 비교하여 
  // 현재 숫자가 더 크면 배열의 마지막 숫자 pop
  let arr = []

  for (let i=0; i<number.length; i++) {

    while (k > 0 && arr[arr.length-1] < number[i]) {
      arr.pop()
      k--
    }
    arr.push(number[i])
  }

  // 마지막 : k가 0보다 크다면? -> 남은 k만큼 뒤에서 제거
  arr.splice(arr.length-k, k)
    
  return arr.join("")
}