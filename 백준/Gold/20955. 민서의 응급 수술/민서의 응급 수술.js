const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 무방향 연결 그래프
// 사이클 제거 -> 간선 변화 최소 횟수
// DFS

const [n, m] = input[0].split(' ').map(Number)
const graph = Array.from({ length: n+1 }, () => [])
const visited = Array(n + 1).fill(false)
let cycleCnt = 0
let answer = 0

for (let i=1; i<= m; i++) {
  const [u, v] = input[i].split(' ').map(Number)
  graph[u].push(v)
  graph[v].push(u)
}

const dfs = (node, parent) => {
  visited[node] = true

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next, node)
    } else if (next !== parent) {
      cycleCnt++
    }
  }
}

for (let i=1; i<=n; i++) {
  if (!visited[i]) {
    answer++
    dfs(i, -1)
  }
}

cycleCnt = cycleCnt/2
console.log((answer-1) + cycleCnt)