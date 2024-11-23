const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 행성 수 N 행성 위치 K
const [N, K] = input[0].split(' ').map(Number)
const time = input.slice(1).map((v) => v.split(' ').map(Number))

// 플-워
for (let k=0; k<N; k++) {
  for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {

      if (time[i][j] <= time[i][k] + time[k][j]) continue
      time[i][j] = Math.min(time[i][j], time[i][k] + time[k][j])
    }
  }
}

let minTime = Infinity
const visited = Array(N).fill(false)

// dfs (시작점, 방문 행성 수, 비용)
const dfs = (cur, visitedCnt, totalTime) => {

  if (visitedCnt === N) {
    minTime = Math.min(minTime, totalTime)
    return
  }

  for (let i=0; i<N; i++) {

    if (visited[i]) continue
    
    visited[i] = true
    dfs(i, visitedCnt + 1, totalTime + time[cur][i])
    visited[i] = false
    
  }
}

visited[K] = true // 시작점 방문 체크
dfs(K, 1, 0)

console.log(minTime)
