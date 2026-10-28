/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // Step 1: Store the last occurrence index of each character
    const lastOccurrence = new Array(26);
    const aCharCode = 'a'.charCodeAt(0);
    
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s.charCodeAt(i) - aCharCode] = i;
    }
    
    // Step 2: Iterate through the string to determine partitions
    const result = [];
    let partitionEnd = 0;
    let partitionStart = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Expand the current partition's end to the max last occurrence seen so far
        partitionEnd = Math.max(partitionEnd, lastOccurrence[s.charCodeAt(i) - aCharCode]);
        
        // When we reach the end of the current partition
        if (i === partitionEnd) {
            result.push(partitionEnd - partitionStart + 1);
            partitionStart = i + 1; // Move start to the next partition
        }
    }
    
    return result;
};