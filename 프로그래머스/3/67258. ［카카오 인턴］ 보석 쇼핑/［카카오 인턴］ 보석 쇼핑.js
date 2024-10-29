function solution(gems) {
    // 전체 보석 종류 수
    const typeCnt = new Set(gems).size
    
    let answer = [0, gems.length]

    let left = 0
    let right = 0
    const gemCnt = new Map() // 보석 종류랑 갯수

    while (right < gems.length) {
        
        // map에 추가
        gemCnt.set(gems[right], (gemCnt.get(gems[right]) || 0) + 1);
        
        // 모든 종류의 보석을 포함하는지 확인
        while (gemCnt.size === typeCnt) {
            
            // 더 짧은 구간이면 -> 갱신
            if ( (right - left) < (answer[1] - answer[0]) ) {
                answer = [left+1, right+1]; 
            }

            gemCnt.set(gems[left], gemCnt.get(gems[left])-1);
            
            // 이때 0이면 map에서 아예 삭제
            if (gemCnt.get(gems[left]) === 0) {
                gemCnt.delete(gems[left]);
            }
            
            left++; 
        }
        right++; 
    }
    return answer;
}