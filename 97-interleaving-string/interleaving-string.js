function isInterleave(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;

    // The lengths must add up.
    if (m + n !== s3.length) {
        return false;
    }

    // dp[i][j] tells us whether the prefixes can form s3.
    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(false)
    );

    // Two empty strings can form an empty target.
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            // Can the current target character come from s1?
            if (
                i > 0 &&
                dp[i - 1][j] &&
                s1[i - 1] === s3[i + j - 1]
            ) {
                dp[i][j] = true;
            }

            // Can the current target character come from s2?
            if (
                j > 0 &&
                dp[i][j - 1] &&
                s2[j - 1] === s3[i + j - 1]
            ) {
                dp[i][j] = true;
            }
        }
    }

    return dp[m][n];
}