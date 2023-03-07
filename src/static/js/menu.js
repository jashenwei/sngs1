// const links = document.querySelectorAll('.header-links__list__a')

// links.forEach(link => {
//       const header = document.querySelector('.links__list__a__button')
//         header.addEventListener('click', function () {
<<<<<<< HEAD
//           console.log('hi')
=======
>>>>>>> ab5adb2c2d751f476731f53af54ba57f661b3a27
//         document.querySelector('.header-links__links__a__option').classList.toggle('show');
//         document.querySelector('.image').classList.toggle('rotate')
//       });
//       document.addEventListener('click', function (e) {
//         if (e.target !== document.querySelector('.header-links__list__a__button')) {
//           document.querySelector('.header-links__links__a__option').classList.remove('show');
//           document.querySelector('.image').classList.remove('rotate')
//         }
//       })
<<<<<<< HEAD
//активные ссылки nav
const navLink = document.querySelectorAll('.header-links__list__class');
const windowPathname = window.location.pathname;
navLink.forEach(el => {
  if (el.href.includes(windowPathname)) {
    el.classList.add('active');
  }
  if (windowPathname === '/') {
    el.classList.remove('active');
  }
});

//выпадающий список nav
window.addEventListener('load', function () {
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.header-links__links__a__option').forEach(function (el) {
      if (el !== event.target) {
        el.classList.remove('show')
        document.querySelectorAll('.image').forEach(function (img) {
          img.classList.remove('rotate')
        })
      }
    });
    if (event.target.matches('.header-links__list__a__button')) {
      event.target.closest('.header-links__list__a').querySelector('.header-links__links__a__option').classList.toggle('show')
      event.target.closest('.header-links__list__a').querySelector('.image').classList.toggle('rotate')
    }
  })
})

//выпадающий блоки по ссылкам личного кабинета

// Get all the links in the menu
const menuLinks = document.querySelectorAll('.menu-link');
const menuLink = document.querySelector('.menu-link')
// Loop through each link and add an event listener to toggle the active block
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {

    event.preventDefault();
    // Get the ID of the block to show    
    const blockId = link.getAttribute('data-block-id');

    // Hide all the blocks
    const menuBlocks = document.querySelectorAll('.menu-block');
    menuBlocks.forEach(block => block.classList.remove('active'));

    // Show the block with the matching ID
    const blockToShow = document.querySelector(`#${blockId}`);
    blockToShow.classList.add('active');

    menuLinks.forEach(link => link.classList.remove('active_tab'));

    // Add the "active" class to the clicked link
    link.classList.add('active_tab');
  });

});
=======

let listElements = document.querySelectorAll('.header-links__links__a');

listElements.forEach(listElement => {
  listElement.addEventListener('click', () => {
    console.log('hi')
    if (listElement.classList.contains('active')) {
      listElement.classList.remove('active');e
    } else {
      listElements.forEach(listE => {
        listE.classList.remove('active');
      })
      listElement.classList.toggle('active');
    }
  })
});



const navLink = document.querySelectorAll('.header-links__list__class');
const windowPathname = window.location.pathname;
navLink.forEach(el => {
  if (el.href.includes(windowPathname)) {
    el.classList.add('active');
  }
});
// window.addEventListener('load', function() {
//   document.addEventListener('click', function(event) {
//     document.querySelectorAll('.header-links__links__a__option').forEach(function(el) { 
//       if (el !== event.target) {
//       el.classList.remove('show')
//       }
//     });
//     if (event.target.matches('.header-links__list__a__button')) {
//       event.target.closest('.header-links__list__a').querySelector('.header-links__links__a__option').classList.toggle('show')
//     }   
//   })
// })
// let menuFirst = document.querySelectorAll('.header__burger-inside-main-menu-first') 
//   let menuSecondAll = document.querySelectorAll('.header__burger-inside-main-menu-second') 
//   menuFirst.forEach(item => { 
//     let menuSecond = item.querySelector('.header__burger-inside-main-menu-second') 
//     let menuFirstName = item.querySelector('.header__burger-inside-main-menu-first-name') 
//     menuFirstName.addEventListener('click',() => { 
//       let hasCls = item.classList.contains('header__burger-inside-main-menu-first-active') 
//       menuFirst.forEach(item => { 
//         item.classList.remove('header__burger-inside-main-menu-first-active') 
//       }); 
//       if(hasCls) 
//       { 
//         item.classList.remove('header__burger-inside-main-menu-first-active') 
//       } 
//       else 
//       { 
//         item.classList.add('header__burger-inside-main-menu-first-active') 
//       } 
//     }) 
//   });
>>>>>>> ab5adb2c2d751f476731f53af54ba57f661b3a27
