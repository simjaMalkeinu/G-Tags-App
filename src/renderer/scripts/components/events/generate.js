import validateNumPart from '../validation/numPart.js'
import { validateOperation } from '../validation/operation.js'

export const generateNewTags = e => {
  e.preventDefault()

  // validar los datos
  if ((validateNumPart() && validateOperation()) === false) return

  console.log('Generating new tags')
  console.log('hola')
}
