/** gets a number between 1 and 10 for the callback
 *   @callback numberHandler is passed the number generated 
 */ 
function getNumber(numberHandler) { 
    numberHandler(Math.ceil(Math.random() * 10)); 
}

function numberChecker(result: number){
    expect(result>=1).toBeTruthy();
    expect(result<=10).toBeTruthy();
    expect(result.toFixed(0)).toBe(`${result}`);
}
describe("numberHandler", ()=>{
    it("looks good when checked by a named callback", ()=>{
        getNumber(numberChecker);
    });
    it("looks good when checked by an anoymous callback", ()=>{
        getNumber((result)=>{
            expect(result>=1).toBeTruthy();
            expect(result<=10).toBeTruthy();
            expect(result.toFixed(0)).toBe(`${result}`);
        })
    })
});