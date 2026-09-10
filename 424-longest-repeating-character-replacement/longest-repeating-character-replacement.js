function characterReplacement(s, k) {
    let count = new Map();

    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        let char = s[right];

        count.set(char, (count.get(char) || 0) + 1);

        maxFreq = Math.max(maxFreq, count.get(char));

        let windowLength = right - left + 1;

        let replacements = windowLength - maxFreq;

        while (replacements > k) {

            let leftChar = s[left];

            count.set(
                leftChar,
                count.get(leftChar) - 1
            );

            left++;

            windowLength = right - left + 1;

            replacements = windowLength - maxFreq;
        }

        maxLength = Math.max(maxLength, windowLength);
    }

    return maxLength;
}

console.log(characterReplacement("ABAB", 2));