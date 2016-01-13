//Function - youGetTaco
//Write a function that takes a single string parameter called action. 
//If the value passed into our function is eat, have the function return the string value, EAT TACOS
function youGetTaco (action) {
	if (action === "eat") {
		return "EAT TACOS";
	}
}
console.log(youGetTaco("eat")); //EAT TACOS 

//Function - isNumberGreaterThan 
//Write a function that takes two variables of type Number called first and second respectively. 
//Return true if the first number is greater than the second 
function isNumberGreaterThan (first, second) {
	if (first > second){
		return true;
	}
	else {
		return false;
	}
}
console.log(isNumberGreaterThan(2,1)); //true
console.log(isNumberGreaterThan(1,2)); //false

//Function - isTrue
//Write a function that takes in a Boolean value named val and have the function return whether the value is true 
function isTrue (val) {
	if (val > 0 ){
		return true;
	}
	else { 
		return false;
	}
}
console.log(isTrue(2)); //true
console.log(isTrue(0)); //false

//Function - isFalse
//Write a function that takes in a Boolean value named val and have the function return whether the value is false
function isFalse (val) {
	if (val === 0) {
		return false;
	}
	else {
		return true;
	}
}
console.log(isFalse(0)); //false
console.log(isFalse(2)); //true

//Function - isEqual 
//Write a function that takes two variables of type String called firstWord and secondWord respectively. 
//Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'
function isEqual (firstWord, secondWord) {
	if (firstWord === secondWord){
		return 'AWWWWRIGHT';
	}
	else {
		return 'Y U NO MATCH!';
	}
}
console.log(isEqual("word", "word"));
console.log(isEqual("first", "second"));

//Function - isNotEqual 
//Write a function that takes two variables of type String called firstWord and secondWord respectively 
//Return 'AWWWWRIGHT' if the two are not equal, otherwise return 'Y U MATCH!'
function isNotEqual (firstWord, secondWord){
	if (firstWord !== secondWord) {
		return 'AWWWWRIGHT';
	}
	else {
		return 'Y U MATCH!';
	}
}
console.log(isNotEqual("first", "second"));
console.log(isNotEqual("word", "word"));

//Function - doubleEquals 
//Write a function that takes two variables of type Boolean called first and second respectively 
//Return true if both values are true otherwise return false 
function doubleEquals (first, second) {
	if (first > 0 & second >0) {
		return true;
	}
	else {
		return false;
	}
}
console.log(doubleEquals(1, 2));
console.log(doubleEquals(0, 0));

//Function - totalOver30 
//Write a function that takes three variables of type Number called first and second and third respectively
//Return true if the sum of all values are greater than 30 otherwise return false 
function totalOver30 (first, second, third) {
	if ((first + second + third) > 30) {
		return true; 
	}
	else {
		return false;
	}
}
console.log(totalOver30(10, 11, 12));
console.log(totalOver30(9, 10, 11));

//Function - totalUnderWhat
//Write a function that takes four variable of type Number called first and second and third and fourth respectively 
//Return true if the sum of first, second, and third are less than fourth, otherwise return false 
function totalUnderWhat (first, second, third, fourth) {
	if ((first + second + third) > fourth) {
		return true; 
	}
	else {
		return false;
	}
}
console.log(totalUnderWhat(1, 2, 3, 0));
console.log(totalUnderWhat(1, 2, 3, 10));

//Function - loopToNumber 
//Write a function that takes in a Number value named limit
//Have the function write a for loop that loops the number of times of limit and console.log each number as the loop executes 
function loopToNumber (limit) {
	for (var i = 1; i <= limit; i++) {
		console.log(i);
	}
}
loopToNumber(10);

//Function - showEachValue
//Write a function that takes in a Array value named characters that has a sequence of single character String values 
//Have the function write a for loop that loops for each number of elements in the Array and console.log each character as the loop executes
function showEachValue (characters) {
	for (var i = 0; i < characters.length; i++) {
		console.log(characters[i]);
	}
}
showEachValue(["show", "each", "value"]);

//Function - createArrayFromString 
//Write a function that takes a single variable of type String called word
//Write a for loop that creates an Array made up of each character in word exect for A 
//Note: You will need to use the Array.push() method to complete this function
function createArrayFromString (word) {
	for (var i = 0; i < word.length; i++) {

	}
}




