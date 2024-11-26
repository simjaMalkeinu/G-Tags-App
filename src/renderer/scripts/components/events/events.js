import { editTags } from './edit.js'
import { generateNewTags } from './generate.js'
import { vinculateSwitch } from './switch.js'

export const initializeEvents = () => {
  document
    .getElementById('f-generate')
    .addEventListener('submit', generateNewTags)

  document.getElementById('f-edit').addEventListener('submit', editTags)

  vinculateSwitch('switch-activate-expiration-date', 'input-expiration-date')
  vinculateSwitch('switch-activate-print-date', 'input-date-reception')
}
