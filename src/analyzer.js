const analyzer = {


  getWordCount: (CuadroTexto) => { 
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `CuadroTexto` de tipo `string`.
    let texto = 0; //Declaramos la variable con nombre texto.
    const words = CuadroTexto.split(' '); //Se declara la constante palabras que quita los espacios iniciales, finales y repetidos del texto..
    //El texto se dividira en palabras cada vez que se encuentre uno o mas espacios en blanco.
    for (let i = 0; i < words.length; i++) { //Declaramos que mientras i sea menor que la longitud de words. Después de cada iteración, i se incrementa en 1 (i++).
      if (words[i] !== '') { // Se  verifica si la palabra actual no está vacía.
        texto++; //Si la palabra no está vacía, se incrementa la variable texto en 1. 
      }
    }
    return texto
  },

  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `CuadroTexto` de tipo `string`.
  getCharacterCount: (CuadroTexto) => {
    const caracteres = CuadroTexto.length;  // La constante se utiliza para almacenar el resultado del numero de caracteres ingresados en la cadena de texto
    return caracteres;  // Regresa el valor almacenado en numberschars que son los caracteres en la cadena de texto 
  },

  getCharacterCountExcludingSpaces: (CuadroTexto) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const CaraEs = CuadroTexto.replace(/\s+/g, '').replace(/[.,:;_?¡¿!"'()[\]{}«»]/g, '');// Elimina todos los espacios y los signos de puntuacion y los reemplaza.
    return CaraEs.length;// Nos regresa la longitud de la cadena excluyendo los espacios y caracteres.
  },

  getAverageWordLength: (CuadroTexto) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const texto = CuadroTexto.trim().split(/\s+/).filter(word => word !== '');//Se eliminan espacios, se divide la cadena con la expresion regular, se aplica un filtro pala eliminar palabras vacias.
    let totallongitud = 0; //Variable que se inicializa en 0 y llevara el registro de la longitud total de las palabras. 
    for (let i = 0; i < texto.length; i++) {// Bucle que nos ayuda a sumar todas las longitudes de las palabras.
      totallongitud += texto[i].length;
    }
    const prom = texto.length > 0 ? totallongitud / texto.length : 0;// Si el numero de palabras es mayor a cero se divide la suma de las longitudes entre el numero de palabras 
    return Math.round(prom * 100) / 100;//Redondea el promedio a dos decimales y nos lo da
  },

  getNumberCount: (CuadroTexto) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = CuadroTexto.split(/\s+/).filter(word => /^\d+(\.\d+)?$/.test(word));//Divide la linea de texto en cada espacio, agrega una condicion con la expresio regular y corrobora que sea un numero y no na palabra.
    return numbers.length; //Nos devuelve la longitud de numbers.
  },

  getNumberSum: (CuadroTexto) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = CuadroTexto.match(/\d+(\.\d+)?/g) || [];//Busca y extrae los numeros en el texto, mediante la expresion regular obtiene numeros enteros y decimales y nos indica si hay o no numeros.
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0); //Saber si hay numero enteros
    return Math.round(sum * 100) / 100;
  },
};

export default analyzer;
