const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift(); // 노드 갯수
let arr = []; // 인접 행렬 저장

for (const r of input) {
  arr.push(r.split(" ").map(Number));
}

// 플로이드 - 워셜 알고리즘...!
// 모든 노드쌍에 대해 경로가 존재하는지 확인
// i에서 j로 가는 경로를 k를 거쳐 갈 수 있는 경우 arr[i][j] = 1로 설정
for (let k=0; k<N; k++) {
  for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
      if (arr[i][k] && arr[k][j]) {
        arr[i][j] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}