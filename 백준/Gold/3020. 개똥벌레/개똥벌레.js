const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// N 장애물 수 H 동굴의 높이
const [N, H] = input[0].split(' ').map(Number); 
const obstacles = input.slice(1).map(Number);

const floor = new Array(H + 1).fill(0); // 바닥 장애물
const ceiling = new Array(H + 1).fill(0); // 천장 장애물

// 장애물 갯수
for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    // 짝수 > 바닥
    floor[obstacles[i]]++;
  } else {
    // 홀수 > 천장
    ceiling[obstacles[i]]++;
  }
}

// 크거나 같은 높이
for (let i = H - 1; i > 0; i--) {
  floor[i] += floor[i + 1];
  ceiling[i] += ceiling[i + 1];
}

let minObstacles = Infinity; // 최소 장애물 수
let minCnt = 0;            // ...의 갯수 ㅋㅋ

// 각 높이에서 부딪히는 장애물
for (let i = 1; i <= H; i++) {
  // 바닥에서 i 이상, 천장에서 (H-i+1) 이상
  const total = floor[i] + ceiling[H - i + 1]; 

  if (total < minObstacles) {
    minObstacles = total;
    minCnt = 1;
  } else if (total === minObstacles) {
    minCnt++;
  }
}
console.log(minObstacles, minCnt);
