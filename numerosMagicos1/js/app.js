// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let numeroMagico;

function comenzarJuego() {
  numeroMagico = getRandomArbitrary(1, 101);
  console.log(numeroMagico);
  let btnComenzar = document.getElementById("btnComenzar");
  btnComenzar.className = "btn btn-secondary btn-lg";
  btnComenzar.innerHTML = "El juego comenzo";
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function consultarNumero() {
  let numeroIngresado = document.querySelector("#numeroIngresado").value;
  let mensaje = document.getElementById("msj");
  if (numeroIngresado == numeroMagico) {
    mensaje.className = "alert alert-info";
    mensaje.innerHTML = "Adivinaste el numero";
  } else if (numeroIngresado > numeroMagico) {
    mensaje.className = "alert alert-info";
    mensaje.innerHTML =
      "Vuelve a intentarlo , el numero magico es MENOR al ingresado";
  } else {
    mensaje.className = "alert alert-info";
    mensaje.innerHTML =
      "Vuelve a intentarlo , el numero magico es MAYOR al ingresado";
  }
}
