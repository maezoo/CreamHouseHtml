// document.addEventListener('DOMContentLoaded', () => {
//   const logo = document.querySelector('.head-logo');
//   const mainSection = document.querySelector('#main-page');
//   const tabItems = document.querySelectorAll('.gnb-list');
//   const sections = document.querySelectorAll('.gnb-item');

//   mainSection.classList.add('show');

//   logo.addEventListener('click', () => {
//     sections.forEach(section => section.classList.remove('show'))
//     mainSection.classList.add('show');
//   });

//   tabItems.forEach(tab => {
//     tab.addEventListener('click', () => {
//       const targetSelector = tab.getAttribute('data-target');
//       const targetSection = document.querySelector(targetSelector);

//       if (targetSection) {
//         sections.forEach(section => section.classList.remove('show'));
//         targetSection.classList.toggle('show');
//       }
//     });
//   });
// });
// ==============
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.head-logo');
  const mainSection = document.querySelector('#main-page');
  const tabItems = document.querySelectorAll('.gnb-list');
  const sections = document.querySelectorAll('.gnb-item');

  // 이전에 열었던 섹션을 기억해서, 새로고침 후 그 상태로 유지
  const activeTab = sessionStorage.getItem('activeTab');

  // 기본적으로 모든 섹션에서 'show' 클래스를 제거
  sections.forEach(section => section.classList.remove('show'));

  if (activeTab) {
    // 저장된 탭을 열기
    const activeSection = document.querySelector(activeTab);
    if (activeSection) {
      activeSection.classList.add('show');
    }
  } else {
    // activeTab이 없으면 메인 페이지만 보이도록 하기
    mainSection.classList.add('show');
  }

  logo.addEventListener('click', () => {
    sections.forEach(section => section.classList.remove('show'));
    mainSection.classList.add('show');

    // 탭을 클릭했을 때 활성화된 탭 저장
    sessionStorage.removeItem('activeTab');
  });

  tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSelector = tab.getAttribute('data-target');
      const targetSection = document.querySelector(targetSelector);

      if (targetSection) {
        // 모든 섹션에서 'show' 클래스를 제거
        sections.forEach(section => section.classList.remove('show'));

        // 클릭한 탭에 해당하는 섹션만 보이도록 하기
        targetSection.classList.add('show');

        // 클릭한 탭 정보를 sessionStorage에 저장
        sessionStorage.setItem('activeTab', targetSelector);
      }
    });
  });
});