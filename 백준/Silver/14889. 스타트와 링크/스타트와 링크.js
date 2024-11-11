const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 모든 팀원의 조합을 구함
// 팀원의 조합의 점수 합을 구해서 -> 양팀 점수 차가 최소인 값 구하기

const N = +input.shift()
const arr = input.map((v) => v.split(' ').map(Number))

const visited = Array.from({length: N}).fill(false)
let answer = Infinity

const dfs = (cnt, idx) => {

  if (cnt === N / 2) {  // 일단 인원을 둘로 나눈다

    let score1 = 0, score2 = 0

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {

        if (visited[i] && visited[j]) {
          score1 += arr[i][j] + arr[j][i]

        } else if (!visited[i] && !visited[j]) {
          score2 += arr[i][j] + arr[j][i]
        }
      }
    }

  let diff = Math.abs(score1 - score2)
  answer = Math.min(answer, diff)

  return
  }

  // 팀 구성의 모든 경우의 수
  for (let i=idx; i<N; i++) {
    if (visited[i]) continue
  
    visited[i] = true
    dfs(cnt+1, i+1) // cnt === N / 2까지
    visited[i] = false
  }
}
dfs(0, 0)
console.log(answer)
