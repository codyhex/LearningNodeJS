describe("The name validator", function () {

    describe("Checks for empty string", function () {

        it("should return true when the string is empty", function () {

            expect(checkEmpty("")).toBe(true);
        });
    });
});
