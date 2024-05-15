/*
 * Welcome to OOP in JavaScript
 */

class Dog{
	
	name = "";
	age = 0;
	breed = "";

	Dog(name, age, breed){

		this.name = name;
		this.age = age;
		this.breed = breed;
		
	}

	getDog(){
		if(this.name == "" || this.age == 0 || this.breed == ""){
			return "Insufficient information about the dog";
		}
		else{
			return "The Dog's name is " + this.name + ". It is " + this.age + " years old and belongs to the "+this.breed +" family";
		}
	}

	setName(name){
		this.name = name;
	}

	setAge(age){
		this.age = age;
	}

	setBreed(breed){

		this.breed = breed;
	}
}

myDog = new Dog("Johan", 30, "German Shepherd");

console.log(myDog.getDog());

myDog.setName("Bill");
myDog.setAge(10);
myDog.setBreed("German Shepherd");

console.log(myDog.getDog());


class Report{
	words = "";


	addwords(words){
		this.words = words + " ";
	}

	deleteNumberOfWords(number){
			this.words = this.words.substring(0, this.words.length - number - 1);

	}

	viewReport(){

		return this.words;
	}
}


var myReport = new Report();

myReport.addwords("My name is Rafe Aaron");

console.log(myReport.viewReport());

myReport.deleteNumberOfWords(5);

console.log(myReport.viewReport());

