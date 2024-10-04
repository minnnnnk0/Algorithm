function solution(sides) {    
    let st = sides.sort((a, b) => a -b)

    return st[2] >= st[0] + st[1] ? 2 : 1;
}