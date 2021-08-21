'use strict';
//// PART 1 ////
// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123; // can be changed!
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);

// // document.all[11].textContent = 'Hello'; // changing the content of the h1 element, not the best way but it's there
// console.log(document.forms[0]);
// console.log(document.forms);

// console.log(document.links);

// console.log(document.images);

// Selectors

//  GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = 'lightgrey'; // ERROR: not gonna work because is a collection and we have to loop through it, like this:

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'lightGrey';
// }

// GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].textContent = 'Hello 3';
// li[3].style.fontWeight = 'bold';
// li[0].style.backgroundColor = 'yellow';

// // Gives error:
// // li.style.backgroundColor = 'lightGrey';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'lightGrey';
// }

// // QUERYSELECTOR //
// // use it only for one items
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');

// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral ';

// QUERYSELCTORALL //

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'lightGrey';
// }

// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = 'darkGrey';
// }

//// PART 2 ////
// TRAVERSING the DOM

// var itemList = document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'orangered';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1';

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello2';

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// // //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div

// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attribute
// newDiv.setAttribute('title', 'hello div');

// // Create a text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// // Insert the element into the DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector(' header h1');

// console.log(newDiv);
// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1); // what we are inserting, newDiv, and what we're inserting before,h1

//// PART 3 ////
/// EVENTS ///
// var button = document
//   .getElementById('button')
//   .addEventListener('click', function () {
//     console.log('I am a callback log!~');
//   });

// var button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick); // ideal way of doing it

// function buttonClick(e) {
//   // console.log('Button clicked!');
//   // document.getElementById('header-title').textContent = 'Changed';
//   // document.querySelector('#main').style.backgroundColor = 'lightGrey';
//   // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // var output = document.getElementById('output');
//   // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//   // // type of event
//   // console.log(e.type);
//   // location in the window
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   // location in the element itself
//   // console.log(e.offsetX);
//   // console.log(e.offsetY);
//   //   test to check if the Alt/Ctrl/Shift key is pressed
//   //   console.log(e.altKey);
//   //   console.log(e.ctrlKey);
//   //   console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent); // fires only for the element itself
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // fires also for any inner elements
// box.addEventListener('mouseout', runEvent); // fires also for any inner elements

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log('EVENT TYPE: ' + e.type);
  console.log(e.target.value);

  // document.body.style.display = 'none';

  // console.log(e.target.value);
  // document.getElementById('output').innerHTML =
  //   '<h3>' + e.target.value + '</h3>';

  // output.innerHTML =
  //   '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';

  // document.body.style.backgroundColor =
  //   'rgb(' + e.offsetX + ',' + e.offsetY + ',40)';
}
