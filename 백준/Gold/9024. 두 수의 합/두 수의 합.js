const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const TC = parseInt(input[0]);

let result = []

for (let i = 1; i < input.length; i += 2) {
  const [N, K] = input[i].split(' ').map(Number);
  const nums = input[i + 1].split(' ').map(Number);

  nums.sort((a, b) => a-b)

  let left = 0
  let right = N-1
  let cnt = 0

  let temp = 1000000000 // 가까운 수 갱신  

  while(left < right) {
    const sum = nums[left] + nums[right]
    const diff = Math.abs(K - sum)

    // 가까운 수 업뎃
    if (diff === temp) {
      cnt++
    } else if (diff < temp) {
      temp = diff
      cnt = 1
    }

    // 오왼 이동
    if (sum < K) {
      left += 1
    } else {
      right -= 1
    }
  }
  result.push(cnt)
}
console.log(result.join('\n'))