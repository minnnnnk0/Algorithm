const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 그래프로 무게 비교를 정리
// a → b a가 b보다 가볍 -> 가벼운 배열
// b → a b가 a보다 무겁 -> 무거운 배열

const N = Number(input[0])
const M = Number(input[1]) // 비교 횟수
const comparisons = input.slice(2).map(line => line.split(' ').map(Number))

const light = Array.from({ length: N+1 }, () => [])
const heavy = Array.from({ length: N+1 }, () => [])

for (const [a, b] of comparisons) {
  light[a].push(b)
  heavy[b].push(a)
}

const dfs = (graph, start) => {
  const visited = Array(N + 1).fill(false)
  const stack = [start]
  let cnt = 0

  while (stack.length > 0) {
    const current = stack.pop()

    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true
        stack.push(next)
        cnt++
      }
    }
  }
  return cnt
}

const result = []

for (let i=1; i<=N; i++) {
  const lightCnt = dfs(light, i)
  const heavyCnt = dfs(heavy, i)

  // 비교할 수 없는 물건 => 전체 - (가벼운 + 무거운 + 나)
  const cantComparisons = N - (lightCnt+heavyCnt+1)
  result.push(cantComparisons)
}

console.log(result.join('\n'))