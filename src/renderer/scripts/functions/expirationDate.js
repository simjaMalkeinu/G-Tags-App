import { getDataInputs } from '../components/inputs/getData.js'
import { getInputs } from '../components/inputs/getInput.js'
import { getLocalStorage } from '../config/storage.js'

export const expirationDate = (route = 'g') => {
  const { gExpirationDays, gDateLot } = getDataInputs()
  const { iExpirationDate } = getInputs()

  const { day } = getLocalStorage()

  if (gExpirationDays === '') {
    iExpirationDate.value = ''
    return
  }

  let expDate = new Date(day)

  if (gDateLot !== '') {
    expDate = new Date(gDateLot + 'T00:00:00')
  }

  expDate.setDate(expDate.getDate() + parseInt(gExpirationDays))

  //   console.log(expDate)

  iExpirationDate.value =
    expDate.getFullYear() +
    '-' +
    (expDate.getMonth() + 1) +
    '-' +
    expDate.getDate()
}

export const setNewExpirationDate = () => {
  const { rExpirationDays } = getDataInputs()
  const { irExpirationDate } = getInputs()
  const { day } = getLocalStorage()

  if (rExpirationDays === '') {
    irExpirationDate.value = ''
    return
  }

  const expDate = new Date(day)
  expDate.setDate(expDate.getDate() + parseInt(rExpirationDays))

  //   console.log(expDate)

  irExpirationDate.value =
    expDate.getFullYear() +
    '-' +
    (expDate.getMonth() + 1) +
    '-' +
    expDate.getDate()
}
