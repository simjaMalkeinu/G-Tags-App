import { getInput } from '../inputs/getInput.js'

export const coloringInput = (id, validation) => {
  const input = getInput(id)

  //   msg.classList.add(exists ? 'text-green-800' : 'text-red-800')
  //   msg.classList.remove(exists ? 'text-red-800' : 'text-green-800')

  input.classList.add(validation ? 'border-green-800' : 'border-red-800')
  input.classList.remove(validation ? 'border-red-800' : 'border-green-800')
}
