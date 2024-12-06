const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0]
const M = +input[1]
const S = input[2]

let cnt = 0 // 패턴 갯수

const func = (input) => {
  for(let i=0; i < M; i++) {
    if (S[i] === 'I') {
      let num = 0

      while (S[i+1] === 'O' && S[i+2] === 'I') {
        i += 2 // 다음 위치로 이동
        num++

        if(num === N) {
          cnt++
          num-- 
        }
      }
    }
  }
  console.log(cnt)
}

func(S)