const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n')

// 유니온 파인드

const [n, m] = input[0].split(' ').map(Number)
const sets = input.slice(1)

const init = (N) => {
  return Array(N).fill(0).map((_, idx) => idx)
}

const parent = init(n + 1)

const find = (x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent[x])
  }
  return parent[x]
}

const union = (a, b) => {
  const rootA = find(a)
  const rootB = find(b)

  if (rootA !== rootB) {
    parent[rootB] = rootA
  }
}

const result = []

sets.forEach((set) => {
  const [type, a, b] = set.split(' ').map(Number)

  if (type === 0) {
    union(a, b)

  } else if (type === 1) {
    result.push(find(a) === find(b) ? 'YES' : 'NO')
  }
})

console.log(result.join('\n'))
