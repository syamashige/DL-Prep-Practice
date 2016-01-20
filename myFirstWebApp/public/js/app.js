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

  function imaginaryFriendLoves () {

    var imaginaryLovesElem = 
      document.createElement('span');

    var imaginaryLovesText = 
      document.createTextNode('Loves Ice Cream');

    imaginaryLovesElem.id = 'imaginaryLoves';
    imaginaryLovesElem.appendChild(imaginaryLovesText);

    var yourNameElem = document.getElementById('yourName');
    yourNameElem.appendChild(imaginaryLovesElem);

    console.log('loves added');



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
