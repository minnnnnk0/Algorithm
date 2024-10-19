const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

  const [n, l] = input[0].split(' ').map(Number);
  const puddles = input.slice(1).map((l) => l.split(' ').map(Number));

  puddles.sort((a, b) => a[0] - b[0])

  // console.log(puddles)

  let now = 0
  let cnt = 0

  // 1 웅덩 = start ~ end
  for (let [start, end] of puddles) {

    if (now < start) {
        now = start
    }

    if (now > end) {
        continue // 웅덩이를 지난 경우
    }

    let lngs = end - now // 웅덩이 길이
    // cnt += Math.ceil(lngs / l) // 웅덩이에 필요한 최소 널빤지 갯수 (올림으로 처리)

    let coverCnt = Math.ceil(lngs / l)

    cnt += coverCnt
    now += coverCnt * l // 웅덩이 덮고 현재 위치 이동
 
  }

  console.log(cnt)