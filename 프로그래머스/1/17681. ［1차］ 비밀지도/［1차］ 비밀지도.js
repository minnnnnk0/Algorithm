function solution(n, arr1, arr2) {
  let answer = [];
    
  const arrA = arr1.map((num) => num.toString(2).padStart(n, 0));
  const arrB = arr2.map((num) => num.toString(2).padStart(n, 0));
    
  for (let i=0; i<n; i++) {
      
      let newArr = []
      for(let j=0; j<n; j++) {
          
          if(arrA[i][j] === '1' || arrB[i][j] === '1') {
              newArr.push("#")
          } else {
              newArr.push(" ")
          }
      }
      answer.push(newArr.join(""))
  }
  return answer;
}