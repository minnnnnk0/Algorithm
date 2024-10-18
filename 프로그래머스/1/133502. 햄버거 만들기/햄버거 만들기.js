function solution(ingredient) {
    
    // 빵 야채 고기 빵
    // 재료 4개의 값 === 1231 -> 같다면 없애주는 방식
    
    let answer = 0;
    let stack = [];
    
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            let burger = stack.slice(-4).join("");
            
            if (burger === '1231') {
                stack.splice(-4);
                answer += 1;
            }
        }
    }
    return answer;
}