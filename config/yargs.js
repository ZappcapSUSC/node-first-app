const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base para el calculo de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla resultante",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    decribe: "Hasta que numero se crea la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
      throw "El limite debe ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
