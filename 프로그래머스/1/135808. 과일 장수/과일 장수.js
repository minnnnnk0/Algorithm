function solution(k, m, score) {
    
    if (score.length < m) {
        return 0
    }
    
    score.sort((a, b) => a-b)
    // console.log(score)
    
    let totalCost = 0
    
    while (score.length >= m) {
        const box = score.splice(score.length -m , m)
        const revenue = m * box[0]

        totalCost += revenue
    }
    return totalCost
}