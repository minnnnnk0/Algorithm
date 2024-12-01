const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [L, C] = input[0].split(' ').map(Number)
const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
const character = input[1].split(' ').sort()

function getCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  return arr.flatMap((v, i) =>
    getCombinations(arr.slice(i + 1), selectNum - 1).map((comb) => [v, ...comb])
  )
}

const combinations = getCombinations(character, L)
// 조건 체크
const check = combinations.filter((combination) => {

  // 모음 갯수
  const vowelCnt = combination.filter((v) => vowels.has(v)).length
  // 자음 갯수
  const consonantCnt = combination.length - vowelCnt

  // 모음 최소 1 자음 최소 2
  return vowelCnt >= 1 && consonantCnt >= 2
})

console.log(check.map((v) => v.join('')).join('\n'))