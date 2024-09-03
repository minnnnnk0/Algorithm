function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
      return false
  };

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) {
        return false
    };
  }
  return true;
}

// 문자 e가 포함되면 Number()가 지수로 인식해 e를 숫자로 판별