function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var resultado = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return "Meow!"
    }
   }
   return resultado
}
console.log(crearGato('Michi',2).meow());
console.log(crearGato('Michi',2));
