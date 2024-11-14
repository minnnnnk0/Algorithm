const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [N, S] = input[0].split(' ').map(Number) // N 원소 개수 S 목표 합
const nums = input[1].split(' ').map(Number)

let cnt = 0

const dfs = (idx, sum) => {
  if (idx === N) {

    if (sum !== S) return

    cnt++
    return
  }

  dfs(idx + 1, sum)
  dfs(idx + 1, sum+nums[idx])
}

dfs(0, 0)
console.log(S === 0? cnt-1 : cnt)
