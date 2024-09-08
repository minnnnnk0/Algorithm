function solution(topping) {
   const right = new Map()
   const left = new Map()
   
   // right에 토핑 수 저장
   for (const t of topping) {
       if (right.get(t)) {
           right.set(t, right.get(t)+1)
       } else {
           right.set(t, 1)
       }
   }

   let answer = 0
   // right -> left로 자르면서 토핑 확인...
   for (const t of topping) {
       if (right.get(t) > 1) {
           right.set(t, right.get(t)-1)
       } else {
           right.delete(t)
       } 
       
       if (left.get(t)) {
           left.set(t, left.get(t)+1)
       } else {
         left.set(t,1)  
       } 
       // 사이즈가 같은 경우에 카운팅
       if (left.size === right.size) {
         answer++  
       } 
   }
   return answer
}