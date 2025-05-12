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
