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
    // console.log('Conectado a la base de datos SQLite.')
    crearTablas()
    addColumnIfNotExists('registros', 'tipo', 'TEXT NOT NULL')
    addColumnIfNotExists('registros', 'part_num', 'TEXT NOT NULL')
  }
})

function addColumnIfNotExists (table, column, columnDefinition) {
  const queryCheck = `PRAGMA table_info(${table});`

  db.all(queryCheck, [], (err, rows) => {
    if (err) {
      console.error(
        `Error al obtener información de la tabla "${table}":`,
        err.message
      )
      return
    }

    const columnExists = rows.some(row => row.name === column)

    if (!columnExists) {
      const queryAddColumn = `ALTER TABLE ${table} ADD COLUMN ${column} ${columnDefinition};`

      db.run(queryAddColumn, [], err => {
        if (err) {
          console.error(
            `Error al agregar la columna "${column}" a la tabla "${table}":`,
            err.message
          )
        } else {
          console.log(
            `La columna "${column}" se agregó correctamente a la tabla "${table}".`
          )
        }
      })
    } else {
      console.log(`La columna "${column}" ya existe en la tabla "${table}".`)
    }
  })
}

// Función para crear las tablas si no existen
function crearTablas () {
  const query = `
    CREATE TABLE IF NOT EXISTS registros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tipo TEXT NOT NULL,
      fecha TEXT NOT NULL,
      hora TEXT NOT NULL,
      planta TEXT NOT NULL,
      area TEXT NOT NULL,
      part_num TEXT NOT NULL,
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
      INSERT INTO registros (tipo, fecha, hora, planta, area, part_num, numero_etiquetas, inicio_seriado, final_seriado)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const today = new Date()
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    // obtener el año actual
    const year = today.getFullYear().toString()
    // obtener día actual
    const day = today.getDate().toString().padStart(2, '0')

    const hora = `${today.getHours()}:${today.getMinutes()}: ${today.getSeconds()}`

    const params = [
      registro.tipo,
      `${day} / ${month} / ${year}`,
      hora,
      registro.planta,
      registro.area,
      registro.num_part,
      registro.numero_etiquetas,
      registro.inicio_seriado,
      registro.final_seriado
    ]

    // console.log(params)

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
