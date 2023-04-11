function VerificarSiEsPar(num1) {
  //const readlineSync = require("readline-sync");

  //const num1 = readlineSync.question("Ingrese un numero: ");

  if (num1 % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
 }
 //VerificarSiEsPar();

module.exports = VerificarSiEsPar;
