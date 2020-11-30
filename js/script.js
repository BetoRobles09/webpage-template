const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const imgs = document.querySelectorAll('.img-gallery')
const imgLightBox = document.querySelector('.add-image')
const lightBox = document.querySelector('.img-light')

menu.addEventListener('click', () => {
  menuNav.classList.toggle('spread')
})

window.addEventListener('click', e => {
  if (menuNav.classList.contains('spread') && e.target !== menuNav && e.target !== menu) {
    menuNav.classList.toggle('spread')
  }
})

imgs.forEach(img => {
  img.addEventListener('click', () => {
    showImage(img.getAttribute('src'))
  })
})

lightBox.addEventListener('click', e => {
  if (e.target !== imgLightBox) {
    lightBox.classList.toggle('show')
    imgLightBox.classList.toggle('show-image')
    menu.style.opacity = 1
  }
})

const showImage = image => {
  imgLightBox.src = image
  lightBox.classList.toggle('show')
  imgLightBox.classList.toggle('show-image')
  menu.style.opacity = 0
}
