const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 오른쪽, 아래로만 이동
// 도착지점에서 최대 최소 둘 다 구해야함
// (x, y)가 홀수 위치 = 연산자 / 짝수 위치 = 숫자

const n = Number(input[0])
const arr = input.splice(1).map((v) => v.split(' '))

const dx = [1, 0]
const dy = [0, 1]

let maxNum = -Infinity
let minNum = Infinity

const calc = (a, b, oper) => {
  switch (oper) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
  }
}

const dfs = (x, y, num, oper) => {

  // 도착 지점
  if (x === n-1 && y === n-1) {
    maxNum = Math.max(maxNum, num)
    minNum = Math.min(minNum, num)
    return
  }

  for (let i=0; i<2; i++) {

    const nx = x + dx[i]
    const ny = y + dy[i]

    if (nx >= n || ny >= n) continue

    if ((nx + ny) % 2 === 1) {
      dfs(nx, ny, num, arr[nx][ny]) // 연산자
    } else {
      // 숫자 처리
      dfs(nx, ny, calc(num, +arr[nx][ny], oper), null) // 숫자 처리 후 연산자 null
    }
  }
}

dfs(0, 0, +arr[0][0], null)
console.log(`${maxNum} ${minNum}`)
