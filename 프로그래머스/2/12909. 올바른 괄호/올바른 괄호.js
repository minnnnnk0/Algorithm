function solution(s){
    let ans = 0
    // 괄호 짝을 1이랑 -1로 구분해서 0 만들기
    for ( let num of s ) {
        ans += num === '('? 1 : -1
        // 닫는 괄호가 먼저 나오는 경우 -> 무조건 false
        if( ans < 0 ) {
            return false
        }
    }
    return ans === 0 ? true : false;
}