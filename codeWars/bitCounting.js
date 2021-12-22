"use strict";

function bitCounting(n, bitSum = 0) {
    bitSum += n % 2;

    if (n / 2 < 1) return bitSum;

    console.log({ bitSum });
    return bitCounting(Math.floor(n / 2), bitSum);
}

module.exports = {
    bitCounting
};