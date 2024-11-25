import { setLocalStorage, getLocalStorageItem } from '../../config/storage.js'

export function initializeSidebar () {
  const toggleBtn = document.getElementById('toggle-btn')
  const sidebar = document.getElementById('sidebar')
  const sidebarTitle = document.getElementById('sidebar-title')
  const sidebarTexts = document.querySelectorAll('.sidebar-text')
  const sidebarIcons = document.querySelectorAll('.sidebar-icon')
  const iconMenu = document.getElementById('icon-menu')

  // Obtener el estado inicial desde el localStorage y convertirlo a booleano
  let isSmall = JSON.parse(getLocalStorageItem('isSmall') || 'false')

  // Función para aplicar el estado del sidebar
  const applySidebarState = isSmall => {
    if (isSmall) {
      sidebar.classList.remove('w-64')
      sidebar.classList.add('w-20')
      sidebarTitle.classList.add('hidden')
      sidebarTexts.forEach(text => text.classList.add('hidden'))
      sidebarIcons.forEach(icon => {
        icon.parentElement.classList.add('icon-centered') // Centrar íconos
        icon.classList.add('text-3xl') // Aumentar tamaño de los íconos
        icon.classList.add('my-2')
      })
      iconMenu.classList.remove('fa-arrow-left')
      iconMenu.classList.add('fa-bars')
    } else {
      sidebar.classList.remove('w-20')
      sidebar.classList.add('w-64')
      sidebarTitle.classList.remove('hidden')
      sidebarTexts.forEach(text => text.classList.remove('hidden'))
      sidebarIcons.forEach(icon => {
        icon.parentElement.classList.remove('icon-centered') // Restaurar alineación normal
        icon.classList.remove('text-3xl') // Restaurar tamaño de los íconos
        icon.classList.remove('my-2')
      })
      iconMenu.classList.add('fa-arrow-left')
      iconMenu.classList.remove('fa-bars')
    }
  }

  // Aplicar el estado inicial del sidebar
  applySidebarState(isSmall)

  // Agregar el evento para alternar el estado al hacer clic en el botón
  toggleBtn.addEventListener('click', () => {
    isSmall = !isSmall
    setLocalStorage('isSmall', JSON.stringify(isSmall)) // Guardar como cadena en localStorage
    applySidebarState(isSmall)
  })
}
