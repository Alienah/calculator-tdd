import calculator from "../src/index";
let app;
beforeEach(function () {
    app = calculator();
});
describe("calculator app", () => {
    
    it("adds two numbers", () => {
        expect(app.sumTwoNumbers(1,1)).toBe(2);        
    });

    it("substracts two numbers", () => {
        expect(app.substractTwoNumbers(1, 1)).toBe(0);
        expect(app.substractTwoNumbers(1, 2)).toBe(-1);
    });

    it("multiplies two numbers", () => {
        expect(app.multiplyTwoNumbers(1, 1)).toBe(1);
        expect(app.multiplyTwoNumbers(2, 4)).toBe(8);
    });

    it("divides two numbers", () => {
        expect(app.divideTwoNumbers(0, 0.2)).toBe(0);
        expect(app.divideTwoNumbers(2, 2)).toBe(1);
    });
});
describe("check values", () => {
    it("check if the value introduced is type number", () => {
        expect(app.isANumber()).toBe(false);
        expect(app.isANumber("-4f")).toBe(false);
        expect(app.isANumber(2)).toBe(true);
        
        //expect(app.sumTwoNumbers(2 + "2")).toBe(console.log("Debes introducir un número"));
    });
    it("check if you are dividing between 0", () => {
        expect(app.manageDivision(2, 0)).toBe(console.log("No se puede dividir entre 0"));
    });
});