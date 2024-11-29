import idElements from '../../../utils/idElements.js'

export const getSwitchs = () => {
  const swtExpDate = document.getElementById(idElements.id_btn_expdate)
  const swtRecDate = document.getElementById(idElements.id_btn_recdate)
  const swtSecuence = document.getElementById(idElements.id_btn_secuence)

  const rswtExpDate = document.getElementById(idElements.id_btn_r_expdate)
  const rswtRecDate = document.getElementById(idElements.id_btn_r_recdate)
  const rswtSecuence = document.getElementById(idElements.id_btn_r_secuence)

  return {
    swtExpDate,
    swtRecDate,
    swtSecuence,
    rswtExpDate,
    rswtRecDate,
    rswtSecuence
  }
}
