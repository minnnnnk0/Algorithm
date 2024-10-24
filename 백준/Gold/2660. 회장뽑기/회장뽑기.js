const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

  const INF = Infinity;
  const n = Number(input[0]);
  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));
  
  for (let i=1; i<=n; i++) {
    dist[i][i] = 0;
  }
  
  // 친구 관계 ( 친구일 때 1 )
  for (let i=1; i<input.length - 1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    dist[a][b] = 1;
    dist[b][a] = 1;
  }
  
  // 플로이드 워셜 알고리즘
  for (let k=1; k<=n; k++) {
    for (let i=1; i<=n; i++) {
      for (let j=1; j<=n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

// console.log(dist)

const scores = [];
let minScore = INF;

for (let i=1; i<=n; i++) {
  const score = Math.max(...dist[i].slice(1));
  scores.push(score);
  minScore = Math.min(minScore, score);
}

// 최소 점수 회원
const who = [];
for (let i=0; i<n; i++) {
  if (scores[i] === minScore) {
    who.push(i + 1);
  }
}

console.log(minScore, who.length);
console.log(who.join(' '));
