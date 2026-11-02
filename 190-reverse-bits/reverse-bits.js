var reverseBits = function(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {

        // Step 1: Make space
        result = result << 1;

        // Step 2: Copy the last bit from n
        result = result | (n & 1);

        // Step 3: Move n to its next bit
        n = n >>> 1;
    }

    return result >>> 0;
};