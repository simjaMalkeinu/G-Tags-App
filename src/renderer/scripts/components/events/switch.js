export const activateView = (id = '') => {
  document.getElementById(id).hidden = !document.getElementById(id).hidden
}

export const vinculateSwitch = (btn, view) => {
  document.getElementById(btn).addEventListener('input', () => {
    // console.log('activating the expiration date')
    activateView(view)
  })
}
