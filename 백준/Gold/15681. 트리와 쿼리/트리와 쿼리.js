const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 특정 노드를 루트로 하는 서브트리에 속한 정점의 수만 구하면 됌
// 자기 자신도 서브트리에 포함 !!
// 인접리스트 생성
// DFS 재귀로 서브 트리의 크기 계산

const [n, r, q] = input[0].split(' ').map(Number)
const graph = Array.from({ length: n+1 }, () => [])

for (let i=1; i<n; i++) {
  const [u, v] = input[i].split(' ').map(Number)
  graph[u].push(v)
  graph[v].push(u)
}

const subtreeSize = Array(n+1).fill(0)
const visited = Array(n+1).fill(false)

const dfs = (node) => {
  visited[node] = true
  subtreeSize[node] = 1

  for (const next of graph[node]) {
    if (!visited[next]) {
      subtreeSize[node] += dfs(next)
    }
  }
  return subtreeSize[node]
}

dfs(r)

const query = input.slice(n).map(Number)
const answer = query.map((v) => subtreeSize[v])
console.log(answer.join('\n'))