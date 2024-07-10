// searchbar
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
  
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchInput.style.display = 'block';
      searchInput.classList.add('active');
      searchInput.focus();
    });
  
    searchInput.addEventListener('blur', function() {
      if (this.value === '') {
        this.classList.remove('active');
        setTimeout(() => {
          this.style.display = 'none';
        }, 300); // Match this to the CSS transition time
      }
    });
  });

// show cart 
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeButton = document.querySelector('.cart-mini-header-close');
    const overlay = document.getElementById('overlay');
  
    function openCart() {
      cartSidebar.classList.add('active');
      overlay.style.display = 'block';
    }
  
    function closeCart() {
      cartSidebar.classList.remove('active');
      overlay.style.display = 'none';
    }
  
    cartIcon.addEventListener('click', function(e) {
      e.preventDefault();
      openCart();
    });
  
    closeButton.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
  
    // Optional: Close cart on escape key press
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
        closeCart();
      }
    });
  });
  
// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Automatic slideshow
let autoSlideIndex = 0;
autoShowSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[autoSlideIndex - 1].style.display = "block";
    dots[autoSlideIndex - 1].className += " active";
    setTimeout(autoShowSlides, 4000); // Change image every 4 seconds
}

// Scroll to reveal
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const expandableItems = document.querySelectorAll('.repo__dropdown');

    function openMenu() {
        sideMenu.classList.add('active');
        overlay.style.display = 'block';
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
        overlay.style.display = 'none';
    }

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    document.body.addEventListener('click', function(event) {
        if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
            closeMenu();
        }
    });

    sideMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    expandableItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('active');
            const submenu = this.querySelector('.repo__header__dropdown');
            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
// Back to top button
var mybutton = document.getElementById("back-to-top-btn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}