//Add Function
function add(num1, num2){
	return Number(num1) + Number(num2);
}

//Subtract function
function subtract(num1, num2){
	return Number(num1) - Number(num2);
}

//Modulus function
function modulus(num1, num2){
	return Number(num1)%Number(num2);
}

//Multiply function
function multiply(num1, num2){
	return Number(num1) * Number(num2);
}

//Division function
function division(num1, num2){
	return Number(num1)/Number(num2);
}

//RoundOff function
function roundOff(number, decimalPlaces){

	intermediate1 = Number(number) * (decimalPlaces ** 10)

	Number.parseInt(intermediate1);
}

//Square Perimeter Function
function squarePerimeter(height, width){

	return Number(height) * 2 + Number(width) * 2;
	
}

//Square Area Function
function squareArea(height, width){
	return Number(height) * Number(width);
}

//Area of a circle
function circleArea(radius){
	area = 2 * mathPi * (Number(radius)**2)
}

//MathPi Constant
const mathPi = 3.14;

//Radian Constant
const radian = 57.296

//All exports
module.exports = {add, subtract, multiply, modulus, multiply, division, roundOff, squarePerimeter, squareArea, mathPi, radian}
