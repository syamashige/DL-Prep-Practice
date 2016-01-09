function youGetTaco (action) {
	if (action === "eat") {
		return "Eat Tacos";
	}
}
var myAction = "eat";
console.log('youGetTaco', myAction, youGetTaco(myAction));
// youGetTaco eat Eat Tacos
var myOtherAction = "drink";
console.log('youGetTaco', myOtherAction, youGetTaco(myOtherAction));
//youGetTaco drink undefined 

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

//boolean 
function ifFalse (val){ 
	if (val === false) {
		return false;
	}
}
console.log(ifFalse(false));

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

function isNotEqual (firstWord, secondWord) {
	if (firstWord !== secondWord) {
		return "AWWWWRIGHT";
	}
	else {
		return "Y U NO MATCH!";
	}
}
console.log(isNotEqual("First","Second"));
console.log(isNotEqual("First", "First"));

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








