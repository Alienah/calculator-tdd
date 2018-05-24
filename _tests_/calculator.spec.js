import calculator from "../src/index";
let app;
beforeEach(function () {
    app = calculator();
});
describe("calculator app", () => {
    
    it("sum two numbers", () => {
        expect(app.sum(1,1)).toBe(2);
        
    });
});
describe("check values", () => {
    it("check if the value introduced is type number", () => {
        expect(app.sum(2 + "2")).toBe(console.log("Debes introducir un número"));
    });
});