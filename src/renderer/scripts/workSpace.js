import { initializeSidebar } from './components/slide/sidebar.model.js'
import { initializeNavigation } from './components/navigation/navigation.model.js'

import { defaultValues } from './config/constants.js'
import { getLocalStorage } from './config/storage.js'

document.addEventListener('DOMContentLoaded', () => {
  const storageData = getLocalStorage(defaultValues)
  console.log(storageData)

  initializeSidebar()
  initializeNavigation()

  // document.getElementById('area').value = storageData.area
  // document.getElementById('planta').value = storageData.planta
})
