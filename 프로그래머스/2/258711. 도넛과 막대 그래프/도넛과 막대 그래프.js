function solution(edges) {
    const answer = [0, 0, 0, 0]
    
    let total = 0
    let maxId = 0

    for (let edge of edges) {
        maxId = Math.max(maxId, Math.max(edge[0], edge[1]))
    }
    
    // console.log(maxId)

    const inCnt = new Array(maxId).fill(0)
    const outCnt = new Array(maxId).fill(0)

    for (let edge of edges) {
        outCnt[edge[0] - 1] += 1
        inCnt[edge[1] - 1] += 1
    }
    
    // console.log(inCnt, outCnt)
    
    let totalCnt = 0
    
// 어떤 유형?
    for (let i = 0; i < inCnt.length; i++) {
        
        // in = 0 && out = 1 -> 막대 그래프 (끝인 노드)
        if (outCnt[i] === 0 && inCnt[i] >= 1) {
            answer[2] += 1; 
        }
        // in >= 2 && out >= 2 -> 8자 그래프
        else if (inCnt[i] >= 2 && outCnt[i] >= 2) {
            answer[3] += 1; 
        } 
        // 도넛 모양 
        else if (inCnt[i] === 0 && outCnt[i] > 1) {
            answer[0] = i + 1;
            totalCnt = outCnt[i];
        }
    }

    // 도넛 개수
    answer[1] = totalCnt - answer[2] - answer[3];

    return answer;
}
