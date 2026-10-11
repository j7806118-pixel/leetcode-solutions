function climbStairs(n) {
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let step = 2; step <= n; step++) {
        dp[step] = dp[step - 1] + dp[step - 2];
    }

    return dp[n];
}