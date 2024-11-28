const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

  const n = Number(input[0])
  const m = Number(input[1])
  const connections = input.slice(2, 2 + n).map((line) => line.split(' ').map(Number))
  const plan = input[2 + n].split(' ').map(Number)

  const parent = Array(n + 1).fill(0).map((_, idx) => idx)
  
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
    }
  }

  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      if (connections[i][j] === 1) {
        union(parent, i + 1, j + 1)
      }
    }
  }

const root = find(parent, plan[0])
const check = plan.every((city) => find(parent, city) === root)

console.log(check ? 'YES' : 'NO')
