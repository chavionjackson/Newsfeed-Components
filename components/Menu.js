// This is the data we will be using, study it but don't change anything, yet.

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
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
//Created function and elements
const menuMaker = (arr) => {
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  //Added class to element div
  div.classList.add('menu');
  //Lopped through array and created element li
  arr.forEach(item => {
    const li = document.createElement('li');
    //Added items from array to list
    li.textContent = item;
    //Attached list items to unordered list.
    ul.appendChild(li);
  })

  //Grabbed element img
  const element = document.querySelector('img');
  //Added click event to element with 'menu--open' class
  element.addEventListener('click', () => {
    div.classList.toggle('menu--open');
  })

  //Attached element ul to the div
  div.appendChild(ul);
  return div;
}

//Grabbed element with class .header
const parent = document.querySelector('.header');
//Attached menuMaker with the menu items to the parent element. 
parent.appendChild(menuMaker(menuItems));
