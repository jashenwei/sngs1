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
  // if (windowPathname === '/this_card.html'){
  //   el[1].classList('active');
  // }
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

const menuButtons = document.querySelectorAll('.menu-button');
const modals = document.querySelectorAll('.modal');


// Добавляем обработчик событий на каждую кнопку меню
menuButtons.forEach((button, index) => {
  // При клике на кнопку меню
  button.addEventListener('click', () => {
    // Делаем модальное окно активным
    modals[index].classList.add('active');
  });

  // При клике на кнопку "Отменить"
  modals[index].querySelector('.modal-content__action__buttons__cancel').addEventListener('click', () => {
    // Скрываем модальное окно
    modals[index].classList.remove('active');
  });

  // При клике на кнопку "Закрыть"
  modals[index].querySelector('.close-btn').addEventListener('click', () => {
    // Скрываем модальное окно
    modals[index].classList.remove('active');
  });
});
// Добавляем обработчик событий на каждое модальное окно
modals.forEach((modal) => {
  // При клике на фон модального окна
  modal.addEventListener('click', (event) => {
    // Если клик был на самом фоне (не на контенте модального окна)
    if (event.target === modal) {
      // Скрываем модальное окно
      modal.classList.remove('active');
    }
  });
});

//выпадающий список
// Get all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdown-trigger button');

// Loop through dropdown buttons and add event listeners
dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get dropdown menu and toggle 'is-active' class
    const dropdownMenu = button.parentElement.nextElementSibling;
    dropdownMenu.classList.toggle('is-active');
    // Toggle 'is-active' class and rotate arrow icon
    button.parentElement.classList.toggle('is-active');
    const arrowIcon = button.querySelector('svg');
    arrowIcon.classList.toggle('rotate-180');
  });
});

// Get all dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Loop through dropdown items and add event listeners
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get selected option and set button text
    const selectedOption = item.textContent;
    const dropdownButton = item.closest('.dropdown').querySelector('button');
    dropdownButton.textContent = selectedOption;
    // Hide dropdown menu
    const dropdownMenu = item.closest('.dropdown-menu');
    dropdownMenu.classList.remove('is-active');
  });
});

// Add event listener to close dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector('.dropdown-menu').classList.remove('is-active');
      dropdown.querySelector('.dropdown-trigger').classList.remove('is-active');
      const arrowIcon = dropdown.querySelector('.dropdown-trigger svg');
      if (arrowIcon.parentElement.classList.contains('is-active')) {
        arrowIcon.classList.add('rotate-180');
      } else {
        arrowIcon.classList.remove('rotate-180');
      }
    }
  });
});

document.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.table');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector('.cards-container-main__cards__myCards__block').classList.remove('is-active');
      dropdown.querySelector('.cards-container-main__cards__myCards__group__image').classList.remove('is-active');
      const arrowIcon = dropdown.querySelector('cards-container-main__cards__myCards__group__image svg');
      if (arrowIcon.parentElement.classList.contains('is-active')) {
        arrowIcon.classList.add('rotate-180');
      } else {
        arrowIcon.classList.remove('rotate-180');
      }
    }
  });
});

//кнопка прикрепите файл
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  console.log(`Выбранный файл: ${file.name}`);
});