const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// DFS 탐색
// 4번 탐색해서 나오는 모양 => 테르토미노 모양
// 잠만...
// ㅗ 모양은 어떻게 탐색 ? => 따로 처리...해야지 뭐

const [N, M] = input[0].split(' ').map(Number)
const map = input.slice(1).map((v) => v.split(' ').map(Number))

const dist = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const visited = Array.from({ length: N }, () => Array(M).fill(false))
let maxSum = 0

const dfs = (x, y, cnt, sum) => {

  if (cnt === 4) {
    maxSum = Math.max(maxSum, sum)
    return
  }

  for (const [dx, dy] of dist) {

    const nx = x + dx
    const ny = y + dy

    if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue

    visited[nx][ny] = true
    dfs(nx, ny, cnt+1, sum+map[nx][ny])
    visited[nx][ny] = false
  }
}

// ㅗ 모양 4방 테르토미노 찾는 함수
const exception = (x, y) => {

  const shapes = [
    [[0, 0], [0, 1], [0, 2], [1, 1]],  // ㅗ
    [[0, 1], [1, 0], [1, 1], [1, 2]],  // ㅜ
    [[0, 0], [1, 0], [2, 0], [1, 1]],  // ㅓ
    [[0, 1], [1, 1], [2, 1], [1, 0]]   // ㅏ
  ]

  for (const shape of shapes) {
    let sum = 0

    for (const [dx, dy] of shape) {
      
      const nx = x + dx
      const ny = y + dy

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        sum = 0
        break
      }

      sum += map[nx][ny]
    }

    maxSum = Math.max(maxSum, sum)
  }
}

for (let i=0; i<N; i++) {
  for (let j=0; j<M; j++) {

    visited[i][j] = true
    dfs(i, j, 1, map[i][j])
    visited[i][j] = false
    exception(i, j)
  }
}

console.log(maxSum)