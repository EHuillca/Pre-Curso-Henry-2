// function logHola()
// {
//   console.log("Hola!");
// }
// logHola();

// function logHola(Nombre)
// {
//   console.log("Hola, " + Nombre);
// }

// logHola("Edgard Huillca");

// function logHola(Nombre, Apellido)
// {
//   console.log("Hola, " + Nombre + " " + Apellido);
// }

// logHola("Edgard","Huillca");

// let arr = [1,2,3]
// arr[10] = "Hello"

// console.log(arr)
// console.log(arr.length)
// console.log(Math.round(Math.random(2)))


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
    if (str1.length == str2.length)
    {
      return true;
    }
    else
    {
      return false;
    } 
}

console.log(tienenMismaLongitud("hi","there"))