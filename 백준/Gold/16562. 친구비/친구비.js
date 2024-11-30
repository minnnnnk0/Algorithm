const { toASCII } = require('punycode')

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [N, M, K] = input[0].split(' ').map(Number)
const costs = [0, ...input[1].split(' ').map(Number)]

const parent = Array.from({ length: N+1 }, (_, idx) => idx)

const find = (x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent[x])
  }
  return parent[x]
};

const union = (a, b) => {
  const rootA = find(a)
  const rootB = find(b)

  if (rootA !== rootB) {
    if (costs[rootA] < costs[rootB]) {
      parent[rootB] = rootA
    } else {
      parent[rootA] = rootB
    }
  }
}

for (let i=2; i<2+M; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  union(a, b)
}

const group = new Set()

for (let i=1; i<=N; i++) {
  group.add(find(i))
}

let totalCost = 0

group.forEach((v) => {
  totalCost += costs[v]
})

console.log(totalCost <= K ? totalCost : "Oh no")
