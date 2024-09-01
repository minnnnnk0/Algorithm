function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
      
    let num = query[i];
    if (i % 2 === 0) {
      arr = arr.slice(0, num + 1);
    } else {
      arr = arr.slice(num);
    }
  }
  return arr;
}