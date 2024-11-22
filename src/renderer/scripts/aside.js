document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar')
  const toggleBtn = document.getElementById('toggle-btn')
  const sidebarTitle = document.getElementById('sidebar-title')
  const sidebarTexts = document.querySelectorAll('.sidebar-text')
  const sidebarIcons = document.querySelectorAll('.sidebar-icon')
  const iconMenu = document.getElementById('icon-menu')

  let isSmall = false // Estado inicial: grande

  toggleBtn.addEventListener('click', () => {
    isSmall = !isSmall // Alternar estado

    if (isSmall) {
      // Cambiar a tamaño pequeño
      sidebar.classList.remove('w-64')
      sidebar.classList.add('w-20')
      sidebarTitle.classList.add('hidden')
      sidebarTexts.forEach(text => text.classList.add('hidden'))
      sidebarIcons.forEach(icon => {
        icon.parentElement.classList.add('icon-centered') // Centrar íconos
        icon.classList.add('text-3xl') // Aumentar tamaño de los íconos
      })
      iconMenu.classList.remove('fa-arrow-left')
      iconMenu.classList.add('fa-bars')
    } else {
      // Cambiar a tamaño grande
      sidebar.classList.remove('w-20')
      sidebar.classList.add('w-64')
      sidebarTitle.classList.remove('hidden')
      sidebarTexts.forEach(text => text.classList.remove('hidden'))
      sidebarIcons.forEach(icon => {
        icon.parentElement.classList.remove('icon-centered') // Restaurar alineación normal
        icon.classList.remove('text-3xl') // Restaurar tamaño de los íconos
      })
      iconMenu.classList.add('fa-arrow-left')
      iconMenu.classList.remove('fa-bars')
    }
  })

  const links = document.querySelectorAll('nav a')
  const slides = document.querySelectorAll('.page-route')

  // Función para cambiar la ruta
  function navigateTo (route) {
    slides.forEach(slide => {
      slide.classList.remove('active')
      if (slide.id === route) {
        slide.classList.add('active')
      }
    })
  }

  // Evento de clic en los enlaces de navegación
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault() // Prevenir la acción predeterminada del enlace
      const route = link.getAttribute('data-route') // Obtener la ruta
      navigateTo(route) // Llamar a la función para cambiar la vista
    })
  })
})
