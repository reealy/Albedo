describe("Hello World", () => {
    // This is a test example.
    const testFunction = () => {
        return "Hello World!";
    }
    // Test case.
    it("should return 'Hello World'", () => {
        expect(testFunction()).toBe("Hello World!");
    });
});