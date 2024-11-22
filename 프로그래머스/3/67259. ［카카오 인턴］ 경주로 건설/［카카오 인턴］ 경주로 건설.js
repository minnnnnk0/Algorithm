// bfs 최소비용
// 직선 100 코너 500
// 직선 or 직선 + 코너
// visited + 방향 -> 3차원으로

function solution(board) {
    
    const N = board.length
    const dist = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    
    const visited = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(4).fill(Infinity)))
    
    const q = [[0, 0, 0, -1]] // x, y, cost, dist
    
    while (q.length > 0) {
            
        const [x, y, curCost, curDist] = q.shift()
        
        // i => 다음 방향
        // dist[i] = [dx, dy]
        for (let i=0; i<4; i++) {
            
            const nx = x + dist[i][0]
            const ny = y + dist[i][1]

            // 범위 밖 or 장애물
            if (nx < 0 || ny < 0 || nx >= N || ny >= N || board[nx][ny] === 1) continue

            // 직선 또는 직선+코너 비용 계산
            const newCost = curCost + (curDist !== -1  && curDist !== i ? (100 + 500) : 100)

            if (newCost >= visited[nx][ny][i]) continue
            
            // 최소비용 업뎃    
            visited[nx][ny][i] = newCost
            q.push([nx, ny, newCost, i])
            
        }
    }
    
    let answer = Math.min(...visited[N-1][N-1])
    return answer
}