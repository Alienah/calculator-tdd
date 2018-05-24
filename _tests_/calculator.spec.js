import calculator from "../src/index";
let app;
beforeEach(function () {
    app = calculator();
});
describe("calculator app", () => {
    
    it("sum two numbers", () => {
        expect(app.sumTwoNumbers(1,1)).toBe(2);
        
    });
});
describe("check values", () => {
    it("check if the value introduced is type number", () => {
        expect(app.isANumber()).toBe(false);
        expect(app.isANumber("-4f")).toBe(false);
        expect(app.isANumber(2)).toBe(true);
        
        //expect(app.sumTwoNumbers(2 + "2")).toBe(console.log("Debes introducir un número"));
    });
});