/* global localStorage M */
import { getCurrentDate } from '../functions/getDate.js'
import { getJulianDate } from '../functions/julianDate.js'

export function getLocalStorage () {
  // Obtener los datos del localStorage

  return {
    invoice: parseInt(localStorage.getItem('invoice')),
    day: localStorage.getItem('day'),
    julDay: localStorage.getItem('julDate'),
    area: localStorage.getItem('area'),
    plant: localStorage.getItem('planta'),
    route: localStorage.getItem('route'),
    isSmall: localStorage.getItem('isSmall')
  }
}

export async function configureStorage (defaultValues = {}) {
  // Validar y establecer valores predeterminados en localStorage
  Object.entries(defaultValues).forEach(([key, value]) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, value)
    }
  })

  await getCurrentDate()
    .then(currentDate => {
      const { julDay } = getLocalStorage()
      const today = new Date(currentDate)
      const currentJulDate = getJulianDate(today)

      if (currentJulDate > julDay) {
        // console.log(today.getHours() > 5)
        if (today.getHours() > 5) {
          localStorage.setItem('day', currentDate)
          localStorage.setItem('julDate', currentJulDate)
          localStorage.setItem('invoice', 0)

          M.toast({
            html: 'La fecha fue actualizada',
            displayLength: 2500, // Duración en milisegundos (default: 4000)
            classes: 'rounded' // Clase adicional para dar estilo
          })
        }
      }
    })
    .catch(error => {
      console.error('Error al obtener la fecha:', error)
    })
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
