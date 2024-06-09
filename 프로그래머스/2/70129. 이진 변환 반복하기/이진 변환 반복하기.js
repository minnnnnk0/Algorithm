function solution(s) {
    let cnt = 0; // 이진 변환 횟수
    let delZero = 0; // 0 제거 횟수
    let temp = s;
    while (temp !== '1') {
        const prev = temp.length; // 지금 배열 길이
        const curr = temp.replaceAll('0', '').length; // 0 바꾼 길이
        temp = curr.toString(2);
        cnt++;
        delZero += prev - curr;
    }
    return [cnt, delZero];
}