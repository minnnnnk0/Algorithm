function solution(num1, num2) {
    // JS에는 Python과 달리 '//'라는 몫 연산자가 없음..!
    const answer = Math.floor( num1 / num2 );
    // const answer = parseInt( num1 / num2 );
    return answer;
}