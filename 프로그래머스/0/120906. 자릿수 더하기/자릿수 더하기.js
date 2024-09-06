function solution(n) {
    let answer = 0;
    let sliced = n.toString().split("")
    for (let i of sliced){
        answer += Number(i)
    }
        
    return answer;
}