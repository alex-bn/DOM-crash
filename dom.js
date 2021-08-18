'use strict';
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

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'lightGrey';
}

for (var i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'darkGrey';
}
