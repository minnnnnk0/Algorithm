 function solution(emergency) {
    let sort_arr = emergency.slice().sort((a,b) => b-a);
    return emergency.map(i => sort_arr.indexOf(i)+1);
}