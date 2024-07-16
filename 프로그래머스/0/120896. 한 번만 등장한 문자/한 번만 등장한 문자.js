function solution(s) {
    let answer = [];
    let arr = s.split("");
    
    arr.forEach((str) => {
        if(s.indexOf(str) === s.lastIndexOf(str)){
            answer.push(str);
        }
    })  
    // console.log(answer)
    
    return answer.sort().join("");
}