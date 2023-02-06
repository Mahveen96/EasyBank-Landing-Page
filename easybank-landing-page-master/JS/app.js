const navLinks = document.querySelector('.nav-links')
const toggleBtn = document.querySelector('.toggle-btn')
const img = document.querySelector('[data-img]')

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  img.src = navLinks.classList.contains('active')
    ? 'images/icon-close.svg'
    : 'images/icon-hamburger.svg'
})
