/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

function multiply(a, b) {
	const answer = (a * b);
	return answer;
}

//	another way to do the multiply
// function multiply(a, b) {
// 	let answer = 0;
// 	for (let i = 0; i < a; i++) {
// 	  answer += b;
// 	  console.log(answer);
// 	}
// 	return answer;
//   }

module.exports = multiply;
