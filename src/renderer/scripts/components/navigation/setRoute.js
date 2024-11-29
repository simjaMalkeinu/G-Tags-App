import { getLocalStorage } from '../../config/storage.js'

export const setRoute = () => {
  const { route } = getLocalStorage()

  document.getElementById(route).classList.add('active')
}
