function solution(s) {
    const answer = []

    s.forEach((str) => {
        
        const word = []
        let idx = 0
        let cnt = 0

        // 110 제거
        for (let i=0; i<str.length; i++) {
            word[idx] = str[i]
            idx++

            if (idx >= 3 && word[idx - 1] === '0' && word[idx - 2] === '1' && word[idx - 3] === '1') {
                idx -= 3
                cnt++
            }
        }

        const string = word.slice(0, idx).join('')

        // 110 삽입
        const addNum = '110'.repeat(cnt)
        const idx0 = string.lastIndexOf('0')

        let result = ''
        if (idx0 < 0) {
            result = addNum + string // 0 없 -> 맨 앞에 삽입
        } else {
            result = string.slice(0, idx0 + 1) + addNum + string.slice(idx0 + 1)
        }

        answer.push(result)
    });

    return answer
}
