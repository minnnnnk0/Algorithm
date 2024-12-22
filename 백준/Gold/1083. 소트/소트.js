const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// S 내에서 -> 현재 idx ~ S 에서 가장 큰 숫자 찾기
// 그 수를 현재 idx로 업뎃
// 최댓값 배열

const n = +input[0]
const arr = input[1].split(' ').map(Number)
let s = +input[2]

for (let i=0; i < n - 1 && s > 0; i++) {
  let maxIdx = i
  
  for (let j=i+1; j < n && j <= i + s; j++) {
    if (arr[j] > arr[maxIdx]) maxIdx = j
  }

  if (maxIdx !== i) {
    const maxValue = arr[maxIdx]

    for (let k = maxIdx; k > i; k--) {
      arr[k] = arr[k - 1]
    }
    arr[i] = maxValue
    s -= maxIdx - i
  }
}
console.log(arr.join(' '))