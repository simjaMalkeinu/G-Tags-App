import idElements from '../../../utils/idElements.js'

export const resetGenerate = () => {
  console.log('reseting...')
  document.getElementById(idElements.id_e_expdate).hidden = true
  document.getElementById(idElements.id_e_recdate).hidden = true
  document.getElementById(idElements.id_e_secuence).hidden = true
}

export const resetRead = () => {
  console.log('reseting...')
  document.getElementById(idElements.id_e_r_expdate).hidden = true
  document.getElementById(idElements.id_e_r_recdate).hidden = true
  document.getElementById(idElements.id_e_r_secuence).hidden = true
  document.getElementById(idElements.id_extra_data_ueps).hidden = true
}
