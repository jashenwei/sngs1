// const links = document.querySelectorAll('.header-links__list__a')

// links.forEach(link => {
//       const header = document.querySelector('.links__list__a__button')
//         header.addEventListener('click', function () {
//         document.querySelector('.header-links__links__a__option').classList.toggle('show');
//         document.querySelector('.image').classList.toggle('rotate')
//       });
//       document.addEventListener('click', function (e) {
//         if (e.target !== document.querySelector('.header-links__list__a__button')) {
//           document.querySelector('.header-links__links__a__option').classList.remove('show');
//           document.querySelector('.image').classList.remove('rotate')
//         }
//       })

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