const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input.shift().split(' ').map(Number)
const arr = input.splice(0, N).map((v) => v.split('').map(Number))

const dist = [[0, 1], [0, -1], [1, 0], [-1, 0]]
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(K + 1).fill(Infinity)))

visited[0][0][0] = 1

class Node {
  constructor(value) {
    this.cur = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.rear = null
    this.length = 0
  }

  push(value) {
    const node = new Node(value)
    if (this.length === 0) {
      this.front = node
    } else {
      this.rear.next = node
    }
    this.rear = node
    this.length++
  }

  shift() {
    if (this.length === 0) return null
    const returnValue = this.front.cur
    this.front = this.front.next
    this.length--
    return returnValue
  }

  isEmpty() {
    return this.length === 0
  }
}

const q = new Queue()
q.push([0, 0, 0])

while (!q.isEmpty()) {
  const [x, y, wall] = q.shift()

  for (let [dx, dy] of dist) {
    const nx = x + dx
    const ny = y + dy

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (arr[nx][ny] === 1) {
        if (
          wall + 1 <= K &&
          visited[nx][ny][wall + 1] > visited[x][y][wall] + 1
        ) {
          visited[nx][ny][wall + 1] = visited[x][y][wall] + 1;
          q.push([nx, ny, wall + 1])
        }
      } else if (arr[nx][ny] === 0) {
        if (visited[nx][ny][wall] > visited[x][y][wall] + 1) {
          visited[nx][ny][wall] = visited[x][y][wall] + 1
          q.push([nx, ny, wall])
        }
      }
    }
  }
}

let answer = Math.min(...visited[N - 1][M - 1]) === Infinity ? -1 : Math.min(...visited[N - 1][M - 1])

console.log(answer)
