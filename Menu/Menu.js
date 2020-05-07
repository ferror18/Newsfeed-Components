/* This is the data we will be using, study it but don't change anything, yet. */
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
// menumaker

function menuMaker(menuItemsArray) {
  let menu = document.createElement('div');
  let ul = document.createElement('ul');
  let menuButton = document.querySelector('.menu-button');
  //nesting
  menuItemsArray.forEach(element => {
    let currentli = document.createElement('li');
    currentli.textContent = element;
    ul.appendChild(currentli);
  });
  menu.appendChild(ul);
  // classes
  menu.classList.add('menu');
  //event listeners
  $('.menu-button').click(function (event){$('.menu').animate({width: 'toggle'}, 600);}) 
  // $('body').click(function ok(event){$('.menu').animate({width: '0'}, 600);});
  // $('body').off( "click", ".menu-bottom", ok );
  // menuButton.addEventListener('click', event => {menu.classList.toggle('menu--open')})
  //return outer-most element in the component
  return menu
}
// menuMaker(menuItems);
document.querySelector('.header').appendChild(menuMaker(menuItems));

// Menu Animations
// $( "#clickme" ).click(function() {$( "#book" ).animate({opacity: 0.25,left: "+=50",height: "toggle"}, 5000, function() {});});