const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const N = parseInt(input[0], 10)
const arr = input.slice(1).map(Number)

const visited = Array(N+1).fill(false)
const answer = []

for (let i=1; i<=N; i++) {

  const path = []
  let cur = i

  while (!visited[cur]) {
    visited[cur] = true
    path.push(cur)
    cur = arr[cur-1] // 다음 노드
  }

  if (cur === i) {
    answer.push(...path)
  }

  for (const p of path) {
    visited[p] = false
  }
}

const result = [...new Set(answer)].sort((a, b) => a - b)

console.log(result.length)
console.log(result.join('\n'))
