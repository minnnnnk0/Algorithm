const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// n 배열 크기 m 업데이트 수 k 구간 합 쿼리 수
const [n, m, k] = input[0].split(' ').map(Number)
const arr = input.slice(1, n + 1).map((v) => BigInt(v))
const queries = input.slice(n + 1).map((v) => v.split(' ').map(Number))

class SegmentTree {
  constructor(arr) {
      this.n = arr.length
      this.tree = new Array(2 * this.n).fill(0n)
      this.build(arr)
  }

  build(arr) {
      for (let i = 0; i < this.n; i++) {
          this.tree[this.n + i] = arr[i]
      }

      for (let i = this.n - 1; i > 0; i--) {
          this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1]
      }
  }

  query(i, j) {
      i += this.n
      j += this.n
      let sum = 0n

      while (i <= j) {
          if (i % 2 === 1) {
              sum += this.tree[i]
              i++
          }
          if (j % 2 === 0) {
              sum += this.tree[j]
              j--
          }
          i = Math.floor(i / 2)
          j = Math.floor(j / 2)
      }
      return sum
  }
  
  update(idx, value) {
      idx += this.n
      this.tree[idx] = value

      while (idx > 1) {
          idx = Math.floor(idx / 2)
          this.tree[idx] = this.tree[2 * idx] + this.tree[2 * idx + 1]
      }
  }
}

const segTree = new SegmentTree(arr)

const answer = []

queries.forEach(([a, b, c]) => {

  // a === 1 업데이트
  if (a === 1) {
    segTree.update(b-1, BigInt(c))

  // a === 2 구간 합
  } else if (a === 2) {
    answer.push(segTree.query(b-1, c-1))
  }
})

console.log(answer.join('\n'))