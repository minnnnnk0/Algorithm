function solution(age) {
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let answer = '';
    // age 문자열로 바꿔줘야함
    age = age.toString();
    
    for ( let i=0; i < age.length; i++ ) {
        answer += alpha[age[i]]
    }
    return answer;
}