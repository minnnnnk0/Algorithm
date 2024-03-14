function solution(start, end) {
    var answer = [];
    
    for(let i=start; i<=end; i++){
        let arr = String(i)
        
        // every = and / some = or
        if(![...arr].every(x => x === '5' || x === '0')) continue;
        answer.push(i)
    }
    return answer.length ? answer : [-1];
}

// console.log(solution(10,20))
