function solution(s) {
    const answer = []

    s.forEach((str) => {
        const stack = []
        let cnt = 0
        let len = str.length

        // 110 제거
        for (let i=0; i<len; i++) {
            if (stack.length >= 2 && str[i] === '0' && stack[stack.length - 1] === '1' && stack[stack.length - 2] === '1') {
                stack.pop() // 1 제거
                stack.pop() // 1 제거
                cnt++     // 110
            } else {
                stack.push(str[i])
            }
        }

        let rest = stack.join('')
        
        if (cnt > 0) {
            
            if (rest.includes('11')) {
                // 11이 있 -> 첫 번째 11 앞에 삽입
                let idx = rest.indexOf('11')
                rest = rest.slice(0, idx) + '110'.repeat(cnt) + rest.slice(idx)
            } else {
                // 11이 없 -> 마지막 0 뒤에 삽입
                let idx = rest.lastIndexOf('0') + 1
                rest = rest.slice(0, idx) + '110'.repeat(cnt) + rest.slice(idx)
            }
        }
        answer.push(rest)
    })
    return answer
}
