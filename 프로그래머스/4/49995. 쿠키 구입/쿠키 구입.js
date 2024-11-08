// 투포인터 -> 누적합 -> 근데 이제 최대값이여야하는
// 첫째아들 끝 -1 = 둘째아들 시작
// 첫sum === 둘sum

function solution(cookie) {
    let answer = 0
    
    // 왼쪽에서부터 나눠서 비교
    for (let i=0; i<cookie.length-1; i++) {

        let left = i
        let right = i + 1
        
        let leftSum = cookie[left]
        let rightSum = cookie[right]

        while (true) {
            
            if (leftSum === rightSum) {
                answer = Math.max(answer, leftSum)
            }

            // 왼쪽합이 더 작으면 left-- / 오른쪽합이 더 작으면 right++
            if (leftSum <= rightSum && left > 0) {
                left--
                leftSum += cookie[left]
                
            } else if (leftSum >= rightSum && right < cookie.length -1) {
                right++
                rightSum += cookie[right]
                
                // 범위 밖인 경우 추가
            } else {
                break
            }
        }
    }
    return answer
}
