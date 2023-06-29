/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-destructuring
const assert = require("chai").assert; /// / const { assert } = require("chai");
const multiply = require("../multiply");

describe("Test first approach", () => {
	it("-2*-2=4", () => {
		assert.equal(multiply(-(2), -(2)), 4);
	});

	it("1*1=1", () => {
		assert.equal(multiply(1, 1), 1);
	});

	it("2*2=4", () => {
		assert.equal(multiply(2, 2), 4);
	});

	it("3*3=9", () => {
		assert.equal(multiply(3, 3), 9);
	});

	it("4*4=16", () => {
		assert.equal(multiply(4, 4), 16);
	});

	it("23*45=1035", () => {
		assert.equal(multiply(23, 45), 1035);
	});
});
