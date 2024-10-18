const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

  let [N] = input[0].split(" ")

  let S = new Set()
  let answer = 0
  
  for(let i=1; i<=N; i++) {
      S.add(input[i])
  }
  // console.log(S)

  for (let i=Number(N)+1; i<input.length; i++) {
      if(S.has(input[i])) {
          answer++
      }
  }
  
  console.log(answer)