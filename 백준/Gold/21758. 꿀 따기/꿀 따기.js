const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 벌 벌 벌통 / 벌통 벌 벌 / 벌 벌통 벌 경우 나눠서 생각

const n = +input[0]
const honey = input[1].split(' ').map(Number)
const arrSum = Array(n + 1).fill(0)

honey.unshift(0)

for (let i=1; i<=n; i++) {
  arrSum[i] = honey[i] + arrSum[i - 1]
}

let maxHoney = 0
// const totalHoney = arrSum[n]

// 벌통 벌 벌
for (let i = 2; i < n; i++) {
  const leftBee = arrSum[i] - honey[1]
  const rightBee = arrSum[n] - arrSum[i - 1] - honey[n]
  maxHoney = Math.max(maxHoney, leftBee + rightBee)
}

// 벌 벌 통
for (let i = 2; i < n; i++) {
  const leftBee = arrSum[n] - honey[1] - honey[i]
  const rightBee = arrSum[n] - arrSum[i]
  maxHoney = Math.max(maxHoney, leftBee + rightBee)
}

// 통 벌 벌
for (let i = 2; i < n; i++) {
  const leftBee = arrSum[n] - honey[n] - honey[i]
  const rightBee = arrSum[i - 1]
  maxHoney = Math.max(maxHoney, leftBee + rightBee)
}

console.log(maxHoney)
