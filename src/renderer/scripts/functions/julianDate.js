export const getJulianDate = fecha => {
  const inicioAño = new Date(fecha.getFullYear(), 0, 1)
  const diasDelAño = Math.floor((fecha - inicioAño) / (1000 * 60 * 60 * 24)) + 1

  return diasDelAño
}
