const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

  const [[N, K], arr] = input.map(v => v.split(' ').map(Number))

  const cnt = {}
  let maxLen = 0
  let i = 0
  let j = 0
  
  while (j < N) {

    cnt[arr[j]] = (cnt[arr[j]] || 0) + 1

      while (cnt[arr[j]] > K) {
        cnt[arr[i]]--
          if (cnt[arr[i]] === 0) {
              delete cnt[arr[i]]
          }
          i++
      }
      // 최대 길이
      maxLen = Math.max(maxLen, j - i + 1)
      j++
  }
  
  console.log(maxLen)