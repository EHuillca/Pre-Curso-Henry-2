
function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return Math.round(Math.log(num)/Math.LN10)
  //return Math.log(num)/Math.LN10
}
console.log(numeroDigitos("8541"))
