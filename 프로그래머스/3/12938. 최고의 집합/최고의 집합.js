function solution(n, s) {
    const num = s / n >> 0;
  
    if (!num) return [-1]; // 예외처리
  
    const rest = s % n;
    const answer = new Array(n).fill(num);
    // console.log(answer)
     
    // s % n만큼 반복문을 돌리며 뒤에서부터 answer의 값을 1씩 추가
    for(let i = 0; i < rest; i ++) {
        answer[answer.length - 1 - i]++;
      }
    return answer;
}