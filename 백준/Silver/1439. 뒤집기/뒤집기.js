const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  // .split('\n');


  const one = input.split("0").filter((num) => num !== "")
  const zero = input.split("1").filter((num) => num !== "")

  console.log(Math.min(one.length, zero.length))