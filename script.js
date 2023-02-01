const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
    });

const btn_reserve = document.querySelector('.reserve');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const header_content = document.querySelector('.header-content');
const btn_menu = document.querySelector('.menu');
const menu_mobile = document.querySelector('.mobile-content');
const btn_exit = document.querySelector('.exit');
const timetable = document.querySelector('.timetable');
const main_content = document.querySelector('main');
const btn_reserve_mobile = document.querySelector('.reserve-mobile');


const openModal = function () {
    console.log("open");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // btn_reserve_mobile.style.zIndex = '1';
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    // btn_reserve_mobile.style.zIndex = '15';
  };

btn_reserve.addEventListener('click', openModal);
btn_reserve_mobile.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);


const mediaQuery = window.matchMedia('(max-width: 600px)');
function handleTabletChange(e) {
if(e.matches){
  header_content.classList.add('hidden');
  btn_menu.classList.remove('hidden');
  btn_reserve_mobile.classList.remove('hidden');
}
else {
  header_content.classList.remove('hidden');
  btn_menu.classList.add('hidden');
  menu_mobile.classList.add('hidden_2');
  btn_reserve_mobile.classList.add('hidden');
}
}

mediaQuery.addListener(handleTabletChange)


handleTabletChange(mediaQuery)


btn_menu.addEventListener('click', function() {
  menu_mobile.classList.remove('hidden');
  btn_menu.classList.add('hidden');

})

btn_exit.addEventListener('click', function() {
  if (menu_mobile.style.opacity = "1") {
    timetable.classList.add('add_margin');
    btn_menu.classList.remove('hidden');
    menu_mobile.classList.add('hidden');
  }
  
})