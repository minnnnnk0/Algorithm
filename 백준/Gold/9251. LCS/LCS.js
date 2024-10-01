const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let string1 = input[0].split('');
let string2 = input[1].split('');

let arr = Array.from(Array(input[0].length + 1), () =>
  new Array(input[1].length + 1).fill(0)
);

for (let i = 1; i < string1.length + 1; i++) {
  for (let j = 1; j < string2.length + 1; j++) {
    if (string1[i - 1] === string2[j - 1]) {
      arr[i][j] = arr[i - 1][j - 1] + 1;
    } else {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
    }
  }
}

console.log(arr[arr.length - 1][arr[0].length - 1]);
