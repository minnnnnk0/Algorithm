function solution(quiz) {
  return quiz.map((expression, i) => {
      // split 으로 공백을 기준으로 쪼갠 후 구조분해 할당
      const [a, sign, b, equal, result] = expression.split(" ")
    
      if (sign === "+") {
          return Number(a) + Number(b) === Number(result) ? "O" : "X"
      } else {
          return Number(a) - Number(b) === Number(result) ? "O" : "X"
        }
      })
    }