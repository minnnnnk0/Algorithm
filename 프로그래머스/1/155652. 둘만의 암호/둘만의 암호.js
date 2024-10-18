function solution(s, skip, index) {
    let answer = '';
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    alpha = alpha.filter(d => !skip.includes(d));
    
    answer = Array.from(s).map((s) => alpha[(alpha.indexOf(s) + index) % alpha.length])
    
    return answer.join('');
}