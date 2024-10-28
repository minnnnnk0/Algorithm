const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0])

const plusMinus = [];

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  plusMinus.push([start, 1]); 
  plusMinus.push([end, -1]); 
}

plusMinus.sort((a, b) => a[0] - b[0] || a[1] - b[1])

let totalLen = 0 // 총 길이 (누적합)

let overlap = 0 // 지금 겹친 선 갯수
let lastLine = 0 // 마지막으로 처리한 위치

// 누적합 += (지금 - 마지막으로 겹친 구간)

for (let i=0; i<plusMinus.length; i++) {
  const [line, sum] = plusMinus[i]

  // 선이 겹치는 구간
  if (overlap > 0) {
    totalLen += (line - lastLine)
  }

  overlap += sum // +1 -1 
  lastLine = line
}

console.log(totalLen)