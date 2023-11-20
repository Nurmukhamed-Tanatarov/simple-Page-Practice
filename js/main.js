(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.headerNav');
    const menuClose = document.querySelector('.header_nav_close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('headerNav_active');
    })
    menuClose.addEventListener('click', () => {
        menu.classList.remove('headerNav_active');
    })
})