'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
// to select all elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log([...allSections]);

document.getElementById('section--1');

// returns a HTMLCollection which LIVE elements
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// // insert the message div before the header
// header.before(message);

// // insert the message div after the header
// header.after(message);

// Delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // .remove() is new to javascript
//     // message.remove();

//     // old way before remove method was added
//     message.parentElement.removeChild(message);
//   });

// style
message.style.backgroundColor = '#111';
message.style.width = '120%';

console.log(message.style.backgroundColor);

console.log(message.style.color);
console.log(getComputedStyle(message).color);

console.log(getComputedStyle(message).height);

message.style.minHeight =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'sample logo alt value';

// Non-standard attribute
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
// http://127.0.0.1:5500/img/logo.png
console.log(logo.getAttribute('src'));
// img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
// http://127.0.0.1:5500/#
console.log(link.getAttribute('href'));
// #

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('class1', 'class2', 'andMore');
logo.classList.remove('class1', 'class2', 'andMore');
logo.classList.toggle('class1', 'class2', 'andMore');
logo.classList.contains('class1', 'class2', 'andMore');

// Don't use
// it will override all classes
logo.className = 'Jonas';
