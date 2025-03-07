function solution(places) {
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    
    const dfs = (x, y, d, map) => {
            
            if (map[y][x] === 'P') return true
            for (let k=0; k<4; k ++){
                const nx = x + dx[k]
                const ny = y + dy[k]
                if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && map[ny][nx] !== 'X' && d < 2){
                    if (dfs(nx, ny, d + 1, map)) return true
                }
            }
            return false
        }
    
    const check = (map) => {
        for (let i=0; i<5; i++){
            for (let j=0; j<5; j++){
                
                if (map[i][j]!=="P") continue
                map[i]= map[i].slice(0,j) + "X" + map[i].slice(j+1)
                
                if (dfs(j, i, 0, map)) return 0
            }
        }
        return 1
    }
    return places.map((v) => check(v))
    
}