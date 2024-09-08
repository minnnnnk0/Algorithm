const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// N 사다리, M 뱀
const [N, M] = input[0].split(' ').map(Number);
const ladder = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const snake = input.slice(N + 1).map((e) => e.split(' ').map(Number));

const visited = Array(101).fill(false); // 방문 기록
const arr = Array(101).fill(0); // 이동 여부 기록 

// 사다리 시작점 도착점
for (let [x, y] of ladder) {
    arr[x] = y;
}
// 뱀 시작점 도착점
for (let [u, v] of snake) {
    arr[u] = v;
}

let answer = bfs(1, 0);
console.log(answer);

// bfs 탐색
function bfs(start, count) {
    const queue = [[start, count]]; // 시작점, 주사위 던진 횟수
    let front = 0;
    visited[start] = true; // 방문 체크

    while (queue.length > front) {
        // v 현재 위치, diceCnt 주사위 던진 횟수
        const [v, diceCnt] = queue[front++];
        for (let i = 1; i <= 6; i++) {
            let next = v + i; // 다음 위치
            // 100이면 1 리턴하고 끝
            if (next === 100) {
                return diceCnt + 1;
            } else if (next < 100) {
                // 사다리 혹은 뱀일 경우 해당 위치로 이동
                if (arr[next] !== 0) {
                    next = arr[next];
                }
                if (!visited[next]) { // 방문하지 않은 위치라면
                    queue.push([next, diceCnt + 1]);
                    visited[next] = true;
                }
            }
        }
    }
}