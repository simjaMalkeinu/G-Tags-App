import idValues from '../../../utils/idValues.js'

export const getInputs = () => {
  // inputs para generar etiquetas
  const iNumPart = document.getElementById(idValues.id_g_numpart)
  const iDateLot = document.getElementById(idValues.id_g_datelot)
  const iTurn = document.getElementById(idValues.id_g_turn)
  const iLot = document.getElementById(idValues.id_g_lot)
  const iOperation = document.getElementById(idValues.id_g_operation)
  const iTotalQuantity = document.getElementById(idValues.id_g_totalqty)
  const iStandar = document.getElementById(idValues.id_g_standar)
  const iReceivedDate = document.getElementById(idValues.id_g_recepriondate)
  const iExpirationDate = document.getElementById(idValues.id_g_expirationdate)
  const iUnit = document.getElementById(idValues.id_g_unit)

  return {
    iNumPart,
    iDateLot,
    iTurn,
    iLot,
    iOperation,
    iTotalQuantity,
    iStandar,
    iReceivedDate,
    iExpirationDate,
    iUnit
  }
}

export const getInput = idInput => {
  // inputs para generar etiquetas
  return document.getElementById(idInput)
}
