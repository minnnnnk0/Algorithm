function solution(n) {
    let num = Math.sqrt(n);
    // console.log(num)
    if(num % 1 === 0 ) return (num+1) * (num+1)
    else return -1;
}