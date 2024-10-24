const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, -> 오름차순
// 더 이상 방문할 수 있는 점이 없는 경우 종료
// 입력으로 주어지는 간선은 양방향

const [N, M, V] = input[0].split(' ').map(Number)

// 인접 행렬
const matrix = Array.from({ length: N }, () => Array(N).fill(0))

for (let i=1; i<=M; i++) {
  let [U, V] = input[i].split(' ').map(Number)

  matrix[U-1][V-1] = 1
  matrix[V-1][U-1] = 1 // 방향이 없으므로 양방향 처리
}

// console.log(matrix)

// dfs
const dfs = (node, visited, cnt) => {
  visited[node] = true
  cnt.push(node + 1)

  for (let i=0; i<N; i++) {
    if (matrix[node][i] === 1 && !visited[i]) {
      dfs(i, visited, cnt)
    }
  }
}

let result = []
let visited = Array(N).fill(false)

dfs(V-1, visited, result)
console.log(result.join(' '))


// bfs
const bfs = (v) => {
  let visited = Array(N).fill(false)
  let q = [v-1]
  let ans = []

  visited[v-1] = true

  while (q.length > 0) {
    let node = q.shift()
    ans.push(node + 1)

    for (let i=0; i<N; i++) {
      if (matrix[node][i] === 1 && !visited[i]) {
        visited[i] = true
        q.push(i)
      }
    }
  }

  return ans

}

let result2 = bfs(V)
console.log(result2.join(' '))