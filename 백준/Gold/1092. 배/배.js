const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 내림차순으로 크레인 정렬 (큰거부터)

const n = +input[0]
const cranes = input[1].split(' ').map(Number).sort((a, b) => b - a)
const m = +input[2]
const boxes = input[3].split(' ').map(Number).sort((a, b) => b - a)

// 들지 못하는 경우
if (cranes[0] < boxes[0]) {
  console.log(-1)
  return
}

let time = 0
let boxIndex = Array(m).fill(false)
let remainingBoxes = m

while (remainingBoxes > 0) {
  let idx = 0

  for (let i = 0; i < m; i++) {
    if (idx >= n) break

    if (!boxIndex[i] && cranes[idx] >= boxes[i]) {
      boxIndex[i] = true
      idx++
      remainingBoxes--
    }
  }
  time++
}

console.log(time)