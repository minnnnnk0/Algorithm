function solution(N, road, K) {
  const map = Array(N+1).fill(Infinity)
  const graph = Array.from(Array(N+1), () => [])

  road.forEach((info) => {
    const [left, right, dist] = info
    
    graph[left].push({ to: right, map: dist })
    graph[right].push({ to: left, map: dist })
  })

  const q = [{ to: 1, map: 0 }]
  map[1] = 0
    
  while (q.length) {
    const { to } = q.pop()

    graph[to].forEach((next) => {
      const acc = map[to] + next.map
      if (map[next.to] > acc) {
        map[next.to] = acc
        q.push(next)
      }
    })
  }
  return map.filter((v) => v <= K).length
}