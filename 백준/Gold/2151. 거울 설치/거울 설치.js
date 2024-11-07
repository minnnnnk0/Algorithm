const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// #에서 #으로 가는 bfs
// 설치한 거울의 수도 같이 저장해야함
// 최소 거울 설치로 업뎃하면서 탐색
// 이때 빛의 방향에 따라 거울을 만나면 방향 전환
// 예) 빛 북쪽 -> 거울 -> 동 or 서 (거울이 사선인데 / 아님  \에 따라 두가지) or 북 (거울 설치 안 한 경우)

class Node {
  constructor(x, y, light, cnt) {
    this.x = x
    this.y = y
    this.light = light
    this.cnt = cnt
  }
}

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
      let smallerChild = leftChild

      if (rightChild < this.heap.length && this.heap[rightChild].cnt < this.heap[leftChild].cnt) {
        smallerChild = rightChild
      }

      if (this.heap[index].cnt <= this.heap[smallerChild].cnt) break
      [this.heap[index], this.heap[smallerChild]] = [this.heap[smallerChild], this.heap[index]]
      index = smallerChild
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

const n = Number(input[0])
const graph = input.slice(1).map((v) => v.split(''))

const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]

const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => Array(4).fill(Infinity)))

let start = null, end = null

// 시작 거울, 끝 거울 찾기
for (let i=0; i<n; i++) {
  for (let j=0; j<n; j++) {

    if (graph[i][j] !== "#") continue

    if (!start) {
      start = new Node(i, j, -1, 0)
    } else {
      end = new Node(i, j, -1, 0)
      break
    }
  }
  // 끝 거울 위치 찾으면 종료
  if (end) break
}

const pq = new MinHeap()

for (let i=0; i<4; i++) {
  const nx = start.x + dx[i]
  const ny = start.y + dy[i]

  if (nx < 0 || ny < 0 || nx >= n || ny >= n || graph[nx][ny] === '*') continue

  pq.insert(new Node(start.x, start.y, i, 0))
  visited[start.x][start.y][i] = 0
}
// visited[start.x][start.y] = 0

let answer = -1

while (!pq.isEmpty()) {
  const now = pq.extractMin()

  // 도착
  if (now.x === end.x && now.y === end.y) {
    answer = now.cnt
    break
  }

  const nx = now.x + dx[now.light]
  const ny = now.y + dy[now.light]

  if (nx < 0 || ny < 0 || nx >= n || ny >= n || graph[nx][ny] === '*') continue

  if (visited[nx][ny][now.light] <= now.cnt) continue
  
  visited[nx][ny][now.light] = now.cnt
  pq.insert(new Node(nx, ny, now.light, now.cnt))
  
  // 거울 설치 가능 -> 방향 바꾸기
  if (graph[nx][ny] !== '!') continue

  for (const newLight of [(now.light + 1) % 4, (now.light + 3) % 4]) {
    
    if (visited[nx][ny][newLight] < now.cnt + 1) continue
    
    visited[nx][ny][newLight] = now.cnt + 1
    pq.insert(new Node(nx, ny, newLight, now.cnt + 1))
    
  }
}
console.log(answer)
