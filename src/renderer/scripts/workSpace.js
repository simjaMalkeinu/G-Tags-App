import { initializeSidebar } from './components/slide/sidebar.model.js'
import { initializeNavigation } from './components/navigation/navigation.model.js'
import { initializePlace } from './components/place/place.js'

import { defaultValues } from './config/constants.js'
import { getLocalStorage } from './config/storage.js'
import { initializeEvents } from './components/events/events.js'

document.addEventListener('DOMContentLoaded', () => {
  const storageData = getLocalStorage(defaultValues)
  console.log(storageData)

  initializeSidebar()
  initializeNavigation()
  initializePlace(storageData.planta, storageData.area)

  initializeEvents()
})
