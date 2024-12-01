const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const channel = Number(input[0])
const brokenCnt = Number(input[1])
const buttons =  brokenCnt > 0 ? input[2].split(' ').map(Number) : [] // 고장난 버튼
// 안 고장난 버튼
const canUseBtn = Array.from({ length: 10 }, (_, i) => i).filter((v) => !buttons.includes(v))

let minClick = Math.abs(channel - 100)

for (let i=0; i<=999999; i++) {
  const str = String(i)
  let check = true

  for (let s of str) {
    if (!canUseBtn.includes(Number(s))) {
      check = false
      break
    }
  }

  if (check) {
    // 숫자 버튼 클릭 + 채널 이동
    const clickCnt = str.length + Math.abs(i - channel)
    minClick = Math.min(minClick, clickCnt)
  }
}
console.log(minClick)