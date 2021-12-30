"use strict";

const { currentFilePath } = require("./currentFilePath");

describe("testing currentFilePath function", () => {
    it("works drilling down into a directory", () => {
        expect(currentFilePath("/a/./b/")).toEqual("/a/b/"); 
        expect(currentFilePath("/a/././b/")).toEqual("/a/b/"); 
    });

    it("properly traverses back up the filepath", () => {
        expect(currentFilePath("/a/../b/")).toEqual("/b/"); 
        expect(currentFilePath("/a/b/../../")).toEqual("/"); 
    });

    it("properly parses two consectuve slashes", () => {
        expect(currentFilePath("/home//foo/")).toEqual("/home/foo/"); 
    });
});