const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// 서류 기준 -> 오름차순 -> 면접만 비교해서 구하면 됌
// 면접 등수 -> 지금까지 면접 순위보다 크면 불합격 / 작으면 합격

const tc = Number(input[0])
const results = []

let idx = 1

for (let i=0; i<tc; i++) {
  const n = Number(input[idx]) // n 지원자 수
  const applicants = []

  for (let j=0; j<n; j++) {
    const [docsRank, interviewRank] = input[idx+1+j].split(' ').map(Number)
    applicants.push([docsRank, interviewRank])
  }

  // 서류 심사 기준으로 오름차순
  applicants.sort((a, b) => a[0] - b[0])

  let cnt = 1
  let minRank = applicants[0][1]

  for (let j=1; j<n; j++) {
    if (applicants[j][1] >= minRank) continue
    cnt++
    minRank = applicants[j][1]
  }
  results.push(cnt)
  idx += n+1
}

console.log(results.join('\n'))