"use strict";

const { merge } = require("./mergeIntervals");

describe("testing mergeIntervals function", () => {
    it("merges multiple subarrays properly", () => {
        let input = [[1, 3], [2, 6], [8, 10], [15, 18]];
        let output = merge(input);
        let expected = [[1, 6], [8, 10], [15, 18]];

        // expect(output[0][1]).toEqual(6); //Output: [[1,6],[8,10],[15,18]]
        // expect(output[2][1]).toEqual(18);
        expect(output.every(
            (a, i) => a.every(
                (b, j) => b === expected[i][j]
            )
        )).toEqual(true);
        // a.every((val, index) => val === b[index]);
    });
});