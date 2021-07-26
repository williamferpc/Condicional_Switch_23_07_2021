
var foo = 10;
var output = 'Salida: ';
switch (foo) {
    case 10:
        output += '¿Y ';
    case 1:
        output += 'Cuál ';
        output += 'Es ';
    case 2:
        output += 'Tu ';
    case 3:
        output += 'Nombre';
    case 4:
        output += '?';
        console.log(output);
        break;
    
    case 5:
        output += '!';
        console.log(output);
        break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}




// let data = 5;
// switch (data<=5) {
//     case true:
//         console.log(`el numero ${data} es menor o igual 5`);
//         break;
//     case false:
//         console.log(`el numero ${data} no es menor o igual 5`);
//         break;
//     default:
//         console.log(`la opcion ${data} no existe`);
//         break;
// }




// switch (data) {
//     case 5:
//         console.log(`Estamos en la opcion ${data}`);
//         break;
//     case 10:
//         console.log(`Estamos en la opcion ${data}`);
//         break;
//     default:
//         console.log(`La opcion ${data} no existe`);
//         break;
// }