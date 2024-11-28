import idElements from '../../../utils/idElements.js'
import { getDataInputs } from '../inputs/getData.js'

export const updateCard = () => {
  const { gNumPart, gLot, gStandar, gUnit, gOperation } = getDataInputs()

  const cNumPart = document.getElementById(idElements.id_c_numPart)
  const cLot = document.getElementById(idElements.id_c_lot)
  const cQuantity = document.getElementById(idElements.id_c_quantity)
  const cOperation = document.getElementById(idElements.id_c_operation)

  cNumPart.innerHTML = gNumPart
  cLot.innerHTML = gLot
  cQuantity.innerHTML = gStandar + ' ' + gUnit
  cOperation.innerHTML = gOperation
}
