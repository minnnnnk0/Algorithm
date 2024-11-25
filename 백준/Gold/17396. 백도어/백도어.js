const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 다익스트라 최단 경로
// 그래프 -> 인접 리스트

const [n, m] = input[0].split(' ').map(Number)
const visibility = input[1].split(' ').map(Number)
const edge = input.slice(2).map((v) => v.split(' ').map(Number))

const graph = Array.from({ length: n }, () => [])

edge.forEach(([u, v, w]) => {
  graph[u].push([v, w])
  graph[v].push([u, w])
})

class MinHeap {
  constructor() {
    this.heap = []
  }
  insert(item) {
    this.heap.push(item)
    this.bubbleUp()
  }
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown()
    return min
  }
  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[index].cnt >= this.heap[parentIndex].cnt) break
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
      index = parentIndex
    }
  }
  bubbleDown() {
    let index = 0
    while (index * 2 + 1 < this.heap.length) {
      let leftChild = index * 2 + 1
      let rightChild = index * 2 + 2
      let priorityChild = leftChild
      if (rightChild < this.heap.length && this.heap[rightChild].cnt < this.heap[leftChild].cnt) {
        priorityChild = rightChild
      }
      if (this.heap[index].cnt <= this.heap[priorityChild].cnt) break
      [this.heap[index], this.heap[priorityChild]] = [this.heap[priorityChild], this.heap[index]]
      index = priorityChild
    }
  }
  isEmpty() {
    return this.heap.length === 0
  }
}

const dist = Array(n).fill(Infinity)
const pq = new MinHeap()
pq.insert({ node: 0, cnt: 0 })
dist[0] = 0

while (!pq.isEmpty()) {
  const { node: curNode, cnt: curDist } = pq.extractMin()

  if (curDist > dist[curNode]) continue

  for (const [nextNode, w] of graph[curNode]) {
    // 적
    if (nextNode !== n - 1 && visibility[nextNode] === 1) continue

    const newDist = curDist + w

    if (newDist >= dist[nextNode]) continue

    dist[nextNode] = newDist
    pq.insert({ node: nextNode, cnt: newDist })
  }
}

console.log(dist[n - 1] === Infinity ? -1 : dist[n - 1])
