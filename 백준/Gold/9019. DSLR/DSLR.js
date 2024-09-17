const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const TC = Number(input[0])
const answer = []

const bfs = (start, alpha) => {
  let queue = [[start, ""]]
  let visited =  new Array(1000).fill(false)

  visited[start] = true

  while (queue.length !== 0) {
    let [num, order] = queue.shift()

    if (num === alpha) {
      answer.push(order)
      return
    }

    // D
    const D = num * 2 > 9999 ? (num * 2) % 10000 : num * 2
    if (!visited[D]) {
      visited[D] = true
      queue.push([D, order + "D"])
    }

    // S
    const S = num - 1 < 0 ? 9999 : num - 1
    if (!visited[S]) {
      visited[S] = true
      queue.push([S, order + "S"])
    }

    // L
    const L = Math.floor(num/1000) + (num % 1000) * 10
    if (!visited[L]) {
      visited[L] = true
      queue.push([L, order + "L"])
    }

    // R
    const R = Math.floor(num/10) + (num % 10) * 1000
    if (!visited[R]) {
      visited[R] = true
      queue.push([R, order + "R"])
    }
  }
}

for (let i=0; i<=TC; i++) {
  let [start, alpha] = input[i].split(" ").map(Number)
  bfs(start, alpha)
}


console.log(answer.join("\n"))