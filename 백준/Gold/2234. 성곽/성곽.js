const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// bfs 탐색
// 1, 2번은 평소 풀던 풀이랑 같음
// 3번 벽뿌의 경우 벽이 있는 모든 곳을 하나씩 다 뿌수고 확인...??
// 벽이 있으면 -> 하나씩 다 뿌수고 (벽의 값 빼기!) -> bfs 탐색 -> 벽뿌 되돌리기 (벽의 값 더하기) -> 반복

const [n, m] = input[0].split(' ').map(Number)
const castle = input.slice(1).map(line => line.split(' ').map(Number))

// 서 1 북 2 동 4 남 8
// Math.pow(2, )
// 이진수의 각 비트를 생각하면 쉽다. 따라서 이 값은 0부터 15까지의 범위 안에 있다.

// 벽의 정보
const wallCheck = (value) => ({
  west: value % 2 === 1,
  north: Math.floor(value / 2) % 2 === 1,
  east: Math.floor(value / 4) % 2 === 1,
  south: Math.floor(value / 8) % 2 === 1,
})

const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]]
let visited = Array.from({ length: m }, () => Array(n).fill(false))

let roomCount = 0 // 1. 이 성에 있는 방의 개수
let maxRoomSize = 0 // 2. 가장 넓은 방의 넓이

const bfs = (x, y, visited) => {

  let q = [[x, y]]
  visited[x][y] = true
  let roomSize = 1

  while (q.length) {
    const [dx, dy] = q.shift()
    const walls = wallCheck(castle[dx][dy])
    const wallArr = [walls.west, walls.north, walls.east, walls.south]

    for (let i=0; i<4; i++) {

      if (wallArr[i]) continue 

      // 벽이 없을 경우
      const nx = dx + dir[i][0]
      const ny = dy + dir[i][1]

      if (nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny]) continue

      visited[nx][ny] = true
      q.push([nx, ny])
      roomSize++
    
    }
  }
  return roomSize
}

// 벽 탐색
for (let i=0; i<m; i++) {
  for (let j=0; j<n; j++) {

    if (visited[i][j]) continue

    roomCount++
    maxRoomSize = Math.max(maxRoomSize, bfs(i, j, visited))
    
  }
}

// 3. 하나의 벽을 제거하여 얻을 수 있는 가장 넓은 방의 크기
let finalSize = 0

// 벽 있을 때마다 다 뿌수고 넓이 계산
for (let i=0; i<m; i++) {
  for (let j=0; j<n; j++) {

    const walls = wallCheck(castle[i][j])
    const wallArr = [walls.west, walls.north, walls.east, walls.south]

    for (let k=0; k<4; k++) {
      const nx = i + dir[k][0]
      const ny = j + dir[k][1]

      // 벽이 없는 경우 -> 넘어감
      if (nx < 0 || nx >= m || ny < 0 || ny >= n || !wallArr[k]) continue

      const visited = Array.from({ length: m }, () => Array(n).fill(false))
      
      // 벽의 값
      let wallValue = Math.pow(2, k)

      castle[i][j] -= wallValue // 벽뿌
      finalSize = Math.max(finalSize, bfs(i, j, visited))
      castle[i][j] += wallValue // 되돌림
    }
  }
}

console.log(roomCount)
console.log(maxRoomSize)
console.log(finalSize)
