const lang = document.querySelector('.header .lang'),
      langItem = document.querySelectorAll('.header .lang-item'),menuBurger = document.querySelector('.menu-burger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLists = document.querySelectorAll('.mobile-menu ul li'),
      header = document.querySelector('.header'),
      body = document.querySelector('body'),
      faqList = document.querySelectorAll('.faq-list');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
    body.classList.toggle('showScroll')
});

mobileMenuLists.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBurger.classList.toggle('change');
        mobileMenu.classList.toggle('showMobileMenu');
        body.classList.toggle('showScroll')
    })
});

lang.addEventListener('click', () => {
    lang.classList.toggle('borderBottom');
    lang.children[1].classList.toggle('showLangMenu');
});

langItem.forEach(item => {
    item.addEventListener('click', () => {
        lang.children[0].innerText = item.innerText
    })
});



// faqList.forEach(list => {
//     list.addEventListener('click', () => {
//         list.lastElementChild.classList.toggle('showInfo');
//         list.classList.toggle('activeFaq');
//     })
// });



$('.faq-list').click(function() {
    $(this).siblings().removeClass('activeFaq');
    $(this).toggleClass('activeFaq');
  });

