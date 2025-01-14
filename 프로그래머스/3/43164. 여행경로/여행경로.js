function solution(tickets) {
  let answer = []
  let routes = []

  tickets.forEach(([from, to]) => {
    routes.push([from, to])
  })

  routes.sort((a, b) => {
    if (a[0] === b[0]) return a[1] < b[1] ? -1 : 1
    return a[0] < b[0] ? -1 : 1
  })

  function dfs(node, path) {
    if (path.length === tickets.length + 1) {
      answer = path
      return true
    }

    for (let i=0; i<routes.length; i++) {
      if (routes[i][0] === node) {
        const [from, to] = routes.splice(i, 1)[0]
        
        if (dfs(to, [...path, to])) {
          return true
        }
          
        routes.splice(i, 0, [from, to])
      }
    }
    return false
  }

  dfs('ICN', ['ICN'])
  return answer
}
