import idElements from '../../../utils/idElements.js'
import idValues from '../../../utils/idValues.js'
import { getDataInputs } from '../inputs/getData.js'
import { coloringInput } from './colorInput.js'
import { showMessage } from './message.js'

export const validateOperation = () => {
  const { gNumPart, gOperation } = getDataInputs()

  console.log(gNumPart.length)

  if (gNumPart.length <= 8) {
    // const validated =
    //   gOperation !== '' && gOperation % 10 !== 0 && gOperation !== 0
    const validated =
      gOperation !== '' && gOperation % 10 === 0 && gOperation !== 0

    coloringInput(idValues.id_g_operation, validated)

    showMessage(
      idElements.id_msg_operation,
      'La operacion debe ser multiplo de 10',
      validated
    )

    return validated
  }

  return true
}
