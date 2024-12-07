const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [n, m] = input[0].split(' ').map(Number)
const edges = input.slice(1).map((v) => v.split(' ').map(Number))

const init = (n) => Array(n).fill(0).map((_, idx) => idx)
const parent = init(n)

const find = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x])
  }
  return parent[x]
}

const union = (parent, a, b) => {
  const rootA = find(parent, a)
  const rootB = find(parent, b)
  if (rootA !== rootB) {
    parent[rootB] = rootA
    return true
  }
  return false // 사이클
}

let cycleCnt = 0
for (let i=0; i<m; i++) {
  const [x, y] = edges[i]

  if (!union(parent, x, y)) {
    cycleCnt = i + 1
    break
  }
}

console.log(cycleCnt)