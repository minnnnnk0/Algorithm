const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 체력 => 지금 칸과 다음 칸의 높이 차이
// 체력의 최댓값을 저장 -> minheap 

const N = Number(input[0])
const graph = input.slice(1).map((v) => v.split(' ').map(Number))

const dist = [[1, 0], [-1, 0], [0, 1], [0, -1]]

// 최소 힙
class MinHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  shift() {
    const min = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown(0)
    }
    return min
  }

  bubbleUp(index) {
    const element = this.heap[index]
    let parentIndex = Math.floor((index - 1) / 2)
    
    while (index > 0 && this.heap[parentIndex][0] > element[0]) {
      this.heap[index] = this.heap[parentIndex]
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
    this.heap[index] = element
  }

  bubbleDown(index) {
    const length = this.heap.length
    const element = this.heap[index]
    
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild[0] < element[0]) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[0] < element[0]) || 
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break

      this.heap[index] = this.heap[swap]
      index = swap
    }
    this.heap[index] = element
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}


const pq = new MinHeap()
const visited = Array.from({ length: N }, () => Array(N).fill(Infinity))

visited[0][0] = 0
pq.push([0, 0, 0]) // [체력, x, y]

while (!pq.isEmpty()) {
  const [power, x, y] = pq.shift()

  if (power > visited[x][y]) continue

  // 도착 지점
  if (x === N - 1 && y === N - 1) {
    console.log(power)
    break
  }

  for (const [dx, dy] of dist) {
    const nx = x + dx
    const ny = y + dy

    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {

      const diff = Math.abs(graph[nx][ny] - graph[x][y])
      const nextPower = Math.max(power, diff)

      if (nextPower < visited[nx][ny]) {
        visited[nx][ny] = nextPower
        pq.push([nextPower, nx, ny])
      }
    }
  }
}