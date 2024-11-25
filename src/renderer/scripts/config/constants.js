import { getJulianDate } from '../functions/julianDate.js'

export const OPV1 = [
  { valor: 'HYP', texto: 'ALMACEN DE HYP' },
  { valor: 'VU1', texto: 'VULCANIZADO' },
  { valor: 'REB', texto: 'REBABEO' },
  { valor: 'LFL', texto: 'LINEA FINAL' },
  { valor: 'PIN', texto: 'PINTURA' },
  { valor: 'ENS', texto: 'ENSAMBLE' },
  { valor: 'CL1', texto: 'CALIDAD' }
]

export const OPV2 = [
  { valor: 'AV2', texto: 'ALMACEN DE V2' },
  { valor: 'VU2', texto: 'VULCANIZADO' },
  { valor: 'EN2', texto: 'ENSAMBLE' }
]

export const OPCA = [
  { valor: 'HYT', texto: 'ALMACEN DE HYT' },
  { valor: 'TOR', texto: 'TORNOS' },
  { valor: 'TRO', texto: 'TROQUELADO' },
  { valor: 'DES', texto: 'DESENGRASE' },
  { valor: 'FOS', texto: 'FOSFATADO' },
  { valor: 'ENC', texto: 'ENCEMENTADO' }
]

export const OPHU = [
  { valor: 'AHU', texto: 'ALMACEN DE HULES' },
  { valor: 'HUL', texto: 'HULES' },
  { valor: 'CL2', texto: 'CALIDAD' }
]

// Valores predeterminados para el localStorage
export const defaultValues = {
  Invoice: 0, // Valor predeterminado para el último folio
  day: getJulianDate(new Date()), // Fecha predeterminada
  area: 'General', // Área predeterminada
  planta: 'Principal', // Planta predeterminada
  isSmall: false
}
