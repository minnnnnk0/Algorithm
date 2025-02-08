const solution = (board, skill) => {
    let ans = 0
    const r = board.length
    const c = board[0].length
    const map = Array.from({length: r + 1}, () => Array(c + 1).fill(0))
    
    for(let i=0; i<skill.length; i++){
        
        const [type, r1, c1, r2, c2, degree] = skill[i]
        
        map[r1][c1] += type === 1 ? -degree : degree
        map[r1][c2 + 1] += type === 1 ? degree : -degree
        map[r2 + 1][c1] += type === 1 ? degree : -degree
        map[r2 + 1][c2 + 1] += type === 1 ? -degree : degree
    }
    
    for(let i=0; i<r; i++){
        let sum = 0
        
        for(let j=0; j<c; j++){
            sum += map[i][j]
            map[i][j] = sum
        }
    }
    
    for(let i=0; i<c; i++){
        let sum = 0
        
        for(let j=0; j<r; j++){
            sum += map[j][i]
            map[j][i] = sum
        }
    }
    
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){
            board[i][j] += map[i][j]
            
            if(board[i][j] > 0){
                ans++
            }
        }
    }
    
    return ans
}