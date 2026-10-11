function minCostClimbingStairs(cost) {
    const n = cost.length;

    const dp = new Array(n + 1).fill(0);

    dp[0] = 0;
    dp[1] = 0;

    for (let step = 2; step <= n; step++) {
        const oneStepCost =
            dp[step - 1] + cost[step - 1];

        const twoStepCost =
            dp[step - 2] + cost[step - 2];

        dp[step] = Math.min(oneStepCost, twoStepCost);
    }

    return dp[n];
}