// 시간은 모두 1로 동일 -> 동일 가중치 -> 다익스트라 필요없음 -> bfs
// 왕복이 가능한 길 -> 양방향 그래프
// 조건 : 복귀가 불가능한 경우 해당 부대원의 최단시간은 -1
// 각 sources에서 destination하면 sources 수 만큼 bfs를 돌려야하니 반대로 하는게 나음

function solution(n, roads, sources, destination) {
    
    // 양방향으로 2차원 배열
    const graph = Array.from({ length: n+1 }, () => [])
    roads.forEach(([u, v]) => {
        graph[u].push(v)
        graph[v].push(u)
    })
    // console.log(graph)
    
    const visited = new Array(n+1).fill(Infinity)
    
    // destination에서 출발
    const q = [destination]
    visited[destination] = 0
    
    while (q.length) {
        const now = q.shift()
        
        for (const next of graph[now]) {
            // console.log(`현재 ${now} 인접 ${next}`)
            
            if (visited[now] + 1 >= visited[next]) continue
            
            visited[next] = visited[now] + 1
            q.push(next)
        }
    }
    return sources.map((v) => visited[v] !== Infinity ? visited[v] : -1)
}