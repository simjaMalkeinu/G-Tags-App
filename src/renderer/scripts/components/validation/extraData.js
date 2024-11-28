import idElements from '../../../utils/idElements.js'
import idValues from '../../../utils/idValues.js'
import { getSwitchs } from '../buttons.js/checkbox.js'
import { getDataInputs } from '../inputs/getData.js'
import { coloringInput } from './colorInput.js'
import { showMessage } from './message.js'

export const validateExpDate = () => {
  const { gExpirationDate } = getDataInputs()
  const { swtExpDate } = getSwitchs()
  //   console.log(swtExpDate.checked)

  const validated = swtExpDate.checked === true ? gExpirationDate !== '' : true
  // console.log(validated)

  coloringInput(idValues.id_g_expirationdate, validated)

  showMessage(
    idElements.id_msg_expDate,
    'La caducidad es obligatoria',
    validated
  )

  return validated
}

export const validateRecDate = () => {
  const { gReceivedDate } = getDataInputs()
  const { swtRecDate } = getSwitchs()
  //   console.log(swtRecDate.checked)

  const validated = swtRecDate.checked === true ? gReceivedDate !== '' : true
  // console.log(validated)

  coloringInput(idValues.id_g_receptiondate, validated)

  showMessage(
    idElements.id_msg_recepDate,
    'La Fecha de recepcion es obligatoria',
    validated
  )

  return validated
}

export const validateSecuence = () => {
  const { gSecuence } = getDataInputs()
  const { swtSecuence } = getSwitchs()
  //   console.log(swtSecuence.checked)

  // console.log(gSecuence)

  const validated = swtSecuence.checked === true ? gSecuence !== '' : true
  // console.log(validated)

  coloringInput(idValues.id_g_secuence, validated)

  showMessage(
    idElements.id_msg_secuence,
    'Las observaciones son obligatorias',
    validated
  )

  return validated
}
