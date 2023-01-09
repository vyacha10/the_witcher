
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2 ,
 
  navigation: {
    nextEl: '.arrow',
  },
});



var menuButton = document.querySelector('.menu_button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu_button_active');
    menu.classList.toggle('header_active');
})