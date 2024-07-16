function solution(i, j, k) {
    // i부터 j까지 숫자를 담는 배열 만들기
    let arr = Array.from(Array(j-i+1), (v, idx) => i+idx)
    
    // 문자열로 다 합치기
    let str_arr = arr.join('');
    
    // k만 남기고 다 지우기
    let noK_arr = str_arr.split(k).join('')
    // console.log(noK_arr)
    
    return str_arr.length - noK_arr.length;
}