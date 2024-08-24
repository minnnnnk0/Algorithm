function solution(n, words) {
    let stack = [];
    
    for(let i=0; i < words.length; i++){
        let game = Math.ceil((i + 1) / n);
        let people = ((i + 1) % n === 0 ? n : (i + 1) % n);
        
        if(stack.includes(words[i])){
            return [people, game];
        }
        if(stack.length && (stack[stack.length - 1].slice(-1) !== words[i].slice(0, 1))){
            return [people, game];
        }
        stack.push(words[i]);
    }
    return [0, 0];
}