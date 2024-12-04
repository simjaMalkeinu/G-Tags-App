import { getInputs } from '../inputs/getInput.js'
import { activateExtraData } from './editNumPart.js'
import {
  validateExpDate,
  validateRecDate,
  validateSecuence
} from './extraData.js'
import { validateLot } from './lots.js'
import validateNumPart from './numPart.js'
import { validateOperation } from './operation.js'
import { validateStandar, validateTotalQty } from './quantities.js'

export const setValidations = () => {
  const {
    iNumPart,
    iOperation,
    iLot,
    iStandar,
    iTotalQuantity,
    iExpirationDays,
    iSecuence,
    iReceivedDate,
    irNumPart
  } = getInputs()

  iNumPart.addEventListener('input', validateNumPart)
  irNumPart.addEventListener('input', activateExtraData)

  iOperation.addEventListener('input', validateOperation)
  iLot.addEventListener('input', validateLot)
  iStandar.addEventListener('input', validateStandar)
  iTotalQuantity.addEventListener('input', validateTotalQty)
  iExpirationDays.addEventListener('input', validateExpDate)
  iReceivedDate.addEventListener('input', validateRecDate)
  iSecuence.addEventListener('input', validateSecuence)
}
