$(document).ready(function () {
    var bannerhomeslider = new Swiper('.bannerhome-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        height: 400,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var brandlogoslider = new Swiper('.brandlogo-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 7,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    var featurecategoryslider = new Swiper('.featurecategory-slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.featurecategory-next',
            prevEl: '.featurecategory-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1000: {
                slidesPerView: 5,
            }
        }
    });
    var featurecategoryslider = new Swiper('.bestseller-slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 100,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.bestseller-next',
            prevEl: '.bestseller-prev',
        },
    });
    var featurecategoryslider = new Swiper('.recentview-slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 100,
        navigation: {
            nextEl: '.recentview-next',
            prevEl: '.recentview-prev',
        },
    });
    var featurecategoryslider = new Swiper('.testimonial-slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
    });
});