import idElements from '../../../utils/idElements.js'
import { getDataInputs } from '../inputs/getData.js'

export const activateExtraData = () => {
  const extraData = document.getElementById(idElements.id_extra_data_ueps)

  const { rNumPart } = getDataInputs()

  if (rNumPart.length < 8) {
    extraData.hidden = true
  } else {
    extraData.hidden = false
  }
}
