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
