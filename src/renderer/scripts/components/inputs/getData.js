import idValues from '../../../utils/idValues.js'

export const getDataInputs = () => {
  // inputs para generar etiquetas
  const gNumPart = document.getElementById(idValues.id_g_numpart).value.trim()
  const gDateLot = document.getElementById(idValues.id_g_datelot).value.trim()
  const gTurn = document.getElementById(idValues.id_g_turn).value.trim()
  const gLot = document.getElementById(idValues.id_g_lot).value.trim()
  const gOperation = document
    .getElementById(idValues.id_g_operation)
    .value.trim()
  const gTotalQuantity = document
    .getElementById(idValues.id_g_totalqty)
    .value.trim()
  const gStandar = document.getElementById(idValues.id_g_standar).value.trim()
  const gReceivedDate = document
    .getElementById(idValues.id_g_receptiondate)
    .value.trim()
  const gExpirationDate = document
    .getElementById(idValues.id_g_expirationdate)
    .value.trim()
  const gExpirationDays = document
    .getElementById(idValues.id_g_expirationday)
    .value.trim()
  const gUnit = document.getElementById(idValues.id_g_unit).value.trim()
  const gSecuence = document.getElementById(idValues.id_g_secuence).value.trim()

  return {
    gNumPart,
    gDateLot,
    gTurn,
    gLot,
    gOperation,
    gTotalQuantity,
    gStandar,
    gReceivedDate,
    gExpirationDate,
    gExpirationDays,
    gUnit,
    gSecuence
  }
}
