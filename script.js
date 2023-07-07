'use strict';
// scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// tabs
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");

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

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Scolling

// scrolling - other way
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     // result: #section--3

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// scrolling better way
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching the strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Tabs

// event deligation
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  //   remove all active class
  tabs.forEach((btn) => btn.classList.remove("operations__tab--active"));
  //   remove all active class to the content
  tabContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  //   then add active class to current tab clicked
  clicked.classList.add("operations__tab--active");
  //   then add active class to current content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});


// btnScrollTo.addEventListener('click', function (e) {
//   const s1coordinate = section1.getBoundingClientRect();
//   console.log(s1coordinate);

//   // e.target means btnScrollTo or to its self like the this keyword
//   console.log(e.target.getBoundingClientRect());

//   // current X and Y coordinate of the button
//   console.log('current scroll(x,y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width viewport',
//     // current height of the viewport
//     document.documentElement.clientHeight,
//     // current width of the viewport
//     document.documentElement.clientWidth
//   );

//   // to scroll to the desired section (old way)
//   // window.scrollTo({
//   //   left: s1coordinate.left + window.pageXOffset,
//   //   top: s1coordinate.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // to scroll to the desired section (new way)
//   section1.scrollIntoView({ behavior: 'smooth' });
// });
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Selecting elements
// to select all elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log([...allSections]);

// document.getElementById('section--1');

// // returns a HTMLCollection which LIVE elements
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
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
// message.style.backgroundColor = '#111';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);

// console.log(message.style.color);
// console.log(getComputedStyle(message).color);

// console.log(getComputedStyle(message).height);

// message.style.minHeight =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'sample logo alt value';

// // Non-standard attribute
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// // http://127.0.0.1:5500/img/logo.png
// console.log(logo.getAttribute('src'));
// // img/logo.png

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// // http://127.0.0.1:5500/#
// console.log(link.getAttribute('href'));
// // #

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('class1', 'class2', 'andMore');
// logo.classList.remove('class1', 'class2', 'andMore');
// logo.classList.toggle('class1', 'class2', 'andMore');
// logo.classList.contains('class1', 'class2', 'andMore');

// // Don't use
// // it will override all classes
// logo.className = 'Jonas';

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Alert message');

//   // to remove the event
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1));

// // old ways of adding event
// h1.onmouseenter = function () {
//   alert('onmouseenter alert');
// };

// // create random colors
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// selecting elements

const h1 = document.querySelector('h1');

// // going downwards : child
// console.log(h1.querySelectorAll('.highlight'));
// // result: NodeList [ span.highlight, span.highlight ]
// console.log(h1.childNodes);
// // result: NodeList(9) [ #text, <!--  Green highlight effect  -->, #text, span.highlight, #text, br, #text, span.highlight, #text ]
// console.log(h1.children);
// // result: HTMLCollection { 0: span.highlight, 1: br, 2: span.highlight, length: 3 }

// console.log(h1.firstElementChild);
// // result: <span class="highlight">

// console.log(h1.lastElementChild);
// // result: <span class="highlight">

// // going upwards: parents
// console.log(h1.parentNode);
// // result: <div class="header__title">

// console.log(h1.parentElement);
// // result: <div class="header__title">

// // closest means parent elements even how far/deep the parent is
// h1.closest('.header').style.background = 'red';

// going sideways : siblings
// console.log(h1.previousElementSibling);
// // result: null
// console.log(h1.nextElementSibling);
// // result: <h4>

// console.log(h1.previousSibling);
// // result: #text "\n        "

// console.log(h1.nextSibling);
// // result: #text "\n        "

// // selects the h1, then go up to its parent
// // then selects all the children
// console.log(h1.parentElement.children);
// // result: HTMLCollection { 0: h1, 1: h4, 2: button.btn--text.btn--scroll-to, 3: img.header__img, length: 4 }

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.color = 'red';
// });
