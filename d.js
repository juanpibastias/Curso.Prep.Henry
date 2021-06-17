/* function dePalabrasAFrase(palabras) {
  palabras = ['cartel', 'pino', 'cel', 'moto']
  var frase = '';
  frase = palabras[0]
  for(i = 1; i < palabras.length; i++) {
  frase += palabras[i];
   }
  return frase;
}
console.log(palabras); */

const { arrayContiene } = require("./04-JS-III/homework/homework");


/* function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
} */

/* function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
     for(i = 0; i < array.length; i++) {
      if(array[i] === elemento);
      return true;
    }
    return false
  }
  console.log(array); */

/* 
saludo = 'hola mundo'
for(i = 0; i < 10; i++) { 
console.log(saludo + ' ' + 'loco');
} */
arreglo = [12, 13, 1, 20, 4, 85, 5, 17, 22, 18, 19];
/* function cuentoElementos(arreglo){
let contador = 0;
  for(let i = 0; i < arreglo.lenth; i ++) {
    if(arreglo[i] > 19);{
      contador ++;
    return contador ++;
    }
  }
} */
function diaDeLaSemana(numeroDeDia) {
var numeroDeDia = [1, 2, 3, 4, 5, 6, 7] 
if(numeroDeDia === 1 || numeroDeDia === 7) {
  return 'Es fin de semana'
  }
return 'Es dia Laboral'
}

