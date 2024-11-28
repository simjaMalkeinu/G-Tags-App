export const formatingLot = (dateText) => {
  // obtener la fecha actual
  const date = new Date(dateText)

  console.log(date.getDate(), date.getMonth(), date.getFullYear())
  // obtener el mes actual
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  // obtener el año actual
  const year = date.getFullYear().toString().substr(-2)
  // obtener día actual
  const day = date.getDate().toString().padStart(2, '0')

  return month + day + year
}
