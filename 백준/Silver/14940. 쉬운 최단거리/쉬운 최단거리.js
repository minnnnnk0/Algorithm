const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map((v) => +v)
const graph = input.slice(1).map((v) => v.split(' ').map(Number))

const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

let target = [0, 0]

for (let i=0; i<N; i++) {
  for (let j=0; j<M; j++) {
    if (graph[i][j] === 2) {
      target = [i, j]
      break
    }
  }
}

const bfs = (start) => {
  const q = [start]
  const visited = Array.from({length: N}).map(() => new Array(M).fill(-1)); 

  const [sx, sy] = start
  visited[sx][sy] = 0

  while (q.length) {
    const [x, y] = q.shift()

    for (let i=0; i<4; i++) {
      const nx = x +dx[i]
      const ny = y + dy[i]

      if ( nx>=0 && nx<N && ny>=0 && ny<M && graph[nx][ny] !== 0 && visited[nx][ny] === -1 ) {

        q.push([nx, ny])
        visited[nx][ny] = visited[x][y]+1
      }
    }
  }

  return visited
  
}
const answer = bfs(target)
// console.log(answer)

for (let i=0; i<N; i++ ) {
  let result = ''

  for (let j=0; j<M; j++) {
    if (graph[i][j] === 0) {
      result += '0 '
    } else {
      result += `${answer[i][j]} `
    }
  }
  console.log(result.trim())
}