/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-destructuring
const assert = require("chai").assert; /// / const { assert } = require("chai");
const fibonacci = require("../fibonacci");

describe("fibonacci tests", () => {
	it("F0=0", () => {
		assert.equal(fibonacci(0), 0);
	});

	it("F1=1", () => {
		assert.equal(fibonacci(1), 1);
	});

	it("F4=5", () => {
		assert.equal(fibonacci(4), 3);
	});

	it("F7=13", () => {
		assert.equal(fibonacci(7), 13);
	});
});
