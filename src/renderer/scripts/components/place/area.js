import { OPCA, OPHU, OPV1, OPV2 } from '../../config/constants.js'
import { setLocalStorage } from '../../config/storage.js'

export const getAreasByPlant = (plant = 'V1') => {
  const areas = {
    V1: OPV1,
    V2: OPV2,
    CA: OPCA,
    HU: OPHU
  }

  // Verificar si la planta existe en el objeto `areas`
  if (!areas[plant]) {
    console.warn(`Plant '${plant}' not found. Returning default area for 'V1'.`)
    return areas.V1 // Retornar un valor predeterminado o null
  }

  return areas[plant]
}

export const changeArea = () => {
  const dropdownArea = document.getElementById('dropdown-area').value
  setArea(dropdownArea)
  console.log('the area was changed to ' + dropdownArea)
}

export const fillDropdownAreas = (options = []) => {
  const areaSelect = document.getElementById('dropdown-area')
  areaSelect.innerHTML = ''
  options.forEach(opcion => {
    const optionElement = document.createElement('option')
    optionElement.value = opcion.valor
    optionElement.textContent = opcion.texto
    areaSelect.appendChild(optionElement)
  })
}

export const setArea = area => {
  setLocalStorage('area', area)
}
