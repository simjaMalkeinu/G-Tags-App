import idElements from '../../../utils/idElements.js'

export const getSwitchs = () => {
  const swtExpDate = document.getElementById(idElements.id_btn_expdate)
  const swtRecDate = document.getElementById(idElements.id_btn_recdate)
  const swtSecuence = document.getElementById(idElements.id_btn_secuence)

  return {
    swtExpDate,
    swtRecDate,
    swtSecuence
  }
}
