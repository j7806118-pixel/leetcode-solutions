var isNStraightHand = function(hand, groupSize) {
    // If total cards are not evenly divisible by groupSize, we can't form groups
    if (hand.length % groupSize !== 0) {
        return false;
    }
    
    // Count frequencies of each card
    const countMap = new Map();
    for (const card of hand) {
        countMap.set(card, (countMap.get(card) || 0) + 1);
    }
    
    // Get all unique cards and sort them to simulate a TreeMap
    const uniqueCards = Array.from(countMap.keys()).sort((a, b) => a - b);
    
    // Attempt to form groups
    for (const first of uniqueCards) {
        let count = countMap.get(first);
        if (count > 0) {
            // We need to form groups starting from 'first'
            for (let i = 0; i < groupSize; i++) {
                const currentCard = first + i;
                const currentCount = countMap.get(currentCard) || 0;
                
                // If we don't have enough cards to form the consecutive group, return false
                if (currentCount < count) {
                    return false;
                }
                
                // Reduce the frequency of the card used
                countMap.set(currentCard, currentCount - count);
            } 
        }
    }
    
    return true;
};   
