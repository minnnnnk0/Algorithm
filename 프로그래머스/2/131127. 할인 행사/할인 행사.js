function solution(want, number, discount) {
  let count = 0;
  
  // 10개씩
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);
	
      // 수량 체크
    let cnt = true;
    for (let j = 0; j < want.length; j++) {
        
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        cnt = false;
        break;
      }
    }
    // 수량 있으면 확인
    if (cnt) count += 1;
  }
  return count;
}