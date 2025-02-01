function solution(record) {
    let answer = []
    const map = new Map()
    
    for (let i=0; i<record.length; ++i) {
        const [state, userId, userName] = record[i].split(' ')
        
        if (state == 'Leave') {
            answer.push([userId, '님이 나갔습니다.'])
            continue
        }
        
        if (state == 'Enter') {
            answer.push([userId, '님이 들어왔습니다.'])
        }
        map.set(userId, userName)
    }
    return answer.map((v) => map.get(v[0]) + v[1])
}
