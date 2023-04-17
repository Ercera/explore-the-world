/* Carousel */

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
    responsive: {
        // breakpoint from 0 up
        0: {
            margin: 5,
            items: 1,
        },

        350: {
            margin: 3,
            items: 2,
        },

        595: {
            margin: 15,
            items: 2,
        },
        // breakpoint from 767 up
        768: {
            startPosition: 0,
            items: 3,
        },
        // breakpoint from 1000 up
        1000: {
            margin: 20,
        },
        1200: {
            margin: 30,
        }
    }
});

$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})


$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})

/* Subscibe Label */

const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');

inputSubscribe.addEventListener('input', () => {
    if (inputSubscribe.value.trim() !== '') {
        label.classList.add('subscribe__label--top');
    } else {
        label.classList.remove('subscribe__label--top');
    }
});

/* Button mobile menu */

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const mobileMenu = document.querySelector('.btn--mobile');

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    mobileMenu.classList.toggle('btn--mobile-active');
    document.body.classList.toggle('no-scroll');
};