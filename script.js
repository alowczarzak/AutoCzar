const burger = document.querySelector(".burger-icon")
burger.addEventListener("click", () => {
    const menu = document.querySelector(".burger-menu")
    menu.classList.toggle("active")
})



const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre',
    },

    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide', 
    });
