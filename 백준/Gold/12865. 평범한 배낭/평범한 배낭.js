const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number)
// console.log(n, k)

// dp로 풀기
let arr = Array(k+1).fill(0)

for (let i=1; i<=n; i++) {
  // w 무게 v 가치
  const [w, v] = input[i].split(" ").map(Number)

  // 역순으로 순회해서 시간초과 방지...
  for (let j=k; j >= w; j--) {
    // 지금 최고 가치 vs 새 물건 추가 시 가치
    arr[j] = Math.max(arr[j], arr[j-w] + v)
  }
}

console.log(arr[k])