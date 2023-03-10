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


var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
// Получить кнопку, которая открывает модальный
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn1.onclick = function() {
  modal1.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal1.style.display = "none";
 
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  
}