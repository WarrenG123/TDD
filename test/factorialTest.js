/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-destructuring
const assert = require("chai").assert; /// / const { assert } = require("chai");
const factorial = require("../factorial");

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
