import { getDataInputs } from '../inputs/getData.js'
import ListParts from '../../../utils/ListOfParts.js'
import idElements from '../../../utils/idElements.js'
import { getInputs } from '../inputs/getInput.js'
import { coloringInput } from './colorInput.js'
import { showMessage } from './message.js'
import { getSwitchs } from '../buttons.js/checkbox.js'

export const existsPart = numPart => {
  return ListParts.includes(numPart)
}

export const isUEPS = numPart => {
  const eOperation = document.getElementById(idElements.id_e_operation)
  const eSecuence = document.getElementById(idElements.id_e_secCont)
  const eDate = document.getElementById(idElements.id_e_date)
  const eShift = document.getElementById(idElements.id_e_shift)
  const eReception = document.getElementById(idElements.id_e_reception)

  const eRecDate = document.getElementById(idElements.id_e_recdate)
  const eSecObs = document.getElementById(idElements.id_e_secuence)

  const btnPersonalize = document.getElementById(idElements.id_btn_personalize)

  const { iLot } = getInputs()
  const { swtRecDate, swtSecuence } = getSwitchs()

  if (numPart.length >= 8) {
    // console.log('the part is a UEPS clave')
    eOperation.hidden = true
    eOperation.disabled = true
    eSecuence.hidden = false
    eDate.hidden = true
    eShift.hidden = true
    iLot.disabled = false
    eReception.hidden = false
    btnPersonalize.hidden = true
  } else {
    // console.log('the part is a rc clave')
    eOperation.hidden = false
    eOperation.disabled = false
    eSecuence.hidden = true
    eDate.hidden = false
    eShift.hidden = false
    iLot.disabled = true
    eReception.hidden = true
    btnPersonalize.hidden = false
  }

  swtRecDate.checked = false
  swtSecuence.checked = false

  eRecDate.hidden = true
  eSecObs.hidden = true
}

export default function validateNumPart () {
  const { gNumPart } = getDataInputs()
  const { iNumPart } = getInputs()

  const exists = existsPart(gNumPart)

  showMessage(idElements.id_msg_numPart, 'El numero de parte no existe', exists)

  coloringInput(iNumPart.id, exists)

  isUEPS(gNumPart)

  return exists
}
