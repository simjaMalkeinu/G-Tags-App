export const showMessage = (id, msg, validation) => {
  const element = document.getElementById(id)
  element.innerHTML = validation ? '' : msg
  element.classList.add(validation ? 'text-green-800' : 'text-red-800')
  element.classList.remove(validation ? 'text-red-800' : 'text-green-800')
}
