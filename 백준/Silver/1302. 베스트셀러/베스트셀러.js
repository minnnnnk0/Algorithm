const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

  const [N, ...arr] = input
  let maxCnt = 0
  let maxName = ""
  const book = {}
  
  arr.forEach(name => {
      if (book[name]) book[name]++
      else book[name] = 1
  
      // 최대 판매량
      if (book[name] > maxCnt) {
        maxCnt = book[name]
          maxName = name
      } else if (book[name] === maxCnt && name < maxName) {
          maxName = name
      }
  })
  
  console.log(maxName)