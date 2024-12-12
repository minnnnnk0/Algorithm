const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

const [n, k] = input[0].split(' ').map(Number)
const meetings = input.slice(1).map(line => line.split(' ').map(Number)).sort((a, b) => b[1] - a[1])

const rooms = []
let ans = 0

while (meetings.length) {
  const [start, end] = meetings.pop()
  rooms.sort((a, b) => b - a)

  let check = false

  for (let i=0; i<rooms.length; i++) {
    if (rooms[i] < start) {
      rooms[i] = end
      ans++
      check = true
      break
    }
  }

  if (!check && rooms.length < k) {
    rooms.push(end)
    ans++
  }
}

console.log(ans)