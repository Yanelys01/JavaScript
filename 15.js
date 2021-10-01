/*Condicionales -Switch*/
let nombre = prompt("Ingresa tu nombre");
let edad = prompt("ingresa tu edad");

switch (edad>=18) {
    case "18":
        alert("Tienes acceso al cátalogo de peliculas violentas");
        break;

        case "25":
            alert("Tienes acceso al cátalogo de peliculas violentas");
            break;

            case "35":
                alert ("Tienes acceso al cátalogo de peliculas violentas");
                break;

    default:
        alert("Debes tener 20 para acceder al catálogo");
        break;
}