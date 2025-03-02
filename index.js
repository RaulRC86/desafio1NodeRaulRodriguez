const { registrar, leer } = require("./operaciones")

// Get command line arguments
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if (operacion === "registrar") {
  // Check if all required parameters are provided
  if (argumentos.length < 6) {
    console.log("Error: Faltan datos. Uso: node index.js registrar nombre edad tipo color enfermedad")
    return;
  }

  const nombre = argumentos[1]
  const edad = argumentos[2]
  const tipo = argumentos[3]
  const color = argumentos[4]
  const enfermedad = argumentos[5]

  registrar(nombre, edad, tipo, color, enfermedad)
} else if (operacion === "leer") {
  leer()
} else {
  console.log(`
Veterinaria - Registro de Pacientes
===================================
Comandos disponibles:

1. Para registrar una nueva mascota:
   node index.js registrar nombre edad tipo color enfermedad
   
   Ejemplo:
   node index.js registrar Firulais 3 perro marrón otitis

2. Para ver todas las mascotas registradas:
   node index.js leer
  `)
}

