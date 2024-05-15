const {add, subtract, multiply} = require("./mathOperations.js");

function addAndSubtract(num1, num2){
	console.log(add(num1, num2))

	console.log(subtract(num1, num2));
}

function multiplicationResult(num1, num2){
	console.log(multiply(num1, num2))
}

multiplicationResult(9, 10)

addAndSubtract(5, 2)
