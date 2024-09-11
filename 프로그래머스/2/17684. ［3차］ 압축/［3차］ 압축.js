function solution(msg) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                'U', 'V', 'W', 'X', 'Y', 'Z'];
    let word = ''
    let answer = []
    
    for (let i=0; i<msg.length; i++) {
        word += msg[i]
        
        if (!alpha.includes(word)) {
            
            answer.push(alpha.indexOf(word.slice(0, -1)) + 1)
            // 새로운 단어는 push
            alpha.push(word)
            // 다시 시작
            word = msg[i]
        }
    }
    
    if (word) {
        answer.push(alpha.indexOf(word) + 1)
    }
    return answer;
}