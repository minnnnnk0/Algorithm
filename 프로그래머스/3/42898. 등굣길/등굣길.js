function solution(m, n, puddles) {
    let dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))

    dp[1][1] = 1

    puddles.forEach(([c, r]) => {
        dp[r][c] = -1
    })

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            
            if ((i === 1 && j === 1) || dp[i][j] === -1) continue

            if (dp[i - 1][j] > 0) dp[i][j] += dp[i - 1][j] % 1000000007
            if (dp[i][j - 1] > 0) dp[i][j] += dp[i][j - 1] % 1000000007
        }
    }

    return dp[n][m] % 1000000007
}
