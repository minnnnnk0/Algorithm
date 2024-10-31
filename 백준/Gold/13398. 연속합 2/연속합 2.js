const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number)

// 숫자를 뺀 배열 , 안 뺀 배열 두개를 선언해서 풀이
// const dp = new Array(N).fill(0)

// dp[0] = nums[0]

// for (let i=1; i<N; i++) {
//   dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
// }

const dp = Array.from({ length: N }, () => [0, 0])
// console.log(dp)

// 숫자를 제거하지 않았을 때 연속합 dp[i][0]
// 숫자를 하나 제거헀을 때 연속합 dp[i][1]

dp[0][0] = arr[0]
dp[0][1] = arr[0]
let maxSum = arr[0]

for (let i=1; i<N; i++) {

  dp[i][0] = Math.max(dp[i-1][0] + arr[i], arr[i])
  dp[i][1] = Math.max(dp[i-1][0], dp[i-1][1] + arr[i])
  maxSum = Math.max(maxSum, dp[i][0], dp[i][1])
}

console.log(maxSum)