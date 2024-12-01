const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

let idx = 0
const TC = +input[idx++]

const result = []

for (let i=0; i<TC; i++) {

  const n = +input[idx++]
  const numbers = []

  for (let j=0; j<n; j++) {
    numbers.push(input[idx++])
  }

  numbers.sort()
  let check = true

  // 접두어 검사
  for (let j=1; j<n; j++) {

    if (numbers[j].slice(0, numbers[j-1].length) === numbers[j-1]) {
      check = false
      break
    }
  }
  result.push(check ? "YES" : "NO")
}

console.log(result.join("\n"))