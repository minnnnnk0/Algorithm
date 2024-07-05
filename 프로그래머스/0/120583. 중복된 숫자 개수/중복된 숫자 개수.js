function solution(array, n) {
    let answer = [];
    
    for ( let i=0; i < array.length; i++ ) {
        if ( array[i] === n ) {
            answer.push(array[i])
        }
    }
    return answer.length;
}