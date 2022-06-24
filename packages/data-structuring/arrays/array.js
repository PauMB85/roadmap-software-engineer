/**
 * Los arrays son una estructura de datos de tipo lineal donde sus elementos son del mismo tipo
 * Los términos más importantes a tener en cuenta son:
 * - Elemento. son los items almacenados en el array
 * - Índice. Cada posición de un elemento en un array teine un indice numérico.
 */

console.log('creación un array vacio \'const empty = []\'');
const empty = [];

console.log('creación un array con datos \'const full = [1, 2, 4]\'');
const full = [1, 2, 4];

/**
 * Las operaciones básicas en un array son:
 * - Añadir. Se utiliza el método 'push' y el coste es O(1)
 * - Eliminar. Javascript ofrece varios mecanismos para eliminar un elemento del array, por ejemplo 'splice',
 *              hay que tener encuenta que esta operación tiene un coste de O(n). Esto se debe a que dicha operación
 *              reconstruye el array ya que debe de desplazar los elementos posterioras hacia una posición anterior.
 * - Búsqueda. Obtener el valor de un posición mediante el indice. Al ser un array ordenado consecutivamente, su acceso a una posición
 *              es inmediate, por lo tanto, su coste es O(1)
 * - Actualización. Dado un indice, actualizar dicho elemento del array es inmediato, muy parecido a la búsqueda, por lo tanto, su coste es O(1)
 */

const myArray = [1, 2, 3, 4, 5];
console.log('Los elementos del array son:', myArray);

// Añadir
console.log('Añadimos un elemento en nuestro array con el método \'push\'');
myArray.push(6);
console.log('Por lo tanto, nuestro array tiene los siguientes valores', myArray);

// Elimiar
console.log('Eliminanos un elementos de nuestro array utilizando el método \'splice\'');
myArray.splice(2,1);
console.log('Por lo tanto, nuestro array tiene los siguientes valores', myArray);

// Búsqueda
console.log('Para buscar un elemento del array con indicar su posición mediante indice');
console.log('el elemento de la posición 2 del array es: ', myArray[1]);

// Actualizción
console.log('Actualización de una posición del array por indice');
myArray[1] = 9;
console.log('Se actualiza la posición 2 con un 9, por lo tanto, el resultado del array es: ', myArray);
