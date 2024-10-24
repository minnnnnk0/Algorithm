const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

  const INF = Infinity;
const n = parseInt(input[0]); // 도시
const m = parseInt(input[1]); // 버스
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

// 시작도시 = 도착도시 -> 비용: 0
for (let i=1; i<=n; i++) {
  dist[i][i] = 0;
}

for (let i=2; i<2+m; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  dist[u][v] = Math.min(dist[u][v], w); 
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

const result = [];
for (let i = 1; i <= n; i++) {
  const temp = [];
  for (let j = 1; j <= n; j++) {
    if (dist[i][j] === INF) {
      temp.push(0);
    } else {
      temp.push(dist[i][j]);
    }
  }
  result.push(temp.join(' '));
}

console.log(result.join('\n'));
