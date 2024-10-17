const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i in input) {

  let tc = input[i].split("")
  let arr = []
  
  if(tc[0]==='-') {
      break
  }

  // 일단 안정적인 문자열을 구하자 -> 빈문자열로 만들기
  for (let j in tc) {
    
    if (tc[j] === "{") {
      arr.push(tc[j])
    } else {

      if (arr[arr.length -1] === "{") {
        arr.pop(tc[j])
      } else {
        arr.push(tc[j])
      }
    }
  }

  // console.log(arr)
  let cnt = 0

  while (arr.length) {

    // 같은 모양만 남으면 하나만 뒤집으면 됌 +1
    // 아니면 둘다 뒤집어서 괄호를 맞춰야함 +2
    let temp = arr.pop()

    if (temp === arr[arr.length-1]) {
      arr.pop()
      cnt += 1
    } else {
      arr.pop()
      cnt += 2
    }
  }
  // 1. 2
  // 2. 0
  // 3. 1
  console.log(Number(i)+1 + '. ' + cnt)
}

