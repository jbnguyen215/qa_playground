function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
  }

describe("palindromeChecker", ()=>{
    it("should return true for palindromes", () =>{
        expect(palindromeChecker("tacocat")).toBeTruthy();
        expect(palindromeChecker(" Racecar")).toBeTruthy();
    })
    it("It should return false for non-palindromes", ()=>{
        expect(palindromeChecker("iphone12")).toBeFalsy();
        expect(palindromeChecker("Hello World")).toBeFalsy();
    })

    it("should probably return false for non-string inputs too", ()=>{
        let empty: string;
        expect(palindromeChecker(empty)).toBeFalsy();
        expect(palindromeChecker(null)).toBeFalsy();
    })

})