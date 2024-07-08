function solution(progresses, speeds) {
    const answer = [];
    // 작업일수 계산
    const works = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    // console.log(works)
    
    let tmp = 0;
    for ( let i = 0; i < works.length; i++ ) {
        if ( works[tmp] < works[i] ) {
          answer.push(i-tmp);
          tmp = i;
        }
    }
    answer.push(works.length - tmp);
    // console.log(answer)
    return answer;
  }