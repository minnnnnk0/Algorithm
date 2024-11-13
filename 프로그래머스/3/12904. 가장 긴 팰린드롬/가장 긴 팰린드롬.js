function solution(s) {
    
    const getLength = (s, left, right) => {
        
        let length = 0
        
        while (left >= 0 && right <s.length && s[left] === s[right]) {
            
            length += (left === right) ? 1 : 2
            left--
            right++
        }
        
        return length
    }
    
    let answer = 1
    let len =s.length
    
    // 홀수
    for (let i=0; i<len; i++) {
        answer = Math.max(answer, getLength(s, i, i))
    }
    
    // 짝수
    for (let i=0; i<len; i++) {
        answer = Math.max(answer, getLength(s, i, i+1))
    }
    
    return answer
}