const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

// (숫자, 빈도) 오름차순 빈도 > 같으면 숫자
// 100개 배열
// A[r][c]의 값이 k가 몇초 or -1

let [inputLine, ...maps] = input
inputLine = inputLine.split(' ')
const [targetValue, targetPosition] = [+inputLine.pop(), inputLine.map(Number)]
maps = maps.map((row) => row.split(' ').map(Number))

const Rfunc = (arr) => {
  const result = cntFunc(arr)
  const maxLen = Math.max(...result.map((row) => row.length))

  return result.map((row) => {
    while (row.length < maxLen) {
      row.push(0)
    }
    return row
  })
}

const Cfunc = (arr) => {
  const changed = Array.from({ length: arr[0].length }, () => [])

  arr.forEach((row, i) => {
    row.forEach((val, j) => {
      changed[j][i] = val
    })
  })

  const result = cntFunc(changed)
  const maxLen = Math.max(...result.map((row) => row.length))
  const reChanged = Array.from({ length: maxLen }, () => Array(result.length).fill(0))

  result.forEach((row, i) => {
    row.forEach((val, j) => {
      reChanged[j][i] = val
    })
  })

  return reChanged
}

const checkFunc = (arr) => {
  const [changeRow, changeCol] = targetPosition
  if (
    arr.length >= changeRow &&
    arr[0].length >= changeCol &&
    arr[changeRow - 1][changeCol - 1] === targetValue
  ) {
    console.log(oper) 
    return true
  }
  return false
}

const cntFunc = (arr) => {
  return arr.map((row) => {
    const cnt = {}

    row.forEach((val) => {
      if (val !== 0) cnt[val] = (cnt[val] || 0) + 1
    })

    return Object.entries(cnt)
      .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]))
      .flat()
      .map(Number)
  })
}

let oper = 0
while (oper < 101) {
  if (checkFunc(maps)) {
    return
  }

  if (maps.length >= maps[0].length) {
    maps = Rfunc(maps)
  } else {
    maps = Cfunc(maps)
  }

  oper++
}

console.log(-1)