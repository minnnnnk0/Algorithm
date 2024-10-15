function solution(n) {
    let answer = new Set();
    
    // 홀수만 저장
    for (let i=1; i<=n; i+=2) {
        answer.add(i)
    }
    // console.log(answer)
    answer.delete(1)
    answer.add(2) // 유일한 짝수 소수
    
    for (let i=3; i<=Math.sqrt(n); i++) {
        if (answer.has(i)) {
            
            for (let j=i*2; j<=n; j+=i) {
                answer.delete(j)
            }
        }
    }
    // console.log(answer)
    return answer.size;
}