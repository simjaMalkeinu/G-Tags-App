export const getHistory = async () => {
  const loader = document.getElementById('loader')
  const dataTable = document.getElementById('data-table')
  const tableBody = document.getElementById('table-body')

  // Mostrar el loader y ocultar la tabla
  loader.classList.remove('hidden')
  dataTable.classList.add('hidden')

  tableBody.innerHTML = ''

  // Solicita los registros al backend
  // Solicita los registros al backend
  window.databaseAPI
    .getRecords()
    .then(data => {
      console.log(data)
      // loader.classList.add('hidden') // Oculta el loader

      // Verifica si hay datos
      if (data.registros.length === 0) {
        const emptyRow = document.createElement('tr')
        emptyRow.innerHTML = `
            <td class="px-4 py-2 text-center text-gray-500" colspan="8">
              No hay registros disponibles
            </td>
          `
        tableBody.appendChild(emptyRow)
      } else {
        // Llena la tabla con los datos
        data.forEach(record => {
          const row = document.createElement('tr')
          row.innerHTML = `
              <td class="px-4 py-2 border border-gray-300">${record.id}</td>
              <td class="px-4 py-2 border border-gray-300">${record.fecha}</td>
              <td class="px-4 py-2 border border-gray-300">${record.hora}</td>
              <td class="px-4 py-2 border border-gray-300">${record.planta}</td>
              <td class="px-4 py-2 border border-gray-300">${record.area}</td>
              <td class="px-4 py-2 border border-gray-300">${record.numero_etiquetas}</td>
              <td class="px-4 py-2 border border-gray-300">${record.inicio_seriado}</td>
              <td class="px-4 py-2 border border-gray-300">${record.final_seriado}</td>
            `
          tableBody.appendChild(row)
        })
      }

      dataTable.classList.remove('hidden')
    })
    .catch(err => {
      console.error('Error al obtener los registros:', err)
      loader.classList.add('hidden') // Oculta el loader
      tableBody.innerHTML = `
          <tr>
            <td class="px-4 py-2 text-center text-red-500" colspan="8">
              Error al cargar los registros
            </td>
          </tr>
        `
    })
    .finally(loader.classList.add('hidden'))
}
