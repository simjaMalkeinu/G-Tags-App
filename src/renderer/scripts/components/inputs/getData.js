import { getInputs } from './getInput.js'

export const getDataInputs = () => {
  const {
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
  } = getInputs()

  // inputs para generar etiquetas
  const gNumPart = iNumPart.value.trim()
  const gDateLot = iDateLot.value.trim()
  const gTurn = iTurn.value.trim()
  const gLot = iLot.value.trim()
  const gOperation = iOperation.value.trim()
  const gTotalQuantity = iTotalQuantity.value.trim()
  const gStandar = iStandar.value.trim()
  const gReceivedDate = iReceivedDate.value.trim()
  const gExpirationDate = iExpirationDate.value.trim()
  const gExpirationDays = iExpirationDays.value.trim()
  const gUnit = iUnit.value.trim()
  const gSecuence = iSecuence.value.trim()

  // Inpurts para editar etiquetas
  const rNumPart = irNumPart.value.trim()
  const rFolio = irFolio.value.trim()
  const rRegister = irRegister.value.trim()
  const rLot = irLot.value.trim()
  const rOperation = irOperation.value.trim()
  const rQuantity = irQuantity.value.trim()
  const rReceivedDate = irReceivedDate.value.trim()
  const rExpirationDate = irExpirationDate.value.trim()
  const rExpirationDays = irExpirationDays.value.trim()
  const rSecuence = irSecuence.value.trim()
  const rUnit = irUnit.value.trim()

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
    gSecuence,
    rNumPart,
    rLot,
    rOperation,
    rQuantity,
    rFolio,
    rRegister,
    rReceivedDate,
    rExpirationDate,
    rExpirationDays,
    rSecuence,
    rUnit
  }
}
