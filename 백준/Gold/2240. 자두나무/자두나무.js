const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// w % 2 === 0 나무 1에 있음

const [T, W] = input[0].split(' ').map(Number)
const plums = input.slice(1).map(Number)

// arr[t][w]
const arr = Array.from({ length: T+1 }, () => Array(W+1).fill(0))

for (let t=1; t<=T; t++) {
  for (let w=0; w<=W; w++) {

    // 지금 자두가 떨어지는 나무
    const tree = w % 2 === 0 ? 1 : 2

    arr[t][w] = arr[t-1][w]

    if (w>0) {
      arr[t][w] = Math.max(arr[t-1][w-1], arr[t][w])
    }

    if (plums[t-1] === tree) {
      arr[t][w] += 1
    }
  } 
}

console.log(Math.max(...arr[T]))
