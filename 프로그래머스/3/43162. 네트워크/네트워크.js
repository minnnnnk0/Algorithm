function solution(n, computers) {
    let visited = Array(n).fill(false);
    
    let stack = [];
    let answer = 0;

    for (let i in visited) { 
 
        if (!visited[i]) {
            stack.push(i);
           
            while (stack.length) {
                let tmp = stack.pop();  
                
                for (let j in computers[tmp]) {
                    if (computers[tmp][j] === 1 && !visited[j]) {
                         stack.push(j);
                         visited[j] = true;
                    }
                }
            }
            answer++;
        }
    }
    return answer;
}