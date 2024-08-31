function solution(a, b) {
    // 최대공약수 구하기
    let gcd = 1
    for ( let i = 1; i <= b; i++ ) {
        if ( a % i === 0 && b % i === 0 ) {
            gcd = i  
        } 
    }
    // 기약분수
    b = b / gcd   
    // 2, 5로 소인수분해
    while ( b % 2 === 0 ) {
        b = b / 2     
    } 
    while ( b % 5 === 0 ) {
        b = b / 5
    }
    return (b === 1) ? 1 : 2
}