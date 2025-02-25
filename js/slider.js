// var mainSwiper = new Swiper(".main-swiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//     },
//     mousewheel: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });


var mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: 5,
    direction: getDirection(),

    mousewheel: true,
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}


// var happySwiper = new Swiper(".Happy-swiper", {
//     effect: "fade",
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".happy_btn_next",
//         prevEl: ".happy_btn_prev",
//         clickable: true,
//     },
//     loop: true,
//     autoplay: true,

// });
// // ================================================

// var brandSwiper = new Swiper(".brand-swiper", {
//     effect: "fade",
//     navigation: {
//         nextEl: '.tab-next-1',
//         prevEl: '.tab-prev-1',
//         clickable: true,
//     },
//     loop: true,
// });

// // ================================================
// var nowSwiper = new Swiper(".now-swiper", {
//     effect: "fade",
//     navigation: {
//         nextEl: '.tab-next-2',
//         prevEl: '.tab-prev-2',
//         clickable: true,
//     },
//     loop: true,
// });