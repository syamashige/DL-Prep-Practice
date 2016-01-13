//Write a function that takes a single string parameter called action
//If the value passed into our function is eat have the function return the string value eat tacos
function youGetTaco (action) {
	if (action === "eat") {
		return "Eat Tacos";
	}
}
var myAction = "eat";
console.log('youGetTaco', myAction, youGetTaco(myAction));
// --> youGetTaco eat Eat Tacos
var myOtherAction = "drink";
console.log('youGetTaco', myOtherAction, youGetTaco(myOtherAction));
// -- > youGetTaco drink undefined 

//Write a function that takes two variables of type number called first and second respectively. 
//Reaturn true if the first number is greater than the second 
function isNumberGreaterThan (first, second) {
	if (first > second) {
		return true;
	}
	else {
		return false;
	}
}
console.log(isNumberGreaterThan(1,2));
console.log(isNumberGreaterThan(2,1));

//Write a functiont that takes in a Boolean value named val and have the function return whether the value is true  
//boolean 
function ifFalse (val){ 
	if (val === false) {
		return false;
	}
}
console.log(ifFalse(false));

//Write a function that takes two variable of type string called firstWord and secondWord respectively
//Return 'AWWWWRIGHT' if the two are euqal otherwise return 'Y U NO MATCH!'
function isEqual (firstWord, secondWord) {
	if (firstWord === secondWord) {
		return "AWWWWRIGHT";
	}
	else {
		return "Y U NO MATCH!";
	}
}
console.log(isEqual("First", "Second"));
console.log(isEqual ("First","First"));

//Write a function that takes two variables of type string called firstWord and secondWord respectively
//Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'
function isNotEqual (firstWord, secondWord) {
	if (firstWord !== secondWord) {
		return "AWWWWRIGHT";
	}
	else {
		return "Y U MATCH!";
	}
}
console.log(isNotEqual("First","Second"));
console.log(isNotEqual("First", "First"));

//Write a function that takes two variables of type Boolean called first and second respectively
//Return true if both values are true otherwise return false
function doubleEquals (first, second) {
	if (first == second) {
		return true;
	}
	else {
		return false;
	}
}
console.log (doubleEquals(true, true));
console.log (doubleEquals(false,true));

//Write a function that takes three variables of type Number called first and second and third respectively
//Return true if the sum of all values are greater than 30 otherwise return false
function totalOver30 (first, second, third) {
	if (first + second + third > 30) {
		return true;
	}
	else {
		return false;
	}
}
console.log (totalOver30(10,10,11));
console.log(totalOver30(1,2,3));

//Write a function that takes four variables of type Number called first and second and third and fourth respectively
//Return true if the sum of the first, second, and third are less than fourth otherwise return false
function totalUnderWhat (first, second, third, fourth) {
	if ((first + second + third) < fourth) {
		return true;
	}
	else {
		return false;
	}
}
console.log (totalUnderWhat(1,2,3,4));
console.log (totalUnderWhat(1,2,3,7));

//Write a function that takes in a Number value named limit
//Have the function write a for loop that loops for each number ov elements in the Array and console.log each character as the loop executes
function loopToNumber (limit) {
	for (var i=0; i<=limit; i++){
		console.log(i);
	}
}
loopToNumber(10);

//Write a function that takes in a Array value named characters that has a sequence of single character string values
//Have the function write a for loop that loops for each number of elements in the Array
//console.log each character as the loop executes 


var myCharacter = ["a", "b", "c", "d", "e"];
function showEachValue (character) {
	
	for (var i=0; i < character.length; i++){
		console.log(character[i]);
	}
}
showEachValue(myCharacter);
showEachValue(["Word", "b", "c", "d", "e"]);

function createArrayFromString (word) {
	for (var i=1; i<word.length ;i++){
		console.log(word[i]);
	}
}
createArrayFromString("Array");

//function-createArrayFromString
//Write a function that takes a single variable of type string called word
//Wirte a for loop that creates an Array made up of each characer in word except for A 
//Note: You will need to use the Array.push() method to complete this function

//word is a string
function createArrayFromString (word) {
	var wordCharactersSansA = [];
	for (var i=0; i <word.length; i++){
		var ithCharacter = word[i];
		if (ithCharacter !== "a"){
			wordCharactersSansA.push(ithCharacter);
		}
	}
	return wordCharactersSansA;
}
var words = ["Tomato", "Pizza", "Happy"];
for (var j = 0; j < words.length; j++){
	var jthword = words[j];
	var wordResult=createArrayFromString(jthword);
	console.log(jthword,wordResult);
}

/* 
var word1 = "Tomato";
var word1Result = createArrayFromString(word1);
console.log(word1, word1Result);

var word2 = "Pizza";
var word2Result = createArrayFromString(word2);
console.log(word2, word2Result);

var word3 = "Happy";
var word3Result = createArrayFromString(word3);
console.log(word3,word3Result);
*/

//Write a function that takes an Array with any number of type number
//Write a for loop to add all numbers in the Array and return the sum 
//numbers is an array
function greatSummator (numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++){
		var ithnumber = numbers[i];
//sum = sum + 3/shorthand for sum is sum += ...
		sum += ithnumber;
	}
	return sum;
}
console.log(greatSummator([1,2,3]));



//var a = ++i (the value that gets sent to a is what happens after you increment i)
//var b = i++ (the value that gets sent to b is what happens before you incremet i)
//This assignment is very inexplicit - it can get confusing --> more often than not, you should assign a value

//Write a function that takes an Array with any number of type Number and second variable called total
//Return true if the sum of all values in the Array are less than total otherwise return false 


//Write a function that takes an Array with any number of type Boolean values
//Write a for loop to call our isTrue function with each value as input 
//Return true if all values return true from our isTrue function 









