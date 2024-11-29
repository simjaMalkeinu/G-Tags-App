import { setLocalStorage } from '../../config/storage.js'

export function initializeNavigation () {
  const links = document.querySelectorAll('nav a')
  const slides = document.querySelectorAll('.page-route')

  function navigateTo (route) {
    slides.forEach(slide => {
      slide.classList.remove('active')
      if (slide.id === route) {
        slide.classList.add('active')
      }
    })
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault() // Prevenir la acción predeterminada del enlace
      const route = link.getAttribute('data-route') // Obtener la ruta
      const title = link.getAttribute('title-route') // Obtener la el titulo
      setLocalStorage('route', route)
      navigateTo(route) // Llamar a la función para cambiar la vista
      document.getElementById('page-title').innerHTML = title
    })
  })
}
