function solution(answers) {
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let cnt = [0,0,0];
    let length1 = person1.length, length2 = person2.length, length3 = person3.length ;
    let answer =[];
    
    for (let i=0; i<answers.length ; i++) {
       if (person1[i % length1] === answers[i]) {
           cnt[0]++;
       } 
       if (person2[i % length2] === answers[i]) {
           cnt[1]++;
       }
       if (person3[i % length3] === answers[i]) {
           cnt[2]++;
       }
    }
    
    let maxCnt = Math.max(...cnt);
    
    if (maxCnt) {
        cnt.forEach((item, idx) => item === maxCnt ? answer.push(idx+1) : '')
    }
    
    return answer;
}