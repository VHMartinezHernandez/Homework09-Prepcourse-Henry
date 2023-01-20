/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var matriz = [];
   for (prop in objeto){
      matriz.push ([prop, objeto[prop]]);
   }
return matriz;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {}
   for (let i = 0; i < string.length ; i++){
      if (objeto.hasOwnProperty(string[i]) ){
         objeto[string[i]] = objeto[string[i]] + 1;
      }
      else{
         objeto[string[i]] = 1;
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = '';
   var minus = '';
   for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         mayus = mayus + string[i];
      }
      else{
         minus = minus + string[i];
      }
   }
   return mayus+minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var newFrase = [];

for (var i= 0; i < frase.length ; i++){
    newFrase.unshift (frase[i]);
}

return(newFrase.join('').split(' ').reverse().join(' '));

   

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var read = numero.toString().split('').reverse().join('');
   var numero2 = parseInt(read);

   if (numero === numero2){
      return 'Es capicua';
   }
   else {
      return 'No es capicua';


   }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var str = string.split('').filter((e)=> e != 'a' && e != 'b' && e != 'c').join('')
   return str;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   

for (let i = 0 ; i < arrayOfStrings.length ; i++){

    for (let j = i + 1 ; j < arrayOfStrings.length ; j++){

        if ( arrayOfStrings[i].length > arrayOfStrings[j].length){

            let aux = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[j];
            arrayOfStrings[j] = aux 
        }

    }
    
}

return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arregl[4,2,3] U [1,3,4]o en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]:  = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:let newArr = [];
   let newArr = [];
for ( let i = 0 ; i < array1.length ; i++){
   if ( array2.includes(array1[i])){
       newArr.push(array1[i]);
   }
}

return newArr;

   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
