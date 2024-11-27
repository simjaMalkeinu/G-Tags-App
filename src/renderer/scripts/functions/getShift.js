// Función para determinar la letra según el turno
export const getShiftLetter = date => {
  const hour = date.getHours()
  // De 6am a 2pm - A
  if (hour >= 6 && hour < 14) return 'A'
  // De 2pm a 10pm - B
  else if (hour >= 14 && hour < 22) return 'B'
  // De 10pm a 6am - C
  return 'C'
}
