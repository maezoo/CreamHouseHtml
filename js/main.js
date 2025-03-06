document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.head-logo');
  const mainSection = document.querySelector('#main-page');
  const tabItems = document.querySelectorAll('.gnb-list');
  const sections = document.querySelectorAll('.gnb-item');
  const activeTab = sessionStorage.getItem('activeTab');
  sections.forEach(section => section.classList.remove('show'));

  if (activeTab) {
    const activeSection = document.querySelector(activeTab);
    if (activeSection) {
      activeSection.classList.add('show');
    }
  } else {
    mainSection.classList.add('show');
  }

  logo.addEventListener('click', () => {
    sections.forEach(section => section.classList.remove('show'));
    mainSection.classList.add('show');
    sessionStorage.removeItem('activeTab');
  });

  tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSelector = tab.getAttribute('data-target');
      const targetSection = document.querySelector(targetSelector);

      if (targetSection) {
        sections.forEach(section => section.classList.remove('show'));
        targetSection.classList.add('show');
        sessionStorage.setItem('activeTab', targetSelector);
      }
    });
  });
});

// ===================================
// mobile
// ===================================


// 팝업 open /close ==========================
const hamburger = document.querySelector('.mo-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-x');
const sideBar = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  sideBar.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  sideBar.classList.remove('show');
});
