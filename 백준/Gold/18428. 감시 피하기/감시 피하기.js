const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const N = +input[0]
const arr = input.splice(1).map((v) => v.split(' '))

const teacher = []
const empty = []

const dist = [[-1, 0], [1, 0], [0, -1], [0, 1]]

for (let i=0; i<N; i++) {
  for (let j=0; j<N; j++) {

    if(arr[i][j] === 'T') {
      teacher.push([i, j])
    } else if (arr[i][j] === 'X') {
      empty.push([i, j])
    }
  }
}

const combinations = getCombinations(empty, 3)

function getCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v])
  return arr.flatMap((v, i) =>
    getCombinations(arr.slice(i + 1), selectNum - 1).map((comb) => [v, ...comb])
  )
}

for (const comb of combinations) {

  // 장애물 설치 할게
  for (const [x, y] of comb) {
    arr[x][y] = 'O'
  }

  let safety = true

  for (const [x, y] of teacher) {
    for (const [dx, dy] of dist) {

      let nx = x
      let ny = y

      while (true) {
        nx += dx
        ny += dy

        if (nx < 0 || nx >= N || ny < 0 || ny >= N || arr[nx][ny] === 'O') break

        // 감시 당해버림
        if (arr[nx][ny] === 'S') {
          safety = false
          break
        }
      }

      // 다른 방향 -> 안 봐도 됌
      if (!safety) break
    }

    // 다른 선생 -> 감시 안 해도 됌
    if (!safety) break
  }

  // 모든 학생이 감시 피하는 경우
  if (safety) {
    console.log('YES')
    return
  }

  // 원상복구
  for(const [x, y] of comb) {
    arr[x][y] = 'X'
  }
}

console.log('NO')
