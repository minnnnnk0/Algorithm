function solution(n) {
    let answer = String(n).split('').sort((a, b) => b -a).join('');
    
    return Number(answer);
}