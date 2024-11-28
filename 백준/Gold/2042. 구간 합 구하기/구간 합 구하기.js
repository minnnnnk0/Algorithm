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
      this.tree = new Array(4 * this.n).fill(0)
      this.init(arr, 0, this.n-1, 1)
  }

  init(arr, start, end, node) {
    if (start === end) {
      this.tree[node] = arr[start]
      return this.tree[node]
    }
    const mid = Math.floor((start + end) / 2)
    this.tree[node] = this.init(arr, start, mid, node * 2) + this.init(arr, mid + 1, end, node * 2 + 1)
    return this.tree[node]
  }

  // 구간 합 (i부터 j까지)
  query(start, end, left, right, node) {

    if (right < start || end < left) return 0n
    if (left <= start && end <= right) return this.tree[node]

    const mid = Math.floor((start + end) / 2)
    return (
        this.query(start, mid, left, right, node * 2) +
        this.query(mid + 1, end, left, right, node * 2 + 1)
    )
}
  
  // 값 업데이트
  update(start, end, idx, diff, node) {

    if (idx < start || idx > end) return

    // 값 갱신
    this.tree[node] += diff

    if (start !== end) {
        const mid = Math.floor((start + end) / 2)
        this.update(start, mid, idx, diff, node * 2)
        this.update(mid + 1, end, idx, diff, node * 2 + 1)
    }
  }
}

const segTree = new SegmentTree(arr)

const answer = []

for (const [a, b, c] of queries) {
  if (a === 1) {
      
    // 업데이트 쿼리
    const idx = b - 1
    const newValue = BigInt(c)
    const diff = newValue - arr[idx]
    arr[idx] = newValue
    segTree.update(0, n - 1, idx, diff, 1)
  
  } else if (a === 2) {
    // 구간 합 쿼리
    const left = b - 1
    const right = c - 1
    answer.push(segTree.query(0, n - 1, left, right, 1))
  }
}

console.log(answer.join('\n'))