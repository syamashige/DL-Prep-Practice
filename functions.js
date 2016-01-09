var a = 2;
var b = 4; 
function add (a,b) {
	return a + b;
}
var sum = add(a,b);

function subtract (a,b) {
	return a - b;
}
var difference = subtract (a,b);

function multiply (a, b) {
	return b * a;
}
var product = multiply (a,b);

function checkDifference (x) {
	return "My football team lost " + x + " times this week"; 
}
console.log(checkDifference(difference));

function checkSum (x) {
	return "I CAN ADDZ " + x + " NUMBERS";
}
console.log(checkSum(sum));

function checkProduct (a,b) {
	return a * b;
}
console.log(checkProduct(product, difference));

function addThenSubtract (number1, number2, number3) {
	return (number1 + number2) - number3;
}
console.log(addThenSubtract(4, 5, 7));

function addThenMultiply (number1, number2, number3){
	return (number1 + number2)*number3;
}
var howMany = addThenMultiply(4,5,7);
console.log(howMany);

function createFullName (firstName, lastName) {
	return firstName + " " + lastName;
}
var myFullName = createFullName("Sarah", "Yamashige");
console.log(myFullName);

function verifyDrinkingAge (age){
	if (age >= 21) {
		return true;
	}
	else {
		return false;
	}
}	
var canDrinkBeer = verifyDrinkingAge (20);
console.log(canDrinkBeer);

function throwParty (canDrinkBeer) {
	if (canDrinkBeer === false) {
		return "The Partry will have tons of Cake";
	}
	else {
		return "This Party will have an open bar";
	}
}	
console.log(throwParty(canDrinkBeer));

/* function throwParty (canDrinkBeer) {
	if (canDrinkBeer) {
		return "This Party will have an open bar";
	}
	//canDrinkBeer automatically becomes true (without the comparison - it automatically makes it true)
	else {
		return "The Party will have tons of Cake";
	}
}
*/

function eatFood (firstName, lastName, food){
	return createFullName (firstName, lastName) + " loves to eat " + food;
}
console.log(eatFood("Sarah", "Yamashige", "Cake"));

/* 
function eatFood (firstName, lastName, food) {
	var result = createFullName (firstName, lastName);
	return result + " loves to eat " + food;
}
console.log(eatFood("Sarah", "Yamashige", "Pie"));
*/

function repeater (x) {
	for (var i = 0; i < x; i++) {
		if (canDrinkBeer === true){
			console.log( "Bacon Pancakes, makin' Bacon Pancakes ...");
		}
		else { 
			console.log("Let it go ... LET IT GOOOOOOoOoOoOo...");
		}
	}
}
repeater(howMany);



function repeater (howMany) {
  var message;
  if (canDrinkBeer) {
      message = "Bacon Pancakes";
  }
  else {
    message = "Let it go";
  }
  for (var i = 0; i < howMany; i++){console.log(message);}
}

repeater(howMany);


/*
function repeater(){
 //var message;
 if(canDrinkBeer === true){
   message =  "Bacon Pancakes making...";
 }else{
   message = "Let it goo";
 }  
for (var i = 1; i<=howMany; i++){
  console.log(message);
 }
}
var howMany = repeater();
 */

