function solution (A, B) {
    let answer = 0;
    // 정렬
    A.sort((a,b) => b-a);
    B.sort((a,b) => a-b);
    // console.log(A, B)
  
    for (let i of A) {
        const lng = B.length - 1
        const maxNum = B[lng];

        if ( i < maxNum ) {
            answer++;
            B.pop();
        }
      }
    return answer;
}