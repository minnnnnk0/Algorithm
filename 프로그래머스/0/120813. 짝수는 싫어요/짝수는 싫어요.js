function solution(n) {
    let answer = [1];
    
    for (let i=2; i <= n; i++) {
        if (i % 2 === 1) {
            answer.push(i)
        }
    }
    return answer;
}