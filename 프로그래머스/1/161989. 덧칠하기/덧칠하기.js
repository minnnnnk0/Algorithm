function solution(n, m, section) {
    let answer = 0;
    let paint = 0
    
    for (let i of section) {
        if (paint < i) {
            answer++
            paint = i + m - 1
        }
    }
    return answer;
}