document.addEventListener('DOMContentLoaded', function() {
  // Toggle Mobile Menu
  const mobileNav = document.querySelector('.navbar__mobile-menu');
  const mobileToggler = document.querySelector('.navbar__mobile-menu-toggler');
  const mobileNavSticky = document.querySelector('.navbar-sticky__mobile-menu');
  const mobileTogglerSticky = document.querySelector('.navbar-sticky__mobile-menu-toggler');
  const contactDetailsNav = document.querySelector('.contact-details');
  const navbar = document.querySelector('.navbar-sticky');

  mobileToggler.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
  });

  mobileTogglerSticky.addEventListener('click', function() {
    mobileNavSticky.classList.toggle('active');
  })

  // Navbar Scroll
  document.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      navbar.classList.add('slide-in');
      mobileNavSticky.style.display = 'block';
      mobileNav.style.display = 'none';
    }else{
      navbar.classList.remove('slide-in');
      mobileNavSticky.style.display = 'none';
      mobileNav.style.display = 'block';
    }
    
  })

})