// searchbar
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function (e) {
        e.preventDefault();
        searchInput.style.display = 'block';
        searchInput.classList.add('active');
        searchInput.focus();
    });

    searchInput.addEventListener('blur', function () {
        if (this.value === '') {
            this.classList.remove('active');
            setTimeout(() => {
                this.style.display = 'none';
            }, 300); // Match this to the CSS transition time
        }
    });
});

// show cart 
document.addEventListener('DOMContentLoaded', function () {
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

    cartIcon.addEventListener('click', function (e) {
        e.preventDefault();
        openCart();
    });

    closeButton.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    // Optional: Close cart on escape key press
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
            closeCart();
        }
    });
});

// price bar
document.addEventListener('DOMContentLoaded', function () {
    const priceMinInput = document.getElementById('price-min-input');
    const priceMaxInput = document.getElementById('price-max-input');
    const priceMinRange = document.getElementById('price-min');
    const priceMaxRange = document.getElementById('price-max');

    priceMinInput.addEventListener('input', function () {
        const value = Math.min(parseInt(priceMinInput.value), parseInt(priceMaxInput.value) - 1);
        priceMinInput.value = value;
        priceMinRange.value = value;
    });

    priceMaxInput.addEventListener('input', function () {
        const value = Math.max(parseInt(priceMaxInput.value), parseInt(priceMinInput.value) + 1);
        priceMaxInput.value = value;
        priceMaxRange.value = value;
    });

    priceMinRange.addEventListener('input', function () {
        const value = Math.min(parseInt(priceMinRange.value), parseInt(priceMaxRange.value) - 1);
        priceMinRange.value = value;
        priceMinInput.value = value;
    });

    priceMaxRange.addEventListener('input', function () {
        const value = Math.max(parseInt(priceMaxRange.value), parseInt(priceMinRange.value) + 1);
        priceMaxRange.value = value;
        priceMaxInput.value = value;
    });
});