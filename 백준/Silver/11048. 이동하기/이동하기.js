const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n').map((v) => v.split(' ').map(Number));

const [N, M] = input.shift()
let arr = Array.from(Array(N+1), () => Array(M+1).fill(0))

// arr[i][j-1]
// arr[i-1][j]
// arr[i-1][j-1]
for (let i=1; i<=N; i++) {
	for (let j=1; j<=M; j++) {
		arr[i][j] = Math.max(arr[i][j-1], arr[i-1][j], arr[i-1][j-1]) + input[i-1][j-1]
	}
}

console.log(arr[N][M])