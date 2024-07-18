function solution(spell, dic) {

    let answer = dic.some((v) => [...v].sort().toString() === [...spell].sort().toString())
    // console.log(answer)
    
    return answer === true ? 1 : 2;
}