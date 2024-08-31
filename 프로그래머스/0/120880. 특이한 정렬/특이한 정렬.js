function solution(numlist, n) {
    
    let answer = numlist.sort((a, b) => {
        let distA = Math.abs(a - n)
        let distB = Math.abs(b - n)
        
        if ( distA == distB ) {
            return b - a
        } else {
        return distA - distB
        }
    })
    return answer
}