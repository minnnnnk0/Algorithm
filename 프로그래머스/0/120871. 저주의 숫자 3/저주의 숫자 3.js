function solution(n) {
    let threeNum = 0
    
    for(let i = 1 ; i <= n ; i ++) {
        threeNum++
        
        while(threeNum.toString().includes('3') || (threeNum % 3 === 0)) {
            threeNum++
        }
    }
    return threeNum
}