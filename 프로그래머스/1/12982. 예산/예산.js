function solution(d, budget) {
    // 오름차순
    d.sort((a, b) => a - b);

    let sum = 0;
    let idx = 0;

    while (sum <= budget) {
        sum += d[idx];
        idx++;
       }
    return idx - 1;
  }