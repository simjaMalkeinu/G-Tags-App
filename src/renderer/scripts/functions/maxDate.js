import { getInputs } from '../components/inputs/getInput.js'
import { getLocalStorage } from '../config/storage.js'

export const setMaxDate = () => {
  const { iDateLot, iReceivedDate } = getInputs()
  const { day } = getLocalStorage()

  // Obtén la fecha actual
  const today = new Date(day)
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0') // Los meses en JavaScript son 0-11, así que sumamos 1
  const dd = String(today.getDate()).padStart(2, '0')

  // Formatea la fecha en el formato requerido (YYYY-MM-DD)
  const maxDate = `${yyyy}-${mm}-${dd}`

  // Establece el valor máximo permitido
  iDateLot.max = maxDate
  iReceivedDate.max = maxDate
}
