// ============== main slide ==================
var mainSwiper = new Swiper(".main-slide", {
    slidesPerView: 5,
    direction: 'horizontal',
    mousewheel: true,
    scrollbar: {
        el: '.main-scrollbar',
        draggable: true,
    },

    on: {
        breakpoint: function (swiper) {
            swiper.changeDirection('horizontal');
        }
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            direction: 'horizontal'
        },
    },
});

// ============== project slide ==================
var projectSwiper = new Swiper(".project-slide", {
    slidesPerView: 5,
    direction: getDirection(),
    mousewheel: true,
    scrollbar: {
        el: '.project-scrollbar',
        draggable: true,
    },
    on: {
        resize: function () {
            projectSwiper.changeDirection(getDirection());
        },
    },
});

// ============== 공통 함수 =============
function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
}