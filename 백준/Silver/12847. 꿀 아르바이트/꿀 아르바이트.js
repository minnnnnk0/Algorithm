const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');


const [n, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let maxDay = 0
let temp = 0

// k짜리 윈도우를 일단 만든다.
for (let i=0; i<k; i++) {
  temp += arr[i]
}

maxDay = temp

// 윈도우 크기 만큼 => +다음값 -마지막값
for(let i=k; i<n; i++) {
  temp += arr[i] - arr[i-k]
  maxDay = Math.max(temp, maxDay) // 최대값 갱신
}

console.log(maxDay)