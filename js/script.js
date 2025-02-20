new Splide( '#slider1',
    {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 5,
        padding: '10rem',
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 3,
        },
        breakpoints: {
          760: {
            perPage: 5,
          },
          550: {
            perPage: 2,
          },
        }
    }
 ).mount( window.splide.Extensions);
const FAQBox = document.querySelectorAll('.FAQ__box'),
      FAQItem = document.querySelectorAll('.FAQ__item');
function hiddenFAQ() {
  FAQBox.forEach(item => {
    item.classList.remove('active')
  })
}   
hiddenFAQ;
function AddFAQ(i) {
  FAQBox[i].classList.toggle('active')
};
FAQItem.forEach((item, index)=> {
  item.addEventListener('click', ()=> {
    AddFAQ(index)
  })
});
//menu
const hamburger = document.querySelector('.hamburger'), 
      menu = document.querySelector('.menu');
hamburger.addEventListener('click', ()=> {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
});
//popup
const headerMore = document.querySelector('.header__more');
const header = document.querySelector('.header');
const popupMenu = document.querySelector('.popupMenu');

headerMore.addEventListener('mouseenter', () => {
  header.classList.add('active');
  popupMenu.classList.add('active');
});

headerMore.addEventListener('mouseleave', () => {
  if (!popupMenu.classList.contains('active')) {
    closePopup();
  }
});

popupMenu.addEventListener('mouseenter', () => {
  header.classList.add('active');
  popupMenu.classList.add('active');
});

popupMenu.addEventListener('mouseleave', () => {
  closePopup();
});

function closePopup() {
  header.classList.remove('active');
  popupMenu.classList.remove('active');
}

  
       
