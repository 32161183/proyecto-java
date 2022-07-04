
let option = prompt(`Elija la cantidad de cuotas:
1: cero Interes
3: 25% Interes
6: 55% Interes
`)

switch (option) {
    case "1":
     console.log("Cero Interes");
        break;
    case "3":
    console.log("25% Interes");
       break;
    case "6":
    console.log("55% Interes")       
       
    default:
        console.log("No ingresaste nada")
        break;
        }