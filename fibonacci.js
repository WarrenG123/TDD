/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable no-tabs */

// function fibonacci(n) {
// 	let number;
// 	for (let i = 0; i <= n; i++) {
// 		number = n * i;
// 	}
// 	return number;
// }

function fibonacci(n) {
	if (n === 0) {
		return 0;
	}
	let a = 0;
	let b = 1;
	for (let i = 2; i <= n; i++) {
		const c = a + b;
		a = b;
		b = c;
	}
	return b;
}
module.exports = fibonacci;
