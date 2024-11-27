import { getInputs } from '../inputs/getInput.js'
import validateNumPart from './numPart.js'
import { validateOperation } from './operation.js'

export const setValidations = () => {
  const { iNumPart, iOperation } = getInputs()

  iNumPart.addEventListener('input', validateNumPart)
  iOperation.addEventListener('input', validateOperation)
}
