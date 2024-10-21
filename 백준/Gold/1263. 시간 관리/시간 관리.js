const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let N = parseInt(input[0]);
let works = [];

for (let i = 1; i <= N; i++) {
  // 걸리는 시간, 마감 시간
  let [time, finishTime] = input[i].split(' ').map(Number);
  works.push({ time, finishTime });
}

// 작업들을 마감 시간을 기준으로 내림차순
works.sort((a, b) => b.finishTime - a.finishTime);

let nowTime = works[0].finishTime;

for (let i = 0; i < N; i++) {
  nowTime = Math.min(nowTime, works[i].finishTime) - works[i].time;
}

// console.log(nowTime)

// 만약 현재시간이 0보다 작으면?? -> 작업을 못 끝냄
if(nowTime < 0) {
  console.log(-1)
} else {
  console.log(nowTime)
}

// 현재 시간을 가장 늦은 마감 시간으로 구현 시작
// 작업을 하나씩 처리 
// 현재 시간에서 작업 시간을 빼면서 
// 최대한 늦게 시작할 수 있는 시간을 계산