const { ifError } = require("assert");
const fs = require("fs");

const crearArchivo = async (
  isPrintList = false,
  multiplicationLimit = 10,
  multiplicationBase = 5
) => {
  try {
    let salida = "";
    if (isPrintList) {
      console.log("=================");
      console.log(`Tabla de ${multiplicationBase}`);
      console.log("=================");
    }

    for (let i = 1; i <= multiplicationLimit; i++) {
      salida += `${multiplicationBase} x ${i} = ${multiplicationBase * i}\n`;
    }
    const fileName = `tabla-${multiplicationBase}.txt`;
    console.log(process.env.OUTPUT_FILE_PATH);

    fs.writeFileSync(`${process.env.OUTPUT_FILE_PATH}${fileName}`, salida);
    if (isPrintList) {
      console.log(salida);
    }
    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
