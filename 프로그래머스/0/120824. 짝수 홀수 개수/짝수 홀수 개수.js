function solution(num_list) {
    let answer1 = 0; // 짝
    let answer2 = 0; // 홀
    
    for ( let i=0; i < num_list.length; i++ ) {
        if ( num_list[i] % 2 !== 0 ) {
            answer2++
        } else {
            answer1++
        }
    }
    // console.log(answer1)
    // console.log(answer2)
    return [answer1, answer2];
}