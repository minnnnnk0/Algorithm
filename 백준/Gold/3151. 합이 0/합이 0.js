const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 중복x 조합
// 투포인터
// 오름차순 정렬

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
let cnt = 0

arr.sort((a, b) => a - b)

for (let i=0; i<n-2; i++) {

  let left = i+1
  let right = n-1

  while (left < right) {
    const sum = arr[i] + arr[left] + arr[right]

    if (sum === 0) {

      // (right - left + 1) * (right - left) / 2
      if (arr[left] === arr[right]) {
        cnt += (right - left + 1) * (right - left) / 2
        break
      }

      let leftCnt = 1
      let rightCnt = 1

      // left+1 < right & arr[left] === arr[left+1]
      // right-1 > left & arr[right] === arr[right-1]
      while (left+1 < right && arr[left] === arr[left+1]) {
        leftCnt++
        left++
      }
      while (right-1 > left && arr[right] === arr[right-1]) {
        rightCnt++
        right--
      }

      cnt += (leftCnt * rightCnt)
      left++
      right--

    } else if (sum < 0) {
      left++

    } else {
      right--
    }
  }
}

console.log(cnt)