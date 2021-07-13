const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("./config/dotenv");
console.clear();
crearArchivo(argv.l, argv.h, argv.b)
  .then((nomberArchivo) => console.log(nomberArchivo, "creado"))
  .catch((err) => console.log(err));
