const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
 
const n = parseInt(input[0])
let arr = input[1].split('')

const color = { R: 'G', G: 'B', B: 'R' }

const changeColor = (idx, arr) => {

  arr[idx] = color[arr[idx]]
  arr[idx+1] = color[arr[idx+1]]
  arr[idx+2] = color[arr[idx+2]]

  return arr
}

const change = (arr) => {
  let cnt = 0

  // 첫 번째 전구와 같은 색
  for (let i=1; i<n-2; i++) {

    while (arr[0] !== arr[i]) {
      cnt++
      arr = changeColor(i, arr)
    }
  }

  // 모든 전구가 똑같은 색인지 
  if (arr[0] === arr[n - 1] && arr[0] === arr[n - 2]) {

    return cnt
  }
  return Infinity
}

let answer = Infinity

for (let i=0; i<3; i++) {

  // let temp = change([...arr])
  answer = Math.min(answer, change([...arr]) + i)
  arr = changeColor(0, arr)

}

console.log(answer === Infinity ? -1 : answer)
