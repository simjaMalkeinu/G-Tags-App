import idElements from '../../../utils/idElements.js'
import { getDataInputs } from '../inputs/getData.js'
import { getInputs } from '../inputs/getInput.js'
import { coloringInput } from './colorInput.js'
import { showMessage } from './message.js'

export const validateOperation = () => {
  const { gNumPart, gOperation } = getDataInputs()
  const { iOperation } = getInputs()

  if (gNumPart.length <= 8) {
    // const validated =
    //   gOperation !== '' && gOperation % 10 !== 0 && gOperation !== 0
    const validated =
      gOperation !== '' && gOperation % 10 === 0 && gOperation !== 0

    coloringInput(iOperation.id, validated)

    showMessage(
      idElements.id_msg_operation,
      'La operacion debe ser multiplo de 10',
      validated
    )

    return validated
  }

  return true
}
