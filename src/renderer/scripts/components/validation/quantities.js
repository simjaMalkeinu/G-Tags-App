import idElements from '../../../utils/idElements.js'
import idValues from '../../../utils/idValues.js'
import { getDataInputs } from '../inputs/getData.js'
import { coloringInput } from './colorInput.js'
import { showMessage } from './message.js'

export const validateTotalQty = () => {
  const { gTotalQuantity } = getDataInputs()

  const validate = gTotalQuantity !== ''

  coloringInput(idValues.id_g_totalqty, validate)

  showMessage(
    idElements.id_msg_totalQty,
    'La cantidad total no puede estar vacia',
    validate
  )

  return validate
}

export const validateStandar = () => {
  const { gStandar, gTotalQuantity } = getDataInputs()

  const validate = gStandar !== '' && gStandar <= gTotalQuantity

  coloringInput(idValues.id_g_standar, validate)

  showMessage(
    idElements.id_msg_standar,
    'La cantidad por contenedor no puede estar vacia y debe ser igual o menor a la cantidad total',
    validate
  )

  return validate
}
