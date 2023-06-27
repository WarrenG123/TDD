/* eslint-disable no-tabs */
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-destructuring
const assert = require("chai").assert; /// / const { assert } = require("chai");
const factorial = require("../factorial");

// describe("Test first approach", () => {
// 	// it("1*1=1", () => {
// 	// 	assert.equal(multiply(1, 1), 1);
// 	// });

// 	// it("2*2=4", () => {
// 	// 	assert.equal(multiply(2, 2), 4);
// 	// });

// 	// it("3*3=9", () => {
// 	// 	assert.equal(multiply(3, 3), 9);
// 	// });

// 	// it("4*4=16", () => {
// 	// 	assert.equal(multiply(4, 4), 16);
// 	// });

// 	// it("23*45=1035", () => {
// 	// 	assert.equal(multiply(23, 45), 1035);
// 	// });

// });

describe("test last approach", () => {
	it("0!=1", () => {
		assert.equal(factorial(0), 1);
	});

	it("2!=2", () => {
		assert.equal(factorial(2), 2);
	});

	it("3!=6", () => {
		assert.equal(factorial(3), 6);
	});

	it("6!=720", () => {
		assert.equal(factorial(6), 720);
	});
});
