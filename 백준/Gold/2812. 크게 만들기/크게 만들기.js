const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// N 숫자에서 K개를 지웠을 때 가장 큰 수
// 스택

const [n, k] = input[0].split(' ').map(Number)
const nums = input[1].split('').map(Number)

const answer = []

let removeCnt = k // 제거 가능한 횟수

for (let i=0; i<n; i++) {

  while (answer.length > 0 && nums[i] > answer[answer.length - 1] && removeCnt > 0) {
    answer.pop()
    removeCnt--
  }

  answer.push(nums[i])
}

// removeCnt > 0 인 경우가 생긴다면?
// 남은거 중에 제거 가능 횟수만큼 자름
let result = answer.slice(0, n-k)
console.log(result.join(''))
