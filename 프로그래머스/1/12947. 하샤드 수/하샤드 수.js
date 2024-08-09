function solution(x) {
  let sum = 0;
  const arr = String(x).split('');
    // console.log(arr)
  for(let i = 0; i<arr.length; i++){
      sum += Number(arr[i]);
  }
  return (x % sum == 0) ? true : false;
}