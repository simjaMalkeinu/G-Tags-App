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
  const iReceivedDate = document.getElementById(idValues.id_g_receptiondate)
  const iExpirationDate = document.getElementById(idValues.id_g_expirationdate)
  const iExpirationDays = document.getElementById(idValues.id_g_expirationday)
  const iUnit = document.getElementById(idValues.id_g_unit)
  const iSecuence = document.getElementById(idValues.id_g_secuence)

  const irNumPart = document.getElementById(idValues.id_r_numpart)
  const irLot = document.getElementById(idValues.id_r_lot)
  const irOperation = document.getElementById(idValues.id_r_operation)
  const irQuantity = document.getElementById(idValues.id_r_quantity)
  const irFolio = document.getElementById(idValues.id_r_folio)
  const irRegister = document.getElementById(idValues.id_r_register)
  const irReceivedDate = document.getElementById(idValues.id_r_receptiondate)
  const irExpirationDate = document.getElementById(idValues.id_r_expirationdate)
  const irExpirationDays = document.getElementById(idValues.id_r_expirationday)
  const irUnit = document.getElementById(idValues.id_r_unit)
  const irSecuence = document.getElementById(idValues.id_r_secuence)

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
    iExpirationDays,
    iUnit,
    iSecuence,
    irNumPart,
    irLot,
    irOperation,
    irQuantity,
    irFolio,
    irRegister,
    irReceivedDate,
    irExpirationDate,
    irExpirationDays,
    irSecuence,
    irUnit
  }
}

export const getInput = idInput => {
  // inputs para generar etiquetas
  return document.getElementById(idInput)
}
