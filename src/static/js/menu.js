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

let menu = document.querySelectorAll('.header-links__list')
  menu.forEach(item => {
    let menuLink = item.querySelector('.head')
  })
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