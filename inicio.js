// const ObjSumar = require("./sumarNumeros");
// ObjSumar.SumarDosNumeros(1, 2);
// ObjSumar.SumarTresNumeros(1, 2, 3);

const { SumarDosNumeros, SumarTresNumeros } = require("./funcionesMatematicas/sumarNumeros");
console.log("Probando la funcion SumarDosNumeros");
console.log(SumarDosNumeros(1, 2));

console.log("Probando la funcion SumarTresNumeros");
console.log(SumarTresNumeros(1, 2, 3));

const verificarSiEsPar = require("./verificarSiEsPar");
console.log("Probando la funcion VerificarSiEsPar");
verificarSiEsPar(10);
verificarSiEsPar(11);
