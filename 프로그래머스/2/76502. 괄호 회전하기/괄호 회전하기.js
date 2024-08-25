function solution(s) {
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        let rotation = s.slice(i) + s.slice(0, i);
        let stack = [];
        let checked = true;
        
        for (let j = 0; j < s.length; j++) {
            
            if (left.includes(rotation[j])) {
                stack.push(rotation[j]);
            } else if (left[right.findIndex(v => v === rotation[j])] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                checked = false;
                break;
            }
        }
        
        if (checked && !stack.length) {
            cnt++;
        }
    }
    return cnt;
}