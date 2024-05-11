// Datatypes in JS
/* String, Integer, Double, Float, Array, Custom classes
 *
 * String - Anything in double quotes or single quotes("", '')
 *
 * Intger - Any number with 0 decimal places (2, 3, 100, 438)
 *
 * Float - Any number with decimal places (1.3, 5.2, 9.7, ...)
 *
 * Array - Set of elements that can be of any type(["First Element", 2, [], CustomClass)
 *
 * Custom classes - Custom defined datatypes
 *
 * A datatype is a programmatic representation of a real world object
 */

/* We use only three words to easily initilaize a variable
 * var - The data stored can vary
 * let - Let us start with the variable in this state
 * const - The data will not change throughout execution of the program
 */

//Let's create some datatypes
var myDog = "Bill";
var myNumber = 20;
var myAge = 20;
var myFavoriteFoods = ["Rice", "Irish", "Gnuts"];

let myCountry = "Uganda";
let myTrueSelf = "Skinny";

const myPrimarySchool = "Kampala Parents Primary School";

//The rank of my varite foods
var myFavoriteFoodsNumber = 0;

//While I still have favorie foods, Print them and their names
while(myFavoriteFoodsNumber != myFavoriteFoods.length){
	//printing part
	console.log( myFavoriteFoodsNumber + ". " + myFavoriteFoods[myFavoriteFoodsNumber]);
	//Increment the number
	myFavoriteFoodsNumber++;

}

console.log("\nAnother Method")

myFavoriteFoods.forEach((i) => {
	console.log(i);
}
)

console.log("\nAnother Method")

for(let i = 0; i < myFavoriteFoods.length; i++){
	console.log(myFavoriteFoods[i]);
}

for(i in myFavoriteFoods){
        console.log(myFavoriteFoods[i]);
}

//Let us write a little about ourselves
console.log("My Name is Rafe Aaron, My dog is called "+myDog+ ", I am "+ myAge+" and my favorite color is Purple");

/*
 * To print to screen or terminal,
 * We use console.log()
 */

/*
 * Summary
 * Data types are classes that store information
 * There are three types of variables
 * Const
 * Var
 * Let
 *
 * We also went through string concatenation
 *
 * We learnt three methods of reading data from an array
 *
 */

