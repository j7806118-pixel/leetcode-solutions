function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    const phone = {
        "2": "abc",  
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];

    function backtrack(index, current) {

        // We used every digit
        if (index === digits.length) {
            result.push(current);
            return;
        }

        // Get letters for the current digit
        const letters = phone[digits[index]];

        // Try every possible letter
        for (const letter of letters) {

            // Choose
            current += letter;

            // Explore
            backtrack(index + 1, current);

            // Undo
            current = current.slice(0, -1);
        }
    }

    backtrack(0, "");

    return result;
}