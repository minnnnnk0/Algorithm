const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// console.log(arr)

let cnt = 0;
let sum = 0;

let idx = 0;

for (let i=0; i<n; i++) {
  sum += arr[i];

  while (sum > m) {
    sum -= arr[idx++]
    // idx++
  }

  if (sum === m) {
    cnt++;
  }
}

console.log(cnt);
