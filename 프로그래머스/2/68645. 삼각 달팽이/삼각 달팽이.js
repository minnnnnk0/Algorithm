function solution(n) {
    const dx = [0, 1, -1]
    const dy = [1, 0, -1]
    const arr = [...new Array(n)].map((v) => new Array(n).fill(0))
    
    let x = 0
    let y = 0
    let cnt = 1
    let idx = 0
    
    while(1) {
        arr[y][x] = cnt++
        const [nx, ny] = [x + dx[idx], y + dy[idx]]
        
        if (0<= nx && nx < n && 0<= ny && ny<n && arr[ny][nx]===0){
            [x, y] = [nx, ny]
            continue
        }
        
        idx = (idx+1) % 3
        x = x + dx[idx]
        y = y + dy[idx]
        
        if (0<= x && x < n && 0<= y && y<n && arr[y][x]===0) continue
        break
    }
    
    let map = []
    for (let i=0 ; i<n; i++) {
        for (let j=0; j<=i; j++) {
            map.push(arr[i][j])
        }
    }
    return map
}