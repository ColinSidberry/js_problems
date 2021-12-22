"use strict";

const { smallestStrictlyGreaterInt } = require("./smallestStrictlyGreaterInt");

// * - "1112" ==> "1121"
// * - "1312" ==> "1321"
// * 
// * - "1132" ==> "1213"
// * - "1432" ==> "2134"
// * 
// * - "11"   ==> ""
// * - "1000" ==> ""

describe("selectionSort", function () {
    it("works when last num is greater than the 2nd to last", function () {
        expect(smallestStrictlyGreaterInt("1112")).toBe("1121");
        expect(smallestStrictlyGreaterInt("1312")).toBe("1321");
    });

    it("works when last num isn't greater than the 2nd to last", function () {
        expect(smallestStrictlyGreaterInt("1132")).toBe("1213");
        expect(smallestStrictlyGreaterInt("1432")).toBe("2134");
    });

    it("works when no num is strictly greater", function () {
        expect(smallestStrictlyGreaterInt("11")).toBe("");
        expect(smallestStrictlyGreaterInt("1000")).toBe("");
    });
});