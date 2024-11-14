const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// DFS 완탐
// 방문한 알파벳을 따로 기록헤서 중복 방문 방지 new Set()
// 알파벳을 정수로 바꿔서 풀이 -> 더 빠름

const [R, C] = input[0].split(' ').map(Number)
const graph = input.slice(1).map((v) => v.split(''))

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]
let maxCnt = 0

const visited = Array(26).fill(false)

const dfs = (x, y, cnt) => {
  
  // 멕스값 업뎃
  maxCnt = Math.max(maxCnt, cnt)

  for (let i=0; i<4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]
    
    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue

    const alpha = graph[nx][ny].charCodeAt(0) - 'A'.charCodeAt(0)

    // 이미 방문
    if (visited[alpha]) continue

    visited[alpha] = true
    dfs(nx, ny, cnt+1)

    visited[alpha] = false

  }
}

const startIdx = graph[0][0].charCodeAt(0) - 'A'.charCodeAt(0)
visited[startIdx] = true

dfs(0, 0, 1)
console.log(maxCnt)
