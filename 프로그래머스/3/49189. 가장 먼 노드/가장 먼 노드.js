function solution (n, edge) {
  const connects = new Array(n).fill().map(_ => [])
  
  for(const e of edge) {
    connects[e[0] - 1].push(e[1] - 1)
    connects[e[1] - 1].push(e[0] - 1)
  }
  
  const visited = [1]
  const q = [0]
  while(q.length) {
    const now = q.shift()
    
    for(const next of connects[now]) {
        
      if(!visited[next]) {
        visited[next] = visited[now] + 1
        q.push(next)
      }
    }
  }
  const max = Math.max(...visited)
  
  return visited.filter((e) => (e) === max).length
}