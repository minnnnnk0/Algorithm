function solution(dirs) {
    let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let now = [0, 0];
    let visited = new Set();
    
    for (let d of dirs) {
        let nx = now[0] + move[d][0];
        let ny = now[1] + move[d][1];
        
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        
        visited.add("" + now[0] + now[1] + nx + ny);
        visited.add("" + nx + ny + now[0] + now[1]);
        
        now = [nx, ny];
    }
    
    return visited.size / 2;
}