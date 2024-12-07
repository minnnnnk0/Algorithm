function solution(n, money) {
    const dp = Array(n+1).fill(0)
    dp[0] = 1

    for (let coin of money) {
        for (let i=coin; i<=n; i++) {
            dp[i] += dp[i-coin]
        }
    }
    return dp[n] % 1000000007
}
