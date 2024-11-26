import { changeArea, fillDropdownAreas, getAreasByPlant } from './area.js'
import { changePlant } from './plant.js'

// import { M } from '../../materialize/materialize.min.js'

export const initializePlace = (plant, area) => {
  const areas = getAreasByPlant(plant)
  fillDropdownAreas(areas)

  viewPlace(plant, area)

  document
    .getElementById('dropdown-area')
    .addEventListener('change', changeArea)
  document
    .getElementById('dropdown-plant')
    .addEventListener('change', changePlant)
}

export const viewPlace = (plant, area) => {
  document.getElementById('dropdown-plant').value = plant
  document.getElementById('dropdown-area').value = area
}
