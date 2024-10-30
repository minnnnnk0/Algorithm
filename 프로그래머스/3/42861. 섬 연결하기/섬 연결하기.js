function solution(n, costs) {
    let answer = 0 // 비용
    let cnt = 1 // 연결의 수 -> 최대 연결 수 = 섬 갯수 - 1
    
    costs.sort((a, b) => a[2]-b[2])
    
    const connecIs = new Array(n).fill(false) // 섬 연결 여부
    const connecBr = new Array(costs.length).fill(false) // 다리 연결 여부
    
    connecIs[costs[0][0]] = true
    connecIs[costs[0][1]] = true
    answer += costs[0][2]
    
    // console.log(connecIs)
    
    while(cnt < n-1) {
        
        for (let i=0; i<costs.length; i++) {
            const [start, end, cost] = costs[i]
            
            // 이미 연결된 다리 -> 더 볼 것도 없이 넘어감
            if (connecBr[i]) {
                continue
            }
            
            // 섬 둘중 한쪽만 연결 -> 두 섬 연결 가능!
            if ((!connecIs[start] && connecIs[end]) || (connecIs[start] && !connecIs[end])) {
                connecIs[start] = true
                connecIs[end] = true
                cnt++
                connecBr[i] = true
                answer += cost
                break // 젤 최소 비용 연결했으니까 
            }
            
        }
    }
    
    return answer
    
    
}