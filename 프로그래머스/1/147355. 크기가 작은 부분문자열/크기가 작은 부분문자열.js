function solution(t, p) {
    
    const numP = Number(p);
    let count = 0;
    
    for(let i = 0; i < (t.length - p.length + 1); i++){
        const slicedT = t.slice(i, i + p.length);
        const numT = Number(slicedT);
        
        if(numT <= numP){
            count += 1;
        }
    }
    
    return count;
}