import analyzer from './analyzer.js';
//Modifica los datos en cuanto se registran unos nuevos, permitiendo su actualización
const IngresaTuTexto = document.querySelector("textarea");
const LimpiarMet = document.getElementById("reset-button");
const Numeros=document.querySelector("li[data-testid= 'number-count']");
const Palabras=document.querySelector("li[data-testid= 'word-count']");
const Caracteres=document.querySelector ("li[data-testid= 'character-count']");
const Suma=document.querySelector ("li[data-testid= 'number-sum']");
const PromLongi=document.querySelector("li[data-testid= 'word-length-average']");
const CaraEs=document.querySelector('[data-testid="character-no-spaces-count"]');
const Numeross = Numeros.innerHTML;
const Palabrass = Palabras.innerHTML;
const Caracteress = Caracteres.innerHTML;
const Sumaa = Suma.innerHTML;
const PromLongitud = PromLongi.innerHTML;
const CaraEspacios = CaraEs.innerHTML;

IngresaTuTexto.addEventListener('input', resultados)

LimpiarMet.addEventListener("click", function () { //Agrega un evento de escucha al boton cuando den click.
  IngresaTuTexto.value = ""; //Elimina las métricas
  Palabras.innerHTML = "Palabras: 0";
  Caracteres.innerHTML = "Caracteres: 0";
  CaraEs.innerHTML = "Caracteres sin espacios: 0";
  Numeros.innerHTML = "Numeros: 0";
  Suma.innerHTML = " Suma Números: 0";
  PromLongi.innerHTML = "Promedio Longitud: 0";
});

function resultados(valor) {
  Caracteres.innerHTML = Caracteress + analyzer.getCharacterCount(valor.target.value);
  Palabras.innerHTML = Palabrass + analyzer.getWordCount(valor.target.value);
  CaraEs.innerHTML = CaraEspacios + analyzer.getCharacterCountExcludingSpaces(valor.target.value);
  Numeros.innerHTML = Numeross + analyzer.getNumberCount(valor.target.value);
  Suma.innerHTML = Sumaa + analyzer.getNumberSum(valor.target.value);
  PromLongi.innerHTML = PromLongitud + analyzer.getAverageWordLength(valor.target.value);
}



