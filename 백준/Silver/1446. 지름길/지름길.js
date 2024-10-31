const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [N, D] = input[0].split(' ').map(Number)
const infos = input.slice(1).map(line => line.split(' ').map(Number))

const dist = Array(D + 1).fill(Infinity)
dist[0] = 0

// 지름길 이용 x
// dist[i] = Math.min(dist[i], dist[i-1] + 1)

// 지름길로 이동하는 조건 
// 범위 : i = start && end <= D
// dist[i] + 지름길 길이 < dist[end]
// -> 이 경우에는 dist[end] = dist[i] + 지름길 길이

for (let i=0; i<=D; i++) {

  if (i >= 1) {
    dist[i] = Math.min(dist[i], dist[i-1] + 1)
  }

  // road = [50, 100, 10] // start, end, len
  for (const road of infos) {
    if (i === road[0] && road[1] <= D && dist[i]+road[2] < dist[road[1]]) {
      dist[road[1]] = dist[i] + road[2]
    }
  }
}

console.log(dist[D])