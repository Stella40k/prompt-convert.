let respuesta = window.prompt(
  "Ingrese lo que quiera hacer. '1' Si quiere ver el valor de pesos a dolares '2' Si quiere salir"
);
const tipoCambio = 1100;

//convertCurrency es una funcion q recibe un valor, lo transforma y devuelve otro
//el dato q toma se pone dentro de los parentesis

function convertCurrency(entrada) {
  return entrada / tipoCambio;
}

switch (respuesta) {
  case "1":
    let pesos = window.prompt("ingrese la cantidad de pesos");

    let dolares = convertCurrency(pesos);
    window.alert("el total en dolares seria: " + dolares);

    break;
  case "2":
    window.alert("bye bye!");

  default:
    window.prompt("elegí 1 o 2...");
}

//apartado para el array

//crear un objeto tras cada conversion

//array de todo lo q hicimos, es una lista de los objetos que hay dentro de history

let history = []; //este es el arreglo donde se va a guardar todo lo de los datos

let registro = {
  //"registro" es el objeto q se guarda dentro del arreglo "history"

  tipo: "divisa",
  entrada: "${pesos} pesos argentinos",
  salida: "{dolares.toFixed(2)} dolares", //".toFixed(2)" es para redondear la conversion, q no muestre tanto los decimales
  fecha: new Date().toLocaleDateString(),
};

//registro= cada q el usuario hace una conversion individual (cada q hace una conversion)
//se guarda en registro
//history= es una lista donde se guardn toddas las conversiones y lo muestra como
//un array viendo todas las veces q hizo una conversion

history.push(registro);
//esto hace q se agregue la ultima conversion q se hizo
//agrega nuevos elementos al final del array (en el history), no modifica el anterior sino q agrega lo nuevo

console.log(history);
