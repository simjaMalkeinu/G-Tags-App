export const nextLetter = num => {
  const regex = /[A-Z]+$/

  if (regex.test(num)) {
    // Separar la parte numérica de las letras al final
    const parteNumerica = num.match(/^\d+/)[0]
    const letras = num.match(/[A-Z]+$/)[0]

    // Incrementar las letras
    const siguienteLetra = incrementarLetras(letras)

    // Retornar el número con las nuevas letras
    return parteNumerica + siguienteLetra
  } else {
    // Si no tiene letras, agregar "A"
    return num + 'A'
  }
}

function incrementarLetras (letras) {
  const arrLetras = letras.split('')

  // Comenzar por la última letra
  for (let i = arrLetras.length - 1; i >= 0; i--) {
    if (arrLetras[i] === 'Z') {
      arrLetras[i] = 'A' // Cambiar Z a A y continuar al siguiente carácter
    } else {
      arrLetras[i] = String.fromCharCode(arrLetras[i].charCodeAt(0) + 1) // Incrementar la letra
      return arrLetras.join('') // Retornar si no hay más que procesar
    }
  }

  // Si todas eran Z, agregar una A al principio
  return 'A' + arrLetras.join('')
}
