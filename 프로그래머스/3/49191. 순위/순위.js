function solution(n, results) {
    const dist = Array.from({ length: n+1 }, () => Array(n+1).fill(Infinity))

    // 자기 자신으로 가는 경우 = 0
    for (let i=1; i<=n; i++) {
        dist[i][i] = 0
    }

    for (const [A, B] of results) {
        dist[A][B] = 1  // A 승
        dist[B][A] = -1 // B 패
    }

    // 플로이드 워샬
    for (let k=1; k<=n; k++) {
        for (let i=1; i<=n; i++) {
            for (let j=1; j<=n; j++) {
                if (dist[i][k] === 1 && dist[k][j] === 1) {
                    dist[i][j] = 1 // i 승
                }
                if (dist[i][k] === -1 && dist[k][j] === -1) {
                    dist[i][j] = -1 // i 패
                }
            }
        }
    }
    let answer = 0
    
    for (let i=1; i<=n; i++) {
        let cnt = 0
        for (let j=1; j<=n; j++) {
            if (dist[i][j] !== Infinity) cnt++
        }
        if (cnt === n) answer++
    }
    return answer
}