// Creating some variables that we will use later
var bookCost: number = 10;
var gameCost: number = 60;
var movieCost: number = 20;

var cart1: number = 2 * bookCost + gameCost
var cart2: number = movieCost
var cart3: number = 5 * movieCost + 4 * gameCost + 7 * movieCost

// We are creating a function that will print the different subtotals
// The things that could change with this console.log are the total, and the taxRate
// That is why we created those 2 parameters in our function
function getSubtotal(total: number, taxRate: number) {
    // We can use that same console.log that we created earlier, but we need to update it to
    //      use the `total` and the `taxRate` parameters, and to clean up our formatting
    // We're going to use the .toBeFixed() method in this function to limit how many numbers show up after
    //      The decimal point
    console.log(
        `*****\n\t Total: ${total} \n\t Tax (at ${(taxRate * 100).toFixed(4)}%): ${(
            total * taxRate
        ).toFixed(2)} \n\t ------- \n\t Subtotal: $${(
            total *
            (1 + taxRate)
        ).toFixed(2)}\n*****`
    );
}
getSubtotal(cart1, 0.0485)
getSubtotal(cart2, 0.08)
getSubtotal(cart3, 0.075)
getSubtotal(cart3, 0.5)










// This will console log our carts...
// the \n is for a new line (enter)
// the \t is a tabbed character (indentation)
// With those and the *****'s or the -----'s we can make the console.log() look a little cleaner
// console.log(
//     `*****\nCart1: \n\t Total: ${cart1} \n\t Tax (at 4.85%): ${cart1 * 0.0485
//     } \n\t ------- \n\t Subtotal: $${cart1 * 1.0485}\n*****`
// )
// console.log(
//     `*****\nCart2: \n\t Total: ${cart2} \n\t Tax (at 4.85%): ${cart2 * 0.0485
//     } \n\t ------- \n\t Subtotal: $${cart2 * 1.0485}\n*****`
// )
// console.log(
//     `*****\nCart3: \n\t Total: ${cart3} \n\t Tax (at 4.85%): ${cart3 * 0.0485
//     } \n\t ------- \n\t Subtotal: $${cart3 * 1.0485}\n*****`
// )