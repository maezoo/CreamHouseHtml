
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

var projectSwiper = new Swiper(".project-slide", {  // 변수명 변경
    slidesPerView: 5,
    direction: getDirection(),
    mousewheel: true,
    on: {
        resize: function () {
            projectSwiper.changeDirection(getDirection());  // 변수명 변경
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
}