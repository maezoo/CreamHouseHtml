// ======================
// mobile-menu ==========
const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
    if (mobileMenu.classList.contains('show')) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';
    }
});

// ======================
// go to top ============
const goTopBtn = document.querySelector('.go_top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
        goTopBtn.classList.add('visible');
    } else {
        goTopBtn.classList.remove('visible');
    }
});

goTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ======================
// header_gnb ===========
const lnbListsClick = document.querySelectorAll('.lnb_list a');
const gnbClicks = document.querySelectorAll('.gnb_title');
const lnbLists = document.querySelectorAll('.lnb_list');
const gnbBg = document.querySelector('.gnb_bg');
const navArea = document.querySelector('.nav');

gnbClicks.forEach(gnbClick => {
    gnbClick.addEventListener('mouseover', () => {
        lnbLists.forEach(lnbList => {
            lnbList.classList.add('show');
        });
        gnbBg.classList.add('show');
    });
});

lnbListsClick.forEach(lnbList => {
    lnbList.addEventListener('mouseover', () => {
        lnbListsClick.forEach(item => {
            if (item !== lnbList) {
                item.style.color = '#7a7a7a';
            }
        });
    });

    lnbList.addEventListener('mouseout', () => {
        lnbListsClick.forEach(item => {
            item.style.color = '';
        });
    });
});

navArea.addEventListener('mouseleave', () => {
    lnbLists.forEach(lnbList => {
        lnbList.classList.remove('show');
    });
    gnbBg.classList.remove('show');
});

// ===============================
// header__user_actions ===========
const globalClick = document.querySelector('.global');
const langList = document.querySelector('.lang');
const langKR = document.querySelector('.korean');

globalClick.addEventListener('mouseover', () => {
    langKR.classList.add('active');
    langList.classList.add('show');
});

langList.addEventListener('mouseleave', () => {
    langList.classList.remove('show');
});

// =====================================
// 반응형일 때 Aos 속성 제거 ================
document.querySelectorAll('.row2, .spc_now, .career_support').forEach(element => {
    if (window.innerWidth <= 1024) {
        element.removeAttribute('data-aos');
    } else {
        if (element.classList.contains('row2')) {
            element.setAttribute('data-aos', 'fade-left');
        }
        if (element.classList.contains('spc_now')) {
            element.setAttribute('data-aos', 'fade-up');
        }
        if (element.classList.contains('career_support')) {
            element.setAttribute('data-aos', 'fade-left');
        }
    }
});

// ======================
// aos-brand ============
document.querySelectorAll('.textBrand-1').forEach(slide => {
    slide.setAttribute('data-aos', 'fade-up');
    slide.setAttribute('data-aos-delay', '-50');
    slide.setAttribute('data-aos-easing', 'linear');
});

document.querySelectorAll('.pageBtn-1').forEach(slide => {
    slide.setAttribute('data-aos', 'fade-up');
    slide.setAttribute('data-aos-easing', 'linear');
    slide.setAttribute('data-aos-offset', '-50');
});

// ======================
// aos-spc_now ==========
document.querySelectorAll('.textBrand-2, .pageBtn-2').forEach(slide => {
    slide.setAttribute('data-aos', 'fade-up');
    slide.setAttribute('data-aos-easing', 'linear');
    slide.setAttribute('data-aos-offset', '-50');
    slide.setAttribute('data-aos-delay', '500');
});

const updateAOSDelay = () => {
    document.querySelectorAll('.textBrand-2, .pageBtn-2').forEach(slide => {
        slide.setAttribute('data-aos', 'fade-up');
        slide.setAttribute('data-aos-easing', 'linear');
        slide.setAttribute('data-aos-offset', '-50');
        if (window.innerWidth <= 1024) {
            slide.setAttribute('data-aos-delay', '300');
        } else {
            slide.setAttribute('data-aos-delay', '500');
        }
    });
};

window.addEventListener('load', updateAOSDelay);
window.addEventListener('resize', updateAOSDelay);

// =================
// brand ===========
const eatBtn = document.querySelector('.sl_eat');
const drinkBtn = document.querySelector('.sl_drink');
const enjoyBtn = document.querySelector('.sl_enjoy');

const img_eat = document.querySelector('.eatImage');
const img_drink = document.querySelector('.drinkImage');
const img_enjoy = document.querySelector('.enjoyImage');

const eatSlide = document.querySelector('.br_01');
const drinkSlide = document.querySelector('.br_02');
const enjoySlide = document.querySelector('.br_03');

function hideAllTexts() {
    eatBtn.classList.remove('active');
    drinkBtn.classList.remove('active');
    enjoyBtn.classList.remove('active');
}

function hideAllImages() {
    img_eat.classList.remove('show');
    img_drink.classList.remove('show');
    img_enjoy.classList.remove('show');
}

function hideAllSlides() {
    eatSlide.classList.remove('move');
    drinkSlide.classList.remove('move');
    enjoySlide.classList.remove('move');
}

window.addEventListener('load', function () {
    eatBtn.classList.add('active');
    img_eat.classList.add('show');
    eatSlide.classList.remove('move');
});

eatBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    img_eat.classList.add('show');
    eatBtn.classList.add('active');
    eatSlide.classList.add('move');
});

drinkBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    img_drink.classList.add('show');
    drinkBtn.classList.add('active');
    drinkSlide.classList.add('move');
});

enjoyBtn.addEventListener('click', function () {
    hideAllImages();
    hideAllTexts();
    hideAllSlides();
    img_enjoy.classList.add('show');
    enjoyBtn.classList.add('active');
    enjoySlide.classList.add('move');
});

// =================
// spc_now  ========
const newsBtn = document.querySelector('.sl_news');
const magazineBtn = document.querySelector('.sl_magazine');
const snsBtn = document.querySelector('.sl_sns');

const newsSlide = document.querySelector('.now_01');
const magazineSlide = document.querySelector('.now_02');
const snsSlide = document.querySelector('.now_03');

newsBtn.classList.add('active');
newsSlide.classList.add('move');

function showSlide(slideToShow, btnToActivate) {
    [newsBtn, magazineBtn, snsBtn].forEach((btn) => {
        btn.classList.toggle('active', btn === btnToActivate);
    });

    [newsSlide, magazineSlide, snsSlide].forEach((slide) => {
        slide.classList.toggle('move', slide === slideToShow);
    });
}

newsBtn.addEventListener('click', () => showSlide(newsSlide, newsBtn));
magazineBtn.addEventListener('click', () => showSlide(magazineSlide, magazineBtn));
snsBtn.addEventListener('click', () => showSlide(snsSlide, snsBtn));

// =================
//푸터 패밀리 =========
const plusBtn = document.querySelector('.select');
const selectBox = document.querySelector('.select_wrap');
const verticalStick = document.querySelector('.ver_rod');

function familySite() {
    plusBtn.addEventListener('click', function () {
        const stickVisible = selectBox.classList.toggle('show');
        verticalStick.style.display = stickVisible ? 'none' : 'block';
    });
}
familySite();


AOS.init();


