function solution(priorities, location) {
    let answer = 0;

    const indArr = priorities.map((num,idx) => {
      return { num, idx };
    })
    // console.log(indArr)
    
    while(indArr.length){
    const q = indArr.shift();
        
    if (indArr.some((el) => el.num > q.num)) {
      indArr.push(q);
    } else {
      answer++
      if (q.idx === location) break;
    }
  }
    return answer;
}