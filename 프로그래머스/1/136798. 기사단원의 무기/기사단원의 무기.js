// 약수의 대칭성 : 양의 정수 n은 n의 제곱근을 중심으로 대칭적으로 분포
// Math.sqrt()

function solution(number, limit, power) {
    var answer = 0;
    
    for (let i=1; i<=number; i++) {
        let cnt = 0
        
        for (let j=1; j<=Math.sqrt(i); j++) {
            
            if (i%j === 0) {
                if (i/j === j) {
                    cnt +=1
                } else {
                    cnt +=2
                }
            }
            
            if (cnt > limit) {
                cnt = power
                break
            }
        }
        answer += cnt
    }
    return answer;
}