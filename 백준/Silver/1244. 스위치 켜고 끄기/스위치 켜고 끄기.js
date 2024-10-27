const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const switchCnt = Number(input[0]);
let switches = input[1].split(' ').map(Number);
const studentCnt = Number(input[2]);
const students = input.slice(3).map((v) => v.split(' ').map(Number));

// 남 : 스위치 번호의 배수의 스위치를 모두 반전
const maleFunc = (num) => {
  for (let i = num - 1; i < switchCnt; i += num) {
    switches[i] = switches[i] === 1 ? 0 : 1;
  }
};

// 여 : 대칭 범위 안에 있는 스위치를 모두 반전
// 중간 = num - 1
const femaleFunc = (num) => {
  let right = num;
  let left = num - 2;

  switches[num - 1] = switches[num - 1] === 1 ? 0 : 1;

  // 범위 늘리면서 확인해야하니까 while
  while (left >= 0 && right < switchCnt && switches[left] === switches[right]) {
    switches[left] = switches[left] === 1 ? 0 : 1;
    switches[right] = switches[right] === 1 ? 0 : 1;
    left -= 1;
    right += 1;
  }
};

students.forEach(([gender, num]) => {
  if (gender === 1) {
    maleFunc(num);
  } else {
    femaleFunc(num);
  }
});

// console.log(switches)

let answer = '';
switches.forEach((value, index) => {
  answer += value + ' ';

  if((index + 1) % 20 === 0) {
    answer = answer.trim() + '\n'
  }
});

console.log(answer);
