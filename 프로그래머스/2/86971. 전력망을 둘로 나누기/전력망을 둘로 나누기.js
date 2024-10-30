function solution(n, wires) {
    let answer = 101
    
    const graph = Array.from(Array(n+1), () => [])
    
    for (let wire of wires) {
        let [u, v] = wire
        graph[u].push(v)
        graph[v].push(u)
    }
    
    // console.log(graph)
    
    // (시작점, 방문 x 노드)
    const bfs = (start, not) => {
     
        let q = [start]
        let visited = Array.from(Array(n+1), ()=>false)
        let cnt = 0
        
        visited[start] = true
        
        while (q.length) {
            let now = q.shift()
            
            graph[now].forEach((el) => {
                if(el !== not && !visited[el]) {
                    visited[el] = true
                    q.push(el)
                }
            })
            cnt++
        }
        return cnt
    }
    
    wires.forEach((el) => {
        let [u, v] = el
        let temp = Math.abs(bfs(u, v) - bfs(v, u))
        
        answer = Math.min(answer, temp);
    })
    
    return answer
}