import idElements from '../../../utils/idElements.js'
import idValues from '../../../utils/idValues.js'
import { getDataInputs } from '../inputs/getData.js'
import { coloringInput } from './colorInput.js'
import { showMessage } from './message.js'

export const validateLot = () => {
  const { gLot } = getDataInputs()

  coloringInput(idValues.id_g_lot, gLot !== '')

  showMessage(
    idElements.id_msg_lot,
    'El lote no puede estar vacio',
    gLot !== ''
  )

  return gLot !== ''
}
