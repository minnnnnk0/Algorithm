const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const n = +input[0]
const m = +input[1]
const dist = Array.from({ length : n+1 }, () => Array(n+1).fill(Infinity))
const path = Array.from({ length : n+1 }, () => Array(n+1).fill(null))

for (let i=1; i<=n; i++) dist[i][i] = 0 // 자기 자신 거리 0

for (let i=2; i<2+m; i++) {
  const [a, b, c] = input[i].split(' ').map(Number) // a 시작 b 도착 c 비용

  if (dist[a][b] <= c) continue
  dist[a][b] = c
  path[a][b] = b
}

for (let k=1; k<=n; k++) {
  for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
      if (dist[i][j] > dist[i][k] + dist[k][j]) {
        dist[i][j] = dist[i][k] + dist[k][j]
        path[i][j] = path[i][k]
      }
    }
  }
}

const result = []

for (let i=1; i<=n; i++) {
  result.push(dist[i].slice(1).map((v) => (v === Infinity ? 0 : v)).join(' '))
}

for (let i=1; i<=n; i++) {
  for (let j=1; j<=n; j++) {

    if (dist[i][j] === Infinity || i === j) {
      result.push('0')

    } else {
      const answer = []
      let cur = i

      while (cur !== j) {
        answer.push(cur)
        cur = path[cur][j]
      }
      answer.push(j)
      result.push(`${answer.length} ${answer.join(' ')}`)
    }
  }
}

console.log(result.join('\n'))