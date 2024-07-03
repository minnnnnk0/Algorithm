function solution(clothes) {
    const hashed = new Map();
    let cnt = 1;
    
    clothes.map(([name, type]) => {
        if (hashed.has(type)) {
            hashed.set(type, [...hashed.get(type), name])
        } else {
                hashed.set(type, [name])
                }
    })
    // console.log(hashed)
    
    hashed.forEach(v => {
        cnt *= ( v.length + 1 )
    })
    // console.log(cnt)
    
    return cnt - 1;
}