//window.onload = function(){
  //console.log("window.onload called!");
  
  //var myName = 'Sarah';

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  function addLastName(){
    //1. document.createElement
    //2. element.appendChild

  var lastNameElem = 
    document.createElement('span');

  var lastNameText = 
    document.createTextNode('Yamashige');

  lastNameElem.id = 'myLastName';
    lastNameElem.appendChild(lastNameText);

  var myNameElem = document.getElementById('myName');
    myNameElem.appendChild(lastNameElem);

    console.log('last name added');

    /*
    var  = document.createElement('div');
    element.id = 'someId';
    document.body.appendChild(element);
    //<div id='someId'>TEST</div>

    var newElement = document.createElement('span');
    newElement.id = 'someOtherId';
    document.getElementById('someId').appendChild(newElement);
    */
  }

  function myComputerLoves () {

    var myComputerLovesElem = 
      document.createElement('span');

    var myComputerLovesText = 
      document.createTextNode('Loves Ice Cream!');

    myComputerLovesElem.id = 'myComputerLoves';
      myComputerLovesElem.appendChild(myComputerLovesText);

    var yourNameElem = document.getElementById('yourName');
    yourNameElem.appendChild(myComputerLovesElem);

    console.log('loves added');

  }

function oldComputerDied () {

  var myOldComputerDiedElem = 
    document.createElement('span');

  var myOldComputerDiedText = 
    document.createTextNode('sadly lost the battle to iced coffee');

  myOldComputerDiedElem.id = 'oldComputerDied';
    myOldComputerDiedElem.appendChild(myOldComputerDiedText);

  var oldComputerElem = document.getElementById('oldComputer');
  oldComputerElem.appendChild(myOldComputerDiedElem);

  console.log('RIP Compy Sr.');

}

//};

/*
var lastNameElem = 
  document.createElement('span');

var lastNameText = 
  document.createTextNode('Last Name');

lastNameElem.id = 'myLastName';
lastNameElem.appendChild(lastNameText);

var myNameElem = document.getElementById('myName');
myNameElem.appendChild(lastNameElem);

console.log('last name added');
*/
