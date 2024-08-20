function solution(maps) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = [[0, 0, 1]];

    while (queue.length) {
        const curIdx = queue.shift();
        if (curIdx[0] === maps.length - 1 && curIdx[1] === maps[0].length - 1) {
            return curIdx[2];
        }
            
        for (let i = 0; i < 4; i++) {
            const ny = curIdx[0] + dy[i];
            const nx = curIdx[1] + dx[i];
            
            if (nx >= 0 && ny >= 0 && nx < maps[0].length && ny < maps.length && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([ny, nx, curIdx[2] + 1]);    
            }
        }
    }
    
    return -1;
}