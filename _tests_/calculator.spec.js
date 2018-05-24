import calculator from "../src/index";

describe("calculator app", () => {
    let app;
    beforeEach(function () {
        app = calculator();
    });
    it("sum two numbers", () => {
        expect(app.sum(1,1)).toBe(2);
    });
});