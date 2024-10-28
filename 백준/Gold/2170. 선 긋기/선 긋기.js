const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0])

const lines = input.slice(1).map(v => {
  let [start, end] = v.split(' ').map(Number)
  return [start, end]
})

lines.sort((a, b) => a[0] - b[0])

// console.log(lines)

let totalCnt = 0
let left = lines[0][0]
let right = lines[0][1]

for (let i=1; i<N; i++) {

  // 겹치지 않는 상태 -> 끝 점이 다음 시작점보다 작은 경우
  if (right < lines[i][0]) {
    totalCnt += (right - left) // 구간 누적

    left = lines[i][0]
    right = lines[i][1]

    // 겹치는 상태 -> 끝 점이 다음 시작점이랑 같거나 큼
  } else if (lines[i][0] <= right && lines[i][1] >= right) {
    right = lines[i][1] // 다음 끝점으로 넘어감
  }
}

// 마지막 길이 더하기
totalCnt += (right -left)
console.log(totalCnt)