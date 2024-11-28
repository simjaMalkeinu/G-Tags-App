const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const { app } = require('electron')

// Ruta de la base de datos
const dbPath = path.join(app.getPath('userData'), 'mi_base_de_datos.db')

// Conexión a la base de datos
const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message)
  } else {
    console.log('Conectado a la base de datos SQLite.')
    crearTablas()
  }
})

// Función para crear las tablas si no existen
function crearTablas () {
  const query = `
    CREATE TABLE IF NOT EXISTS registros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fecha TEXT NOT NULL,
      hora TEXT NOT NULL,
      planta TEXT NOT NULL,
      area TEXT NOT NULL,
      numero_etiquetas INTEGER NOT NULL,
      inicio_seriado TEXT NOT NULL,
      final_seriado TEXT NOT NULL
    )
  `

  db.run(query, err => {
    if (err) {
      console.error('Error al crear la tabla "registros":', err.message)
    } else {
      console.log('Tabla "registros" creada o ya existe.')
    }
  })
}

// Función para insertar un registro
function insertarRegistro (registro) {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO registros (fecha, hora, planta, area, numero_etiquetas, inicio_seriado, final_seriado)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const params = [
      registro.fecha,
      registro.hora,
      registro.planta,
      registro.area,
      registro.numero_etiquetas,
      registro.inicio_seriado,
      registro.final_seriado
    ]

    db.run(query, params, function (err) {
      if (err) {
        reject(new Error(`Error al insertar el registro: ${err.message}`)) // Crear un objeto Error
      } else {
        resolve({
          success: true,
          message: 'Registro insertado correctamente',
          id: this.lastID
        })
      }
    })
  })
}

// Función para obtener todos los registros
// Función para obtener todos los registros
function obtenerRegistros () {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM registros', [], (err, rows) => {
      if (err) {
        reject(new Error(`Error al obtener los registros: ${err.message}`)) // Crear un objeto Error
      } else {
        resolve({ success: true, registros: rows })
      }
    })
  })
}

// Exportar funciones
module.exports = {
  insertarRegistro,
  obtenerRegistros
}
