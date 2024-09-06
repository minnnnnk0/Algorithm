function solution(n) {
    // var answer = 0;
    const to3 = n.toString(3).split('').reverse().join('')
    console.log(to3)
    const to10 = parseInt(to3, 3)
    return to10;
}