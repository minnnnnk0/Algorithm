const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [n, ...arr] = input.map(Number)

arr.sort((a, b) => a-b)

let answer = []
for (let i=0; i<arr.length; i++) {
  let temp = n * arr[i]
  answer.push(temp)
  n--
}

let result  = Math.max(...answer)
console.log(result)