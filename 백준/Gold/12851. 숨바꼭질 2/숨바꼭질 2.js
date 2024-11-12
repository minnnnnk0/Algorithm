const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const [n, k] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number)

const maxNum = 100000
const visited = Array.from({length: maxNum + 1}, () => [-1, 0])

const bfs = (start, end) => {

  const q = []
  q.push([start, 0])
  visited[start] = [0, 1]

  while (q.length) {

    const [cur, time] = q.shift()

    if (cur === end) {
      return [time, visited[end][1]]
    }

    // 다음 탐색
    for (const next of [cur -1, cur + 1, cur * 2]) {

      if (next < 0 || next > maxNum) continue

      if (visited[next][0] === -1) {
        // 방문 안 한 경우
        visited[next] = [time + 1, visited[cur][1]]

        q.push([next, time + 1])

      } else if (visited[next][0] === time + 1) {
        
        // 방문했는데 최단 시간인 경우 -> 갯수 += 1
        visited[next][1] += visited[cur][1]
      }
    }
  }
}

const [time, cnt] = bfs(n, k)
console.log(time)
console.log(cnt)
