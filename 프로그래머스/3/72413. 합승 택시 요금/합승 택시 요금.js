function solution (n, s, a, b, fares) {
  // 지점개수 n 출발 s 도착 a b
  const map = new Array(n).fill().map((_) => new Array(n).fill(Infinity))
  
  for(let i=0; i<n; i++) 
    map[i][i] = 0
  
  fares.forEach((fare) => {
    const [x, y, w] = fare
    map[x-1][y-1] = w
    map[y-1][x-1] = w
  })
  
  // 플로이드 워샬
  for(let k=0; k<n; k++) {
    for(let i=0; i<n; i++) {
      for(let j=0; j<n; j++) {
        if(map[i][j] > map[i][k] + map[k][j])
          map[i][j] = map[i][k] + map[k][j]
      }
    }
  }
  
  let ans = map[s-1][a-1] + map[s-1][b-1]
  for(let i=0; i< n; i++) {
    const shortest = map[s-1][i] + map[i][a-1] + map[i][b-1]
    ans = Math.min(ans, shortest)
  }
  return ans
}