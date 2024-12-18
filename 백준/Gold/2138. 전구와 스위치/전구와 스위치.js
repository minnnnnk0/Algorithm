const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const n = Number(input[0])
const initial = input[1].split('').map(Number)
const target = input[2].split('').map(Number)

function toggle(state, index) {
  for (let i=index-1; i<=index+1; i++) {
    if (i >= 0 && i < n) {
      state[i] = 1 - state[i]
    }
  }
}

// 첫 번째 전구를 누르지 않는
let state1 = [...initial]
let cnt1 = 0
for (let i=1; i<n; i++) {
  if (state1[i-1] !== target[i-1]) {
    toggle(state1, i)
    cnt1++
  }
}
if (state1[n-1] !== target[n-1]) cnt1 = Infinity

// 첫 번째 전구를 누르는
let state2 = [...initial]
let cnt2 = 1
toggle(state2, 0)
for (let i=1; i<n; i++) {
  if (state2[i-1] !== target[i-1]) {
    toggle(state2, i)
    cnt2++
  }
}
if (state2[n-1] !== target[n-1]) cnt2 = Infinity

const answer = Math.min(cnt1, cnt2)
console.log(answer === Infinity ? -1 : answer)