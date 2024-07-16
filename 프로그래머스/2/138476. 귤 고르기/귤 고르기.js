function solution(k, tangerine) {
    let answer = 0;    
    let size = {};

    tangerine.map((e) => {
        if (!(e in size)) size[e] = 1;
        else size[e] += 1;
    });

    size_arr = Object.values(size).sort((a, b) => b - a);

    for (let i = 0; i < size_arr.length; i++) {
        k -= size_arr[i];
        answer += 1;
        if (k <= 0) break;
      }
    console.log(answer)

    return answer;
  }