function solution(info, edges) {
  let max = 1
  let graph = {}
  for (let [a, b] of edges) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b])
  }

  function dfs(now, sheep, wolf, list) {
    max = Math.max(max, sheep)
    if (sheep <= wolf) return

    let dist = graph[now] ? [...list, ...graph[now]] : [...list]
    dist.splice(dist.indexOf(now), 1)

    for (let d of dist) {
      if (info[d] === 0) dfs(d, sheep+1, wolf, dist)
      else dfs(d, sheep, wolf+1, dist)
    }
  }

  dfs(0, 1, 0, [0])

  return max
}