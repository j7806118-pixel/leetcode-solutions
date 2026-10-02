function isValidSerialization(preorder) {
    const nodes = preorder.split(",");
    let slots = 1; // One slot is available for the root.

    for (const node of nodes) {
        // Every value must occupy one available slot.
        slots--;

        if (slots < 0) {
            return false;
        }

        // A non-null node creates two child slots.
        if (node !== "#") {
            slots += 2;
        }
    }

    // A valid tree must use every available slot.
    return slots === 0;
}

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")); // true
