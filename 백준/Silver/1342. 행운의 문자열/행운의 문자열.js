const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(filePath).toString().trim()

const chars = input.split('')
const charCount = {}

for (const char of chars) {
  charCount[char] = (charCount[char] || 0) + 1
}

let cnt = 0

const func = (prevChar, remainLen) => {

  // 모든 문자
  if (remainLen === 0) {
    cnt++
    return
  }

  for (const char in charCount) {
    if (charCount[char] <= 0 || char === prevChar) continue

    charCount[char]--
    func(char, remainLen-1)
    charCount[char]++
    
  }
}

func('', chars.length)
console.log(cnt)
