export const OPV1 = [
  { valor: 'HYP', texto: 'Almacen de HYP' },
  { valor: 'VU1', texto: 'Vulcanizado' },
  { valor: 'REB', texto: 'Rebabeo' },
  { valor: 'LFL', texto: 'Linea final' },
  { valor: 'PIN', texto: 'Pintura' },
  { valor: 'ENS', texto: 'Ensamble' },
  { valor: 'CL1', texto: 'Calidad' }
]

export const OPV2 = [
  { valor: 'AV2', texto: 'Almacen de V2' },
  { valor: 'VU2', texto: 'Vulcanizado' },
  { valor: 'EN2', texto: 'Ensamble' }
]

export const OPCA = [
  { valor: 'HYT', texto: 'Almacen HYT' },
  { valor: 'TOR', texto: 'Tornos' },
  { valor: 'TRO', texto: 'Troquelado' },
  { valor: 'DES', texto: 'Desengrase' },
  { valor: 'FOS', texto: 'Fosfatado' },
  { valor: 'ENC', texto: 'Encementado' }
]

export const OPHU = [
  { valor: 'AHU', texto: 'Almacen de hules' },
  { valor: 'HUL', texto: 'Hules' },
  { valor: 'CL2', texto: 'Calidad' }
]

// Valores predeterminados para el localStorage
export const defaultValues = {
  invoice: 0, // Valor predeterminado para el último folio
  area: 'HYP', // Área predeterminada
  planta: 'V1', // Planta predeterminada
  isSmall: false,
  julDay: '0',
  day: '01/01/2024'
}
