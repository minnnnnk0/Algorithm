function solution(storey) {
    let ans = 0
    let tmp
    
    while (storey !== 0) {
        
        tmp = storey % 10
        storey = Math.floor(storey / 10)

        if (tmp < 5) {
            ans += tmp
            
        } else if (tmp > 5) {
            ans += (10 - tmp)
            storey++
            
        } else if (tmp === 5) {
            ans += 5
            
            if ((storey % 10) >= 5) {
                storey++
            }
        }   
    }    
    return ans
}