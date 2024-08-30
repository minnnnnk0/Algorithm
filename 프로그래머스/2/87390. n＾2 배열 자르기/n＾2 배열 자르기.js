function solution(n, left, right) {
    let answer = [];
    
    for ( let i = left; i <= right; i++ ) {
        let row = parseInt(i / n); // 행
        let col = i % n; // 열
        // 좌표 중 큰 값에 +1을 기준으로
        let std = Math.max(row, col)
        answer.push(std + 1);
    }
    return answer;
}