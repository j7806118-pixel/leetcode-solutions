/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 32-bit signed integer limits
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    let reversed = 0;
    
    while (x !== 0) {
        // Extract the last digit
        const pop = x % 10;
        
        // Remove the last digit from x (using Math.trunc to handle negative numbers properly)
        x = Math.trunc(x / 10);
        
        // Push digit to reversed number
        reversed = (reversed * 10) + pop;
        
        // Check for 32-bit integer overflow/underflow
        if (reversed > INT_MAX || reversed < INT_MIN) {
            return 0;
        }
    }
    
    return reversed;
};