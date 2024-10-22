const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 벽 = X
// 친구 없으면 TT 출력
// 방문 체크 + 범위 => P의 개수 찾기

const [n, m] = input[0].split(' ').map(Number)
const campus = input.slice(1).map(v => v.split(''))
// 상 하 좌 우
const d = [[-1, 0], [1, 0], [0, -1], [0, 1]]
const visited = Array.from({ length: n }, () => Array(m).fill(false))

let sx, sy // 시작 위치 I

for (let i=0; i<n; i++){
  for (let j=0; j<m; j++){
    if (campus[i][j] === 'I'){
      sx = i
      sy = j
      break
    }
  }
}

function dfs(x, y) {
  visited[x][y] = true
  let cnt = 0

  for (const [dx, dy] of d) {
    const nx = x + dx
    const ny = y + dy

    // 범위
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && campus[nx][ny] !== 'X') {
      if (campus[nx][ny] === 'P') {
        cnt++
      }
      cnt += dfs(nx, ny)
    }
  }

  return cnt
}

const answer = dfs(sx, sy)
console.log(answer >= 1 ? answer : "TT")
