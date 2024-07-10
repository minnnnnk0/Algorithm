function solution(s1, s2) {
    let answer = s1.filter((e)=>s2.includes(e))
    // console.log(answer)
    return answer.length
}