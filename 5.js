
let datos = document.getElementById("datos");

//Funcion
const nombreUsuario = () => {
  let nombre = prompt("Ingresa tu nombre");

  alert(" Tu nombre es: " + nombre);

  //  console.log(nombretres);

  // numero = "Mary";
  // console.log(numero);
};

//Funcion vacia
datos.onclick = function () {
  nombreUsuario();
};
