const burgir = document.querySelector(".burgir__menu")
const hNav = document.querySelector(".header__nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    hNav.classList.toggle("open");

})
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });

});