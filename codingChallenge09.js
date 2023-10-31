/*

Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temepratues.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logas a string like the above to the console.

Use the problem-solvin framework

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/

const printForecast = function (arr) {
	let string = '... '
	for (let i = 0; i < arr.length; i++) {
		string = string + `${arr[i]}ºC in ${i + 1} days ... `
	}
	return string
}

console.log(printForecast([17, 21, 23]))
console.log(printForecast([12, 5, -5, 0, 4]))
