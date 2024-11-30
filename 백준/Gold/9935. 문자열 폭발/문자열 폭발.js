const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const string = input[0]
const bomb = input[1]

const explosion = (string, bomb) => {

  const stack = []
  const len = bomb.length

  for (const str of string) {
    stack.push(str)

    // 스택 마지막 문자 === 폭발 -> 제거
    if (stack.length < len) continue
    let check = false

    for (let i=0; i<len; i++) {
      if(stack[stack.length - len + i] !== bomb[i]) {
        check = true
        break
      }
    }

    if (check) continue
    for (let i=0; i<len; i++) {
      stack.pop()
    } 
  }
  return stack.length === 0 ? 'FRULA' : stack.join('')
}

console.log(explosion(string, bomb))