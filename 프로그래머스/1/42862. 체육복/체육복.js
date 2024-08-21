function solution(n, lost, reserve) {
    let lose = lost.filter(i => !reserve.includes(i)).sort((a, b) => a - b); // 분실
    let reserved = reserve.filter(i => !lost.includes(i)).sort((a, b) => a - b); // 여벌 있음
    let answer = n - lose.length; // 체육복 빌릴 수 ㅇ

    for (let i = 0; i < lose.length; i++) {
        let num = lose[i];
      
        for (let j = 0; j < reserved.length; j++) {
            let Rnum = reserved[j];
            
            if (Rnum === num - 1 || Rnum === num + 1) {
              answer += 1;
              reserved[j] = -1; 
              break; 
            }
        }
      }

    return answer;
}