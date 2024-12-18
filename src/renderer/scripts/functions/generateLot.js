import { getShiftLetter } from './getShift.js'
import { getLocalStorage } from '../config/storage.js'
import { getInputs } from '../components/inputs/getInput.js'
import { updateQr } from '../components/qr/qr.js'
import { formatingLot } from './configurateLot.js'
import idElements from '../../utils/idElements.js'

export const generateLot = () => {
  const { day: today } = getLocalStorage()
  const { iLot, iDateLot, iTurn } = getInputs()

  const dateLot = formatingLot(today)
  const date = new Date(today)

  // Llamar a la función getShiftLetter para obtener la letra del turno
  const shiftLetter = getShiftLetter(date)
  // Concatenar el mes, día, el año y la letra del turno
  // El formato será MMDDAA seguido de la letra del turno (A, B, o C)
  const formattedDate = dateLot + shiftLetter

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

export const personalizeLot = () => {
  const { iDateLot, iTurn, iLot } = getInputs()

  const eDate = document.getElementById(idElements.id_e_date)
  const eShift = document.getElementById(idElements.id_e_shift)
  const btnPersonalize = document.getElementById(idElements.id_btn_personalize)

  eDate.hidden = !eDate.hidden
  eShift.hidden = !eShift.hidden

  iDateLot.value = ''
  iTurn.value = 'A'
  iLot.value = ''
  iLot.disabled = !iLot.disabled

  btnPersonalize.innerHTML = eDate.hidden ? 'Usar lote automatico' : 'Personalizar lote'
}
