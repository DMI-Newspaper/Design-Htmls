// Header scroll event
window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Handle Language Dropdown
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
let selectedLanguage = 'EN';

// Toggle dropdown visibility
languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
});

// Handle language selection
languageDropdown.addEventListener('click', (event) => {
    if (event.target.matches('.dropdown-item')) {
        selectedLanguage = event.target.getAttribute('data-lang');
        languageBtn.textContent = selectedLanguage;

        document.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));

        event.target.classList.add('active');

        languageDropdown.classList.remove('show');
    }
});

// Page active selector
document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.pathname.replace(/\/$/, '').toLowerCase(); // Removes trailing slash
    const navLinks = document.querySelectorAll("#navMenu .nav-link");

    navLinks.forEach(link => {
      const linkUrl = link.getAttribute("href").replace(/\/$/, '').toLowerCase(); // Remove trailing slash and make lowercase
      if (currentUrl === linkUrl || (linkUrl === '/en-ae' && currentUrl === '/en-ae/index.html')) {
        link.classList.add("active");
      }
    });
});

document.addEventListener('click', (event) => {
    if (!languageDropdown.contains(event.target) && !languageBtn.contains(event.target)) {
        languageDropdown.classList.remove('show');
    }
});

var offcanvasMenu = document.getElementById('offcanvasMenu');

offcanvasMenu.addEventListener('show.bs.offcanvas', function () {
    document.body.style.paddingRight = '0';
});

offcanvasMenu.addEventListener('hide.bs.offcanvas', function () {
    document.body.style.paddingRight = '';
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#services-slider', {
        type: 'loop',
        perPage: 4, 
        pagination: false,
        arrows: false,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                padding: '2rem',
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#catalogue-slider', {
        type: 'loop',
        perPage: 4, 
        gap: '20px',
        pagination: false,
        arrows: false,
        autoWidth: true,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                padding: '2rem',
            },
        },
        autoplay   : true,
        interval   : 3000,
    } ).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#partners-slider', {
        type: 'loop',
        drag   : 'free',
        focus  : 'center',
        gap: '20px',
        perPage: 4,
        pagination: false,
        arrows: false,
        autoWidth: true,
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
            },
        },
        autoScroll: {
          speed: 1,
        },
    }).mount(window.splide.Extensions);
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#vision-slider', {
        type: 'loop',
        perPage: 3, 
        pagination: false,
        arrows: false,
        gap: 25,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                padding: '2rem',
                gap: 10,
                paddingRight: '5rem',
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#team-slider', {
        type: 'loop',
        perPage: 4, 
        pagination: false,
        arrows: false,
        gap: 25,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                autoWidth : true,
                gap: 16,
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#team-slider', {
        type: 'loop',
        perPage: 4, 
        pagination: false,
        arrows: false,
        gap: 25,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                perPage: 2,
                paddingRight: '5rem',
            },
            768: {
                perPage: 1,
                autoWidth : true,
                gap: 16,
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#catalogue-left-slider', {
        type: 'loop',
        perPage: 1, 
        pagination: true,
        arrows: false,
        width: '300px',
        gap: 25,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                paddingRight: '5rem',
            },
            768: {
                width : '100%',
                gap: 16,
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#catalogue-right-slider', {
        type: 'loop',
        perPage: 1, 
        pagination: false,
        arrows: false,
        gap: 25,
        direction  : document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr',
        breakpoints: {
            1024: {
                paddingRight: '5rem',
            },
            768: {
                width : '100%',
                gap: 16,
            },
        },
        autoplay   : false,
        interval   : 3000,
    } ).mount();
});