function solution(n){
    const num = String(n).split('').reduce((ac, id) => ac + id * 1, 0)
    // console.log(num)
    return num;
}