window.addEventListener('load', function() {
  document.addEventListener('click', function(event) {
    document.querySelectorAll('.header-links__links__a__option').forEach(function(el) { 
      if (el !== event.target) {
      el.classList.remove('show')
      }
    });
    if (event.target.matches('.header-links__list__a__button')) {
      event.target.closest('.header-links__list__a').querySelector('.header-links__links__a__option').classList.toggle('show')
    }   
  })
})

// $(function() {
//   $('header-links__list a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('header-links__list__active');
// });
