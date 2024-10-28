const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0])
const lectures = input.slice(1).map(v => {
  let [idx, start, end] = v.split(' ').map(Number)

  return {start, end}
})

// 플마원 배열
const plusMinus = []

for (const lecture of lectures) {
  plusMinus.push([lecture.start, 1])
  plusMinus.push([lecture.end, -1])
}

// 같은 시간이면 종료 먼저 -> 이게 더 효율적
plusMinus.sort((a, b) => a[0] - b[0] || a[1] - b[1])

let classCnt = 0
let maxCnt = 0

for (const [time, sum] of plusMinus) {
  classCnt += sum
  maxCnt = Math.max(classCnt, maxCnt)
}

console.log(maxCnt)