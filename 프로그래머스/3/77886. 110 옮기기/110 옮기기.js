function solution(s) {
    const answer = []

    for (const str of s) {
        
        let word = []
        let cnt = 0

        // 110 제거
        for (let i=0; i<str.length; i++) {
            word.push(str[i])

            if (word.length < 3 || word.slice(-3).join('') !== '110') continue
            word.splice(-3, 3)
            cnt++ 
            
        }

        const string = word.join('')
        const addNum = '110'.repeat(cnt)

        // 마지막 0을 찾고 그 뒤에 110 삽입
        const idx0 = string.lastIndexOf('0')
        let result
        
        if (idx0 < 0) {
            result = addNum + string
        } else {
            result = string.slice(0, idx0 + 1) + addNum + string.slice(idx0 + 1)
        }
        answer.push(result)
    }
    return answer
}
