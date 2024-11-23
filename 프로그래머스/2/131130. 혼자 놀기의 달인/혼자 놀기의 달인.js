function solution(cards) {
    
    const game = []
    const visited = Array(cards.length).fill(false)
    
    const getCnt = (start) => {
        
        let cnt = 0
        let cur = start
        
        while (!visited[cur]) {
            
            visited[cur] = true
            cnt++
            cur = cards[cur] - 1
        }
        
        return cnt
    }
 
    for (let i=0; i<cards.length; i++) {
        
        if (visited[i]) continue
        game.push(getCnt(i))
    }

    // 내림차순 정렬
    game.sort((a, b) => b-a)
    
    // console.log(game)

    // 가장 큰 두 숫자 곱
    if (game.length <= 1) {
        return 0
        
    } else {
        return game[0] * game[1]
    }
}
