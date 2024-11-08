const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// bfs
// 20 * 50 = 1000미터까진 행복할 수 있음

// 1. 1000미터 내에 목적지가 있는지 -> 있으면 바로 가면 댐
// 2. 없으면 1000미터 내에 있는 편의점을 찾으면서 가야 행복함
// 3. 편의점 위치를 큐에 넣고 방문 기록하기

  class Queue {
    constructor() {
        this.queue = []
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        this.queue[this.rear++] = value
    }

    dequeue() {
        return this.queue[this.front++]
    }

    isEmpty() {
        return this.front === this.rear
    }
}

const T = Number(input[0])
let idx = 1

// 입력
for (let tc=0; tc<T; tc++) {
  const N = Number(input[idx])
  idx++

  const start = input[idx].split(' ').map(Number)
  idx++

  const convenience = []
  for (let i=0; i<N; i++) {
    const conv = input[idx].split(' ').map(Number)
    convenience.push(conv)
    idx++
  }

  const end = input[idx].split(' ').map(Number)
  idx++

  // console.log(convenience)

  const q = new Queue()
  const visited = Array.from({length: N}).fill(false)
  let result = false // 갈 수 있는지 없는지

  q.enqueue(start)
  
  while (!q.isEmpty()) {
    const [x, y] = q.dequeue()

    // 현재에서 목적지까지 거리
    let diff = Math.abs(x-end[0]) + Math.abs(y-end[1])

    if (diff <= 1000) {
      console.log("happy")
      result = true
      break
    }

    // 편의점 찾기
    for (let i=0; i<N; i++) {

      if (visited[i]) continue

      const[nx, ny] = convenience[i]

      // 현재에서 편의점까지 거리
      let diff2 = Math.abs(x-nx) + Math.abs(y-ny)

      if (diff2 <= 1000) {
        q.enqueue([nx,ny])
        visited[i] = true
      }

    }
  }

  if (!result) {
    console.log("sad")
  }

}