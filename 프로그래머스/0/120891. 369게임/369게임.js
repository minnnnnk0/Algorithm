function solution(order) {
    let answer = 0;
    order = order.toString();
    
    for ( let i=0; i < order.length; i++ ){
        if (order[i] % 3 === 0 && order[i] !== '0' ) {
            answer += 1
        }
    }
    return answer;
}