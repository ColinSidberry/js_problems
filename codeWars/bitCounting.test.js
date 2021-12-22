"use strict";
const { bitCounting } = require("./bitCounting");

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        expect(bitCounting(0)).toBe(0);
        expect(bitCounting(4)).toBe(1);
        expect(bitCounting(7)).toBe(3);
        expect(bitCounting(9)).toBe(2);
        expect(bitCounting(10)).toBe(2);
    })
})