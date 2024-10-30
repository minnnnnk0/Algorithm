function solution(name) {
    const minCnt = 65
    const maxCnt = 90 + 1 // a -> z로 뒤로 한칸 가는거 1경우 추가해야함....
    
    // A 기준으로 char까지 최소 거리
    const findMin = (char) => {
        const findAskii = char.charCodeAt()
        let minRoute = Math.min(findAskii - minCnt, maxCnt - findAskii)
        
        return minRoute
    }
    
    const chars = name.split('').map((v) => findMin(v))
    console.log(chars)
    // 가장 최소 루트 => 업뎃
    let shortest = chars.length - 1
    
    let answer = 0
    
    chars.forEach((char, idx) => {
        
        answer += char // 문자만큼 조작
        
        let now = idx+1 // 다음 문자로 이동
        
        // A인 경우에는 그냥 now만 한칸 이동
        while (chars[now] === 0) {
            now++
        }
        
        // 이동할 수 있는 경우
        // 1. 좌에서 우 원래 방향
        // 2. 뒤 문자들 -> 다시 돌아옴
        // (chars.length - now) * 2 왕복 + idx
        let ex = ((chars.length - now) * 2) + idx 
        // 3. 오른쪽 한 칸 + 다시 돌아와서 -> 뒤 문자들 
        // chars.length - now + (idx * 2) 왕복
        let ex2 = (chars.length - now) + (idx * 2)
        
        // 최소 이동 업뎃
        shortest = Math.min(shortest, ex, ex2)
    })
    
    // console.log(answer, shortest)
    
    return answer + shortest
}