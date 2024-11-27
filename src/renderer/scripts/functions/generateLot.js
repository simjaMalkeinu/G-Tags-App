import { getShiftLetter } from './getShift.js'
import { getLocalStorage } from '../config/storage.js'
import { getInputs } from '../components/inputs/getInput.js'
import { updateQr } from '../components/qr/qr.js'

export const generateLot = () => {
  const { day: today } = getLocalStorage()
  const { iLot, iDateLot, iTurn } = getInputs()

  // obtener la fecha actual
  const date = new Date(today)
  // obtener el mes actual
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  // obtener el año actual
  const year = date.getFullYear().toString().substr(-2)
  // obtener día actual
  const day = date.getDate().toString().padStart(2, '0')

  // Llamar a la función getShiftLetter para obtener la letra del turno
  const shiftLetter = getShiftLetter(date)
  // Concatenar el mes, día, el año y la letra del turno
  // El formato será MMDDAA seguido de la letra del turno (A, B, o C)
  const formattedDate = month + day + year + shiftLetter

  // Asignar la fecha formateada al valor del elemento con id "lote"
  iLot.value = formattedDate

  // Obtener año, mes y día
  const yearI = date.getFullYear()
  const monthI = String(date.getMonth() + 1).padStart(2, '0') // Mes empieza desde 0, por eso sumamos 1
  const dayI = String(date.getDate()).padStart(2, '0')

  // Formatear la fecha en YYYY-MM-DD
  const txtDate = `${yearI}-${monthI}-${dayI}`

  iDateLot.value = txtDate
  iTurn.value = shiftLetter

  updateQr()
}
