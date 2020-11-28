// The ? after a parameter means that it's optional
function getSubtotal(total: number, taxRate: number, discountRate?: number) {
    if (discountRate) {
        // if discountRate is defined, this block will execute
        return total * (1 - discountRate) * (1 + taxRate)
    }
    else {
        // if discountRate is not defined, this block will execute
        return total * (1 + taxRate)
    }
}
console.log('100$ total, 5% tax, and no discount', getSubtotal(100, 0.05))
console.log('100$ total, 5% tax, and a discount of 20%', getSubtotal(100, 0.05, 0.2))