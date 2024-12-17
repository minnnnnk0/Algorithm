const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const G = Number(input)
let results = []
let y = 1
let x = 2

while (x <= 50000) {
  const diff = x * x - y * y
  if (diff === G) {
    results.push(x)
    y++
    x++
  } else if (diff < G) {
    x++
  } else {
    y++
  }
}

if (results.length === 0) {
  console.log(-1)
} else {
  results.forEach((v) => console.log(v))
}