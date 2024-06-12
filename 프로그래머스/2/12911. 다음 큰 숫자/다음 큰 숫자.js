function solution(n) {
  // 1의 갯수
  const cntOne = n.toString(2).split("1").length;
  // console.log(cntOne)
    
  while (true) {
    n++;  
    
    if (n.toString(2).split("1").length === cntOne) return n
  }
}