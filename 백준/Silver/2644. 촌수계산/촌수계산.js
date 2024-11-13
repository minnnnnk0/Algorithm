const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 노드 -> 노드 : 촌수 계산 BFS
// 이동횟수 = 촌수 
// end 노드로 못 가면 -1

const n = parseInt(input[0])
const [start, end] = input[1].split(' ').map(Number)
const m = parseInt(input[2])

const graph = Array.from({ length: n+1 }, () => [])
for (let i=3; i<3+m; i++) {
    const [a, b] = input[i].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
}

function bfs(start, end) {
  const queue = [[start, 0]] // [현재 번호, 촌수]
  const visited = Array(n + 1).fill(false)
  visited[start] = true

  while (queue.length > 0) {
      const [cur, cnt] = queue.shift()

      if (cur === end) {
          return cnt
      }

      for (const next of graph[cur]) {
          
        if (visited[next]) continue
          
        visited[next] = true
        queue.push([next, cnt+1])
          
      }
  }

  return -1
}

console.log(bfs(start, end))
