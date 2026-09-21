function climbStairs(n) {
    if (n <= 2) return n;

    let prev2 = 1; // ways for n = 1
    let prev1 = 2; // ways for n = 2

    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}