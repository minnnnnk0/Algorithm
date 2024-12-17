const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const map = input.slice(1).map((line) => line.split(''))

const ROOT = "@", STRONG_BUILDING = "#", WEAK_BUILDING = "*", OBSTACLE = "|"
const dist = [[0, 1], [1, 0], [0, -1], [-1, 0]]

let earthquakeCnt = Array.from({ length: N }, () => Array(M).fill(0))
let destroyed = Array.from({ length: N }, () => Array(M).fill(false))

let totalBuilding = 0
let root = []

for (let i=0; i<N; i++) {
  for (let j=0; j<M; j++) {
    if (map[i][j] === ROOT) {
      root = [i, j]
    }
    if (map[i][j] === STRONG_BUILDING || map[i][j] === WEAK_BUILDING) {
      totalBuilding++
    }
  }
}

let queue = []

for (let [dx, dy] of dist) {
  for (let i=1; i<=2; i++) {
    const nx = root[0] + dx * i
    const ny = root[1] + dy * i

    if (nx < 0 || nx >= N || ny < 0 || ny >= M || map[nx][ny] === OBSTACLE) break

    earthquakeCnt[nx][ny]++
    queue.push([nx, ny])
  }
}

let destroyedBuilding = 0

while (queue.length) {
  const [x, y] = queue.shift()

  if (destroyed[x][y]) continue

  // 강약건물 파괴
  if (map[x][y] === STRONG_BUILDING && earthquakeCnt[x][y] >= 2) {
    destroyedBuilding++
    destroyed[x][y] = true

  } else if (map[x][y] === WEAK_BUILDING && earthquakeCnt[x][y] >= 1) {
    destroyedBuilding++
    destroyed[x][y] = true

  } else {
    continue
  }

  // 주변 영향
  for (let [dx, dy] of dist) {
    const nx = x + dx
    const ny = y + dy

    if (nx < 0 || nx >= N || ny < 0 || ny >= M || map[nx][ny] === OBSTACLE) continue
    earthquakeCnt[nx][ny]++
    queue.push([nx, ny])
  }
}
console.log(`${destroyedBuilding} ${totalBuilding - destroyedBuilding}`)