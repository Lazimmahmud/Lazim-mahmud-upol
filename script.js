
/*==================== toggle icon navbar ===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
var aboutmenu = document.querySelector(".about-menu");

function aboutMenuToggle(){
  aboutmenu.classList.toggle("about-menu-height");
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



/*================ scroll sections active Link ==============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  
/*============= remove toggle icon navbar =================*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};

/*===================== typed js ========================*/
const typed = new Typed('.multiple-text', {
  strings: ['Website Developer', 'Youtuber', 'Programmer', 'Student in class (XI)'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*==================== scroll reveal =======================*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .home-img2, .services-container, .lazim-mahmud-box, .contract form', { origin: 'bottom', });
ScrollReveal().reveal('.home-content h1, .heading,', { origin: 'left' 
  
});


