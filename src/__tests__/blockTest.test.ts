// import { blockText } from ""
// // this import statement WON'T work right now, since it's not pointed anywhere. When our developer makes the file, they can update it to point in the right spot.
// // but once they do, the blockText function will be available to our test.

// describe("Block Text Fomatter", () => {
//     it("should not change a short string", () => {
//         // In this case we are creating some constant variables to hold our test inputs
//         // and expected outputs, this will make our test cleaner, and easier to 
//         // maintain
//         const test: string = 'This String will not change'
//         const expected: string = 'This String will not change'

//         // While we don't currently have the blockText function available, we can still have our tests set up to run 
//         // once it becomes available
//         expect(blockText(test)).toBe(expected)
//     })
//     it("should replace the right empty space", () => {
//         const test: string =
//             "This string should get new characters. In fact, it <---should go right there. The next one here ---> or it should be.";
//         const expected: string =
//             "This string should get new characters. In fact, it\n<---should go right there. The next one here --->\nor it should be.";

//         expect(blockText(test)).toBe(expected)
//     })
//     it("should break a long string if there are no blank spaces", () => {
//         const test: string =
//             "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
//         const expected: string =
//             "12345678901234567890123456789012345678901234567890\n12345678901234567890123456789012345678901234567890\n1234567890";

//     expect(blockText(test)).toBe(expected)
//     })
// }) 






// var x: number = 7

// if (x === 5) {
//     console.log('X is 5')
// }
// else if (x === 6) {
//     console.log('X is 6')
// }
// else if (x === 7) {
//     console.log('X is 7')
// }
// else {
//     console.log('Idk what number X is')
// }