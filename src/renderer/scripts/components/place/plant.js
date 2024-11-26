/* global M */

import { setLocalStorage } from '../../config/storage.js'
import { fillDropdownAreas, getAreasByPlant } from './area.js'

export const setPlant = planta => {
  setLocalStorage('planta', planta)
}

export const changePlant = () => {
  const planta = document.getElementById('dropdown-plant').value
  const areas = getAreasByPlant(planta)

  fillDropdownAreas(areas)

  setLocalStorage('planta', planta)
  setLocalStorage('area', areas[0].valor)

  console.log(
    'the plant was changed to ' +
      planta +
      ', in the ' +
      areas[0].valor +
      ' area'
  )

  M.toast({
    html: `the plant was changed to ${planta}, in the ${areas[0].valor} area`,
    displayLength: 2500, // Duración en milisegundos (default: 4000)
    classes: 'rounded' // Clase adicional para dar estilo
  })
}
