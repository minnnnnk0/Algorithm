const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

let arr = new Set()

for (let i=1; i<input.length; i++) {
  const [name, state] = input[i].split(' ')

  if (state === 'enter') {
    arr.add(name)
  } else if (state === 'leave') {
    arr.delete(name)
  }
}

let answer = Array.from(arr).sort().reverse()

console.log(answer.join('\n'))