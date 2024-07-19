function solution(s) {
    let stack = [];
    
    s.split(' ').forEach((t) => {
        if ( t === 'Z' ) {
            stack.pop()
        } else {
            stack.push(+t)
        }
    })

    return stack.length ? stack.reduce((pre, idx) => pre +idx ) : 0;
}