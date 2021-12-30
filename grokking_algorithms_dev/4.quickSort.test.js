"use strict";

const { recursiveSum, recursiveMax } = require("./4.quickSort");

describe("testing recursive functions", () => {

    test("recursiveSum works properly", () => {
        expect(recursiveSum([1, 2, 3])).toEqual(6);
    });

    test("recursiveMax works properly", () => {
        expect(recursiveMax([1, 2, 3])).toEqual(3);
    });
});