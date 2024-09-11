function solution(my_string) {
    let answer = my_string.split('');
    let result = 0
    
    for (let i=0; i<my_string.length; i++) {
        if (Number(answer[i])) {
            result += Number(answer[i])
        }
    }
    return result;
}