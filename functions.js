/*There are two types of functions in JavaScript
 *
 * Normal Function
 * Arrow Function
 *
 * In Javascript we do not need to specify a return type to a function
 */

//Normal Function
function whatsMyName(){
	console.log("My Name is Rafe Aaron");
}

//calling a function
whatsMyName();

//Where the function is doesn't matter

whatsMyAge();
//Normal Function
function whatsMyAge(){
         console.log("I am 21 years old\n");
}

//Functions can also be stored in an array to be executed later
const myFunctionsArray = [whatsMyName, whatsMyAge];

for(let i = 0; i < 2; i++){
	myFunctionsArray[i]();
}

//A more versatile way to declare functions
//Arrow Functions (Called so because of their equivalence to lambda functions in python and because of the "=>")

const myAge = ()=>{
	console.log("\nMy Age is 20 years old")
}

myAge();

console.log("Program executed");
