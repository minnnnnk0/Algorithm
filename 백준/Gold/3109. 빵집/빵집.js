const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 빈칸에 가스 연결, 다른 경로와 겹칠 수 없음 => 설치하면 x로 바꾸기
// 우, 우상, 우하
// 최대 가스 연결 갯수

// dfs 그리디

const [R, C] = input[0].split(' ').map(Number)
const graph = input.slice(1).map((v) => v.split(''))

const dist = [[-1, 1], [0, 1], [1, 1]]

// 도달 가능 횟수
let cnt = 0

const dfs = (x, y) => {

  // 목표 지점에 도달
  if (y === C-1) return true

  for(let [dx, dy] of dist) {

    const nx = x + dx
    const ny = y + dy

    if (nx < 0 || nx >= R || ny >= C || graph[nx][ny] !== '.') continue

    // 방문한 곳은 x로 처리
    graph[nx][ny] = 'x'

    if (dfs(nx, ny)) {
      return true
    }
  }

  return false
}

for (let i=0; i<R; i++) {

  // '.'에서 시작
  if (graph[i][0] === '.') {

    if (!dfs(i, 0)) continue
    cnt += 1 
  }
}

console.log(cnt)
