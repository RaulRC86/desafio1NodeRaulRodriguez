const fs = require("fs")

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const nuevaMascota = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad
  }

  let citas = []

  try {
    if (fs.existsSync("citas.json")) {
      const data = fs.readFileSync("citas.json", "utf8")
      citas = JSON.parse(data)
    }
  } catch (error) {
    console.log("Error al leer el archivo:", error.message)
  }


  citas.push(nuevaMascota)


  try {
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2))
    console.log("La cita se ha registrado correctamente")
  } catch (error) {
    console.log("Error al guardar la cita:", error.message)
  }
}

const leer = () => {
  try {
    if (!fs.existsSync("citas.json")) {
      console.log("No hay citas registradas")
      return
    }

    const data = fs.readFileSync("citas.json", "utf8")
    const citas = JSON.parse(data)

    if (citas.length === 0) {
      console.log("No hay citas registradas")
      return
    }

    console.log("=== REGISTRO DE CITAS ===")
    citas.forEach((cita, numero) => {
      console.log(`\nCita #${numero + 1}:`)
      console.log(`Nombre: ${cita.nombre}`)
      console.log(`Edad: ${cita.edad}`)
      console.log(`Tipo: ${cita.tipo}`)
      console.log(`Color: ${cita.color}`)
      console.log(`Enfermedad: ${cita.enfermedad}`)
    })
  } catch (error) {
    console.log("Error al leer las citas:", error.message)
  }
}

module.exports = {
  registrar,
  leer,
}

