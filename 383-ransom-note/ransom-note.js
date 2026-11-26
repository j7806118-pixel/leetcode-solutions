function canConstruct(ransomNote, magazine) {
    const freq = new Map();

    // Step 1: Count each character in magazine
    for (let char of magazine) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Step 2: Use the available characters for ransomNote
    for (let char of ransomNote) {
        if (!freq.has(char) || freq.get(char) === 0) {
            return false;
        }

        freq.set(char, freq.get(char) - 1);
    }

    return true;
}