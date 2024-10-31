const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n').map(Number)

  const N = input[0]

  const dp = new Array(N + 1)
  
  // 시작점 dp[0]은 포함 X
  dp[1] = input[1]
  dp[2] = dp[1] + input[2]
  dp[3] = Math.max(input[1], input[2]) + input[3]

  // console.log(dp)
  
  // -3, -1, 0
  // -2, 0
  for (let i=4; i<=N; i++) {
    dp[i] = Math.max(dp[i-3] + input[i-1] + input[i], dp[i-2] + input[i])
  }
  
  console.log(dp[N])