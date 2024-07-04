function solution(numbers) {
    let answer = 0;
    
    for ( let i=0; i < numbers.length; i++ ){
        answer += numbers[i]
    }
    
    // console.log(answer)
    return answer / numbers.length;
}