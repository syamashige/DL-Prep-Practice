//Presidents - Accessing values in an Array 
//Declare a variable named presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe
//Now write a For Loop which iterates through this Array 
//Within the For Loop, use console.log to: 
	//Log the value of i - Use a message like value of i is: and append the value of i to this String 
	//Long what is at index i in the array - Use a message like Value at Index is: and append the value stored within the Array at the index 

var presidents = ["Washington", "Adams","Jefferson", "Madison", "Monroe"];
/*for (var i = 0; i < presidents.length; i++) {
	console.log("value of i is: " + i); //console.log("Value of i is:", i) is the same way of writing it 
 	console.log("Value at index is: " + presidents[i]);
 }*/

//Bonus: 
function printContent(presidents, i) { //function printContent(i) is another way you can write it because presidents is already defined 
	console.log("value of i is: " + i); //console.log("Value of i is:", i) is the same way of writing it 
 	console.log("Value at index is: " + presidents[i]);
}
for (var i = 0; i < presidents.length; i++) {
	//printContent(presidents, i);
	printContent(presidents);
}

//The String of Numbers 
//Declare a variable named stringOfNumbers and set it's value to '' (an empty String)
var stringOfNumbers = '';
//Then write a for loop that appends a Number value to that string starting from 10 all the way up to and including 20 
//After the for loop, use console.log to inspect your variable. In the end your string should look like this 1011121314151617181920. 

for (var i = 10; i <= 20; i++) {
	stringOfNumbers += i; //same as stringOfNumbers = stringOfNumbers + i
}
console.log(stringOfNumbers);

//Bonus: 
function appendToString (stringToAppendTo, stringToAppend) {
	return stringToAppendTo + stringToAppend;
}

//function createStringOfNumbers () {			
var stringOfNumbers = ''; 						//function createStringOfNumbers (start, end)
for (var i = 10; i <= 20; i++) {
	// for (var i = start; i <= end; i++); 	    // console.log(createStringOfNumbers(10, 20));
	stringOfNumbers = appendToString(stringOfNumbers, i);
}
//return stringOfNumbers; 
// }


//var myStringOfNumbers = createStringOfNumbers();
// console.log(createStringOfNumbers(10, 20));
console.log(stringOfNumbers); //console.log(createStringOfNumbers());
//Remember to call a function you have to add the "()" 

//Add only even numbers to an array
//Declare a variable evenNumberArray 
//Use a For loop to add only even numbers to an Array 
//Add 50 even numbers to the evenNumberArray starting with the value 0
var evenNumberArray = [];
for (var j = 0; j < 99; j += 2 ) {
	evenNumberArray.push(j);
}
console.log(evenNumberArray); 

/* var evenNumberArray = [];
for (var j = 0; j < 99; i++){
	if (j % 2 === 0) {
		evenNumberArray.push(j);
	}
}
*/

/* 
for (var j = 1; j < 99; i++) {
	if (j %2 === 0) {
	evenNumberArray.push(j);
	}
}
//doesn't work 
//works if ... (j % 2 === 1)
*/

//Accessing only the odd indexes of an Array - 'Not Even Brah'
//Declare a new variable named oopsArray se it's value to be: 
var oopsArray = ['turn', , 'down', , 'for', , 'what'];
console.log('oopsArray', oopsArray.length, oopsArray);

for (var k = 0; k < oopsArray.length; k++) {
	console.log (k, oopsArray[k]); //spaces in the array come out as undefined 
	if (k % 2 === 1) { //this makes it odd 
		oopsArray[k] = 'nope'; //we can assign something to particular positions within the array 
		//assigns 'nope', to all of the odd placements


	//if(!oopsArray[k]) { //if not undefined - then it's true
		//oopsArray[k] = 'nope';
	//}
	}  

}
//Odd index: remember that means that "odd", are the "second", "fourth", etc. placements - because we are using a 0 index 











