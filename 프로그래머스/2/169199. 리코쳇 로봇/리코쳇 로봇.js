function solution(board) {
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, 1, -1]
    
    const n = board.length
    const m = board[0].length
    
    const queue = []
    const map = Array.from({ length: n }, () => Array(m).fill(Infinity))
    
    // 시작 위치
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            
            if (board[i][j] === 'R') {
                queue.push([i, j, 0])
                map[i][j] = 0
            }
        }
    }
    
    while (queue.length) {
        const [x, y, c] = queue.shift()

        if (board[x][y] === 'G') {
            return c
        }
        
        for (let i=0; i<4; i++) {
            let nx = x
            let ny = y
            
            while (
                nx + dx[i] >= 0 && nx + dx[i] < n && ny + dy[i] >= 0 && ny + dy[i] < m && board[nx + dx[i]][ny + dy[i]] !== 'D'
            ) {
                nx += dx[i]
                ny += dy[i]
            }
            
            if (map[nx][ny] > c+1) {
                map[nx][ny] = c+1
                queue.push([nx, ny, c+1])
            }
        }
    }
    
    return -1
}
