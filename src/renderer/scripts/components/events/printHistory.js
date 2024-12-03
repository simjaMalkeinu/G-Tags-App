/* global jspdf M */
export const printHistory = () => {
  console.log('printing history')
  // Crear el objeto jsPDF
  const JsPDF = jspdf.jsPDF
  const doc = new JsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  })

  // Obtener la tabla HTML
  const table = document.getElementById('data-table')

  // Generar el PDF con autoTable
  doc.autoTable({
    html: table, // Pasa la tabla directamente
    startY: 20, // Margen superior para la tabla
    styles: {
      halign: 'center', // Centrar el texto
      valign: 'middle',
      cellPadding: 3
    },
    headStyles: {
      fillColor: [0, 0, 0], // Color de fondo del encabezado
      textColor: [255, 255, 255] // Color del texto del encabezado
    },
    bodyStyles: {
      fillColor: [240, 240, 240] // Color de fondo de las celdas
    }
  })

  // Agregar un título (opcional)
  doc.text('Reporte de Datos', 14, 15)

  // Guardar el PDF
  doc.save('Reporte de Datos.pdf')

  M.toast({
    html:
      'Historial generado correctamente',
    displayLength: 2500, // Duración en milisegundos (default: 4000)
    classes: 'rounded' // Clase adicional para dar estilo
  })
}
