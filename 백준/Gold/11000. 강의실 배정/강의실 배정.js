const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const N = input.shift()[0];
const arr = [];

for (let i = 0; i < N; i++) {
  const [start, end] = input[i];

  arr.push([start, 1]);
  arr.push([end, -1]);
}

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let classCnt = 0;
let maxCnt = 0;

for (const i of arr) {
  classCnt += i[1]; // +1 -1
  maxCnt = Math.max(maxCnt, classCnt);
}

console.log(maxCnt);
