const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const books = input[1].split(' ').map(Number)

// 음수 양수 나누기
const left = books.filter(book => book < 0).map(Math.abs)
const right = books.filter(book => book > 0)

// 먼 곳부터 이동 (내림차순)
left.sort((a, b) => b - a)
right.sort((a, b) => b - a)

let total = 0

// M권씩 들고 이동 -> 왕복으로 처리하기
for (let i = 0; i < left.length; i += M) {
  total += Math.abs(left[i]) * 2
}
for (let i = 0; i < right.length; i += M) {
  total += Math.abs(right[i]) * 2
}

// 가장 먼 곳 한번만 이동 -> 왕복에서 거리를 뺀 것
if (left.length && right.length) {
  total -= Math.max(left[0], right[0])
} else if (left.length) {
  total -= left[0]
} else if (right.length) {
  total -= right[0]
}

console.log(total)