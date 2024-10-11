function solution(N, stages) {
    const answer = [];
    const cnt = new Array(N).fill(0)
    
    stages.forEach((stage) => cnt[stage-1]++)
    // console.log(stages)
    
    let lng = stages.length
    
    for (let i=0; i<N; i++) {
        answer.push({stage: i+1, rate: cnt[i] / lng})
        lng -= cnt[i]
    }
    
    answer.sort((a, b) => b.rate - a.rate)
    
    const result = answer.map((v) => v.stage)

    return result;
}