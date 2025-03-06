// ============== main slide ==================
var mainSwiper = new Swiper(".main-slide", {
    slidesPerView: 5,
    direction: 'horizontal',
    // mousewheel: true,

    mousewheel: {
        // forceToAxis: true, // 가로/세로 한 방향으로만 스크롤
        // sensitivity: 1,  // 마우스 휠 감도 (값을 높이면 더 민감하게 움직임)
        // releaseOnEdges: true // 끝에서 마찰 없이 빠져나가는 효과
    },
    freeMode: {
        enabled: true,  // 스크롤할 때 자연스럽게 움직이게
        // momentumRatio: 10, // 관성 강도 (값을 조정하면 "ㅜㅉ욱~" 정도를 바꿀 수 있음)
    },


    scrollbar: {
        el: '.main-scrollbar',
        draggable: true,
    },
    on: {
        init: function (swiper) {
            document.querySelector('.main-scrollbar').style.opacity = "0"; // 처음에는 숨김
        },
        touchStart: function (swiper) {
            document.querySelector('.main-scrollbar').style.opacity = "1"; // 터치하면 보이게
        },
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