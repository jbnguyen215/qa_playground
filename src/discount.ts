function discountCalculator(senior: boolean, vetOrResponder: boolean, clubMember: boolean): number {
    // If any of my "return" statements happen, no more code will be evaluated.
    // Which is why we don't need an "else".

    // This will only occur is all 3 arguments are true
    if (senior && vetOrResponder && clubMember) return 0.25
    // This will happen if either combo is true
    if ((senior && clubMember) || (vetOrResponder && clubMember)) return 0.15
    // This will happen if both are true
    if (senior && vetOrResponder) return 0.2
    // This will happen if any of the 3 are true
    if (senior || vetOrResponder || clubMember) return 0.1
    return 0
}

console.log('All three arguments True', discountCalculator(true, true, true))
console.log("Senior && vetOrResponder", discountCalculator(true, true, false));
console.log("Senior && club", discountCalculator(true, false, true));
console.log("VetOrResponder && club", discountCalculator(false, true, true));
console.log("Senior", discountCalculator(true, false, false));
console.log("VetOrResponder", discountCalculator(false, true, false));
console.log("Club", discountCalculator(false, false, true));
console.log("Nothing", discountCalculator(false, false, false))