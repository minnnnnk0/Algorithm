function solution(p) {

    // 빈 문자인 경우 빈 문자열 반환
    if (p === '') return ''

    let balance = 0
    let splitIdx = 0
    
    for (let i=0; i<p.length; i++) {
        balance += p[i] === '(' ? 1 : -1
        
        if (balance === 0) {
            splitIdx = i + 1
            break
        }
    }
    const u = p.slice(0, splitIdx)
    const v = p.slice(splitIdx)

    if (isCorrect(u)) {
       
        // u = 올바른 괄호 문자열
        return u + solution(v)
        
    } else {
        
        let correct = '(' + solution(v) + ')'
        
        // 양끝 제거
        const uTrim = u.slice(1, u.length - 1)
        correct += [...uTrim].map((char) => (char === '(' ? ')' : '(')).join('')
        
        return correct
    }
}

function isCorrect(string) {
    let cnt = 0
    
    for (const str of string) {
        cnt += str === '(' ? 1 : -1
        
        // 닫는 괄호가 먼저 나온 경우
        if (cnt < 0) return false
    }
    return cnt === 0
}

