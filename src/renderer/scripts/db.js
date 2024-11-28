document.getElementById('btn-get-historial').addEventListener('click', () => {
  window.databaseAPI
    .getRecords()
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log('Error ', err))
})
