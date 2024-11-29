import { initializeSidebar } from './components/slide/sidebar.model.js'
import { initializeNavigation } from './components/navigation/navigation.model.js'
import { initializePlace } from './components/place/place.js'

import { defaultValues } from './config/constants.js'
import { configureStorage, getLocalStorage } from './config/storage.js'
import { initializeEvents } from './components/events/events.js'
import { setMaxDate } from './functions/maxDate.js'
import { setRoute } from './components/navigation/setRoute.js'

document.addEventListener('DOMContentLoaded', async () => {
  await configureStorage(defaultValues)

  const storageData = getLocalStorage()
  console.log(storageData)

  initializeSidebar()
  initializeNavigation()
  initializePlace(storageData.plant, storageData.area)

  setMaxDate()

  initializeEvents()

  setRoute()
})
