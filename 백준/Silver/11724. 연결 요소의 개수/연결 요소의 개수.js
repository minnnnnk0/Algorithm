const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 방향이 없는 그래프 !!

const [N, M] = input[0].split(' ').map(Number)

// 인접 행렬
const matrix = Array.from({ length: N }, () => Array(N).fill(0))

for (let i=1; i<=M; i++) {
  let [U, V] = input[i].split(' ').map(Number)

  matrix[U-1][V-1] = 1
  matrix[V-1][U-1] = 1 // 방향이 없으므로 양방향 처리
}

// console.log(matrix)

// 연결된 모든 노드를 방문하는 재귀 함수
const func = (node, visited) => {
  visited[node] = true

  for (let i=0; i<N; i++) {
    if(matrix[node][i] === 1 && !visited[i]) {
      func(i, visited)
    }
  }
}

const visited = Array(N).fill(false)
let cnt = 0

for (let i=0; i<N; i++) {

  if (!visited[i]) {
    func(i, visited)
    cnt++
  }
}

console.log(cnt)