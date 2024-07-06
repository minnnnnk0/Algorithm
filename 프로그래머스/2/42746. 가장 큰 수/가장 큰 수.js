function solution(numbers) {
    let answer = numbers;
    
    answer = answer.map(numbers => String(numbers))
    answer = answer.sort((a, b) => (b+a) - (a+b)).join('')
    // console.log(answer)
    return answer[0] === '0' ? '0' : answer;
}