function solution(n) {
  let answer = 0;
  let facto = 1;
    
  for (let i = 1; i <= n; i++) {
    facto *= i;
      
    if (facto <= n) answer = i;
  }
  return answer;
}