const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 도둑루피의 크기가 k면 이 칸을 지나면 k루피를 잃는다는 뜻
// 우선순위 큐 -> 최소 비용 탐색
// 출력형식 Problem 1: 20
// 2 ≤ N ≤ 125 -> 그냥 sort해도 될듯???

const dist = [[-1, 0], [1, 0], [0, -1], [0, 1]]

const dijkstra = (graph, n) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(Infinity))
  const pq = [] // (cost, x, y)

  visited[0][0] = graph[0][0]

  pq.push([graph[0][0], 0, 0])

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0])
    const [cost, x, y] = pq.shift()

    if (cost > visited[x][y]) continue

    for (const [dx, dy] of dist) {
      const nx = x + dx
      const ny = y + dy

      if (nx<0 || ny<0 || nx>=n || ny>=n) continue

      const newCost = cost + graph[nx][ny]

      if (newCost < visited[nx][ny]) {
        visited[nx][ny] = newCost
        pq.push([newCost, nx, ny])
      }
    }
  }
  return visited[n-1][n-1]
}

// ----input

let idx = 0
let problem = 1

while (idx < input.length) {
  const N = Number(input[idx++])

  // N = 0인 입력이 주어지면 전체 입력이 종료된다. -> 문제 똑바로 읽기
  if (N===0) break

  const graph = input.slice(idx, idx + N).map(line => line.split(' ').map(Number))
  idx += N

  const answer = dijkstra(graph, N)
  console.log(`Problem ${problem++}: ${answer}`)
}

