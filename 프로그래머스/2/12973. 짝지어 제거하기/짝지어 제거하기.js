function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const rep = s.charAt(i);
    if (stack[stack.length - 1] === rep) {
      stack.pop();
    } else {
      stack.push(rep);
    }
  }
  return stack.length === 0 ? 1 : 0;
}