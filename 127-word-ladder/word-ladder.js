function ladderLength(beginWord, endWord, wordList) {
    const words = new Set(wordList);

    if (!words.has(endWord)) {
        return 0;
    }

    const queue = [beginWord];
    let index = 0;

    const visited = new Set();
    visited.add(beginWord);

    let level = 1;

    while (index < queue.length) {
        const levelSize = queue.length - index;

        for (let i = 0; i < levelSize; i++) {
            const word = queue[index];
            index++; 

            if (word === endWord) {
                return level;
            }

            for (let j = 0; j < word.length; j++) {
                for (let charCode = 97; charCode <= 122; charCode++) {
                    const char = String.fromCharCode(charCode);

                    if (char === word[j]) {
                        continue;
                    }

                    const nextWord =
                        word.slice(0, j) +
                        char +
                        word.slice(j + 1);

                    if (!words.has(nextWord)) {
                        continue;
                    }

                    if (visited.has(nextWord)) {
                        continue;
                    }

                    visited.add(nextWord);
                    queue.push(nextWord);
                }
            }
        }      

        level++;   
    }  

    return 0; 
}  