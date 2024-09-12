const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, r, c] = require('fs').readFileSync(filePath).toString().trim().split(' ').map((v) => +v);

// console.log(N, r, c)

let res = 0; // 방문한 칸 수
const func = (row, col, size) => {
  if (row === r && col === c) {
    console.log(res);
    return;
  }

  if ( row <= r && r < row + size && col <= c && col + size > c ) {
    size = parseInt(size / 2);
    func(row, col, size);
    func(row, col + size, size);
    func(row + size, col, size);
    func(row + size, col + size, size);
  } else {
    res += size * size;
  }
};

// 배열의 크기 2^N * 2^N
func(0, 0, Math.pow(2, N));
