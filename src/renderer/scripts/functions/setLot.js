import { getDataInputs } from '../components/inputs/getData.js'
import { getInputs } from '../components/inputs/getInput.js'
import { updateQr } from '../components/qr/qr.js'
import { formatingLot } from './configurateLot.js'

export const setLot = e => {
  const { iLot } = getInputs()
  const { gDateLot, gTurn } = getDataInputs()

  console.log(gDateLot)

  iLot.value = formatingLot(gDateLot + 'T00:00:00') + gTurn
  updateQr()
}
