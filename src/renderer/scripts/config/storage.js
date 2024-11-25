/* global localStorage */

export function getLocalStorage (defaultValues = {}) {
  // Validar y establecer valores predeterminados en localStorage
  Object.entries(defaultValues).forEach(([key, value]) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, value)
    }
  })

  // Obtener los datos del localStorage
  return {
    lastFolio: localStorage.getItem('Invoice'),
    lastday: localStorage.getItem('day'),
    area: localStorage.getItem('area'),
    planta: localStorage.getItem('planta'),
    isSmall: localStorage.getItem('isSmall'),
    today: new Date()
  }
}

export function setLocalStorage (key, value) {
  localStorage.setItem(key, value)
}

export function getLocalStorageItem (key) {
  return localStorage.getItem(key)
}

export function removeLocalStorage (key) {
  localStorage.removeItem(key)
}
