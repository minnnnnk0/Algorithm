function solution(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let stack = 0;
        
        for (let j = i + 1; j < prices.length; j++) {
            stack++;
            // 가격이 같거나 오른 기간 구해야함
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer.push(stack);
        // console.log(answer)
    }
    return answer;
}