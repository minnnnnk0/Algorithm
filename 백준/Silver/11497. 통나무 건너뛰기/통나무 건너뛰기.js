const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

let index = 1
const results = []

while (index < input.length) {
  const n = +input[index]
  const arr = input[index + 1].split(' ').map(Number)

  arr.sort((a, b) => a-b)

  let maxLen = 0
  for (let i=0; i<n-2; i++) {
    maxLen = Math.max(maxLen, Math.abs(arr[i] - arr[i + 2]))
  }
  results.push(maxLen)
  index += 2
}
console.log(results.join('\n'))