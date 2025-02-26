// ============== main slide ==================
var mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: 5,
    direction: getDirection(),
    mousewheel: true,
    on: {
        resize: function () {
            mainSwiper.changeDirection(getDirection());
        },
    },
});

// ============== project slide ==================
var projectSwiper = new Swiper(".project-slide", {
    slidesPerView: 5,
    direction: getDirection(),
    mousewheel: true,
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