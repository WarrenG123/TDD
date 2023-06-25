/* eslint-disable no-tabs */
/* eslint-disable no-undef */
// eslint-disable-next-line prefer-destructuring
const assert = require("chai").assert; /// / const { assert } = require("chai");
const multiply = require("../multiply");

it("checks if the answer is one", () => {
	assert.equal(multiply(1, 1), 1);
});

it("checks if the answer is four", () => {
	assert.equal(multiply(2, 2), 4);
});

it("checks if the answer is nine", () => {
	assert.equal(multiply(3, 3), 9);
});

it("checks if the answer is 16", () => {
	assert.equal(multiply(4, 4), 16);
});

it("checks if it runs", () => {
	assert.equal(multiply(23, 45), (23 * 45));
});
