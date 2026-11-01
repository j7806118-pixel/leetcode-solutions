/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        // Calculate the carry bits and shift them left by 1
        let carry = (a & b) << 1;
        
        // Sum without the carry bits
        a = a ^ b;
        
        // Assign the carry to b so it gets added in the next iteration
        b = carry;
    }
    return a;
};