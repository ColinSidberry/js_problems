"use strict";

const { merge } = require("./mergeIntervals");

describe("testing countDown recursive function", () => {
    it("counts down properly", () => {
        let input = [[1, 3], [2, 6], [8, 10], [15, 18]];
        let output = merge(input);

        expect(output[0][1]).toEqual(6); //Output: [[1,6],[8,10],[15,18]]
        expect(output[2][1]).toEqual(18);
    });
});