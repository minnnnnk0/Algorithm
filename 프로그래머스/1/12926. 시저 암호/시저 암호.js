function solution(s, n) {
    // 1 <= n <= 25
    const chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ                          ";
 
    let answer = s.split("").map((e) => chars[chars.indexOf(e) +n]).join("")
    
    console.log(answer)
    // charCodeAt(), fromCharCode()
  return answer
}