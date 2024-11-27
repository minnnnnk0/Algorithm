const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 누적합

const [n, m] = input[0].split(' ').map(Number)
const heights = input[1].split(' ').map(Number)
const list = input.slice(2).map((v) => v.split(' ').map(Number))

const diff = Array(n + 1).fill(0)

list.forEach(([start, end, soil]) => {
  diff[start-1] += soil
  diff[end] -= soil
})

let cur = 0
const totalHeights = heights.map((height, i) => {
  cur += diff[i]
  return height + cur
})

console.log(totalHeights.join(' '))
