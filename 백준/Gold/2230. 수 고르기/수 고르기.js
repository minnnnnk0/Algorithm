const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// M 이상이면서 가장 작은 차이를 출력
// 오름차순 정렬
// 투포인터

const [N, M] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)

arr.sort((a, b) => a - b)

let left = 0, right = 0
let minDiff = Infinity

while (right < N) {
  const diff = arr[right] - arr[left]

  if (diff >= M) {
    minDiff = Math.min(minDiff, diff)
    left++

  } else {
    right++
  }
}

console.log(minDiff)
