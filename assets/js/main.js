$(document).ready(function () {
    var bannerhomeslider = new Swiper('.bannerhome-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var brandlogoslider = new Swiper('.brandlogo-slider', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 7,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: true,
        },

    });
    var featurecategoryslider = new Swiper('.featurecategory-slider', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 5,
        spaceBetween: 50,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        navigation: {
            nextEl: '.feature-button-next',
            prevEl: '.feature-button-prev',
        },
    });
});