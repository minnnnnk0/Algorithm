function solution(left, right) {
    let answer = 0;
    
    for (let i=left; i <= right; i++) {
        // 약수의 개수 구하기
        let cnt = 0
        for (let j=1; j <=i; j++) {
            if (i % j == 0) {
                cnt++
            }
        }
        // 약수의 개수에 따라 덧셈, 뺄셈
        if (cnt % 2 == 0) {
            answer += i
        } else {
            answer -= i
        }
    }
    return answer;
}