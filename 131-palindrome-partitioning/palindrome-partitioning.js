function partition(s) {
    const result = [];
    const current = [];

    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }

    function backtrack(start) {

        if (start === s.length) {
            result.push([...current]);
            return;
        }

        for (let end = start; end < s.length; end++) {

            if (!isPalindrome(start, end)) {
                continue;
            }

            current.push(s.slice(start, end + 1));

            backtrack(end + 1);

            current.pop();
        }
    }

    backtrack(0);

    return result;
}