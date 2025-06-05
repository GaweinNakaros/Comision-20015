console.log("hola mundo");


// let es una palabra clave para declarar variables en JavaScript
// Las variables son contenedores para almacenar datos
// En este caso, estamos declarando una variable llamada mensaje
// que contiene un texto.
let mensaje = "Hola, mundo!"; // Esta es una variable que contiene contenido tipo texto
// el tipado es dinámico, por lo que no es necesario especificar el tipo de dato
// igualmente podes declarar el tipo de dato con int o string, pero no es necesario

function mostrarMensaje() { // Esta es una función que muestra un mensaje en la consola
  // Esta función imprime el mensaje en la consola
    console.log(mensaje);
}
mostrarMensaje();// Llamada a la función para mostrar el mensaje

const IVA = 0.21; // Esta es una constante que contiene el valor del IVA
// Las constantes son variables cuyo valor no puede cambiar una vez asignado
// se recomiendan declarar con mayúsculas para diferenciarlas de las variables
let precioSinIVA = parseInt(prompt("Ingrese el precio sin IVA: ")); 
// prompt es una función que muestra un cuadro de diálogo para que el usuario ingrese un valor
// parseInt es una función que convierte un valor a un número entero
// si se ingresa un valor no numérico al principio, se convierte a NaN (Not a Number) 
// pero si se ingresa un valor no numérico en el medio o al final, se convierte a un número entero
// por ejemplo, si se ingresa "100abc", se convierte a 100
// si se ingresa "abc100", se convierte a NaN
// si se ingresa "100.5", se convierte a 100
// tambien tenemos parseFloat, que convierte un valor a un número decimal
// y Number, que convierte un valor a un número, pero no es necesario especificar el tipo de dato
function calcularPrecioConIVA(precio) { // Esta función calcula el precio con IVA
    // Esta función recibe un precio y devuelve el precio con IVA
  return precio * (1 + IVA); // Retorna el precio con IVA
}

function mostrarPrecioConIVA(precio) { // Esta función muestra el precio con IVA
  const precioConIVA = calcularPrecioConIVA(precio); // Llama a la función para calcular el precio con IVA 
    console.log(`El precio con IVA es: ${precioConIVA}`); // Imprime el precio con IVA en la consola
    return precioConIVA; // Retorna el precio con IVA
}

let precioConIVA = mostrarPrecioConIVA(precioSinIVA); // Llama a la función para mostrar el precio con IVA de 100

// Ejemplo de uso de variables booleanas y funciones
// Las variables booleanas son variables que pueden tener dos valores: true o false
let socio = confirm("Es socio"); // Esta es una variable booleana que indica si el usuario es socio o no
let nuemerodesocio = prompt("Ingrese su número de socio"); // Esta es una variable que contiene el número de socio ingresado por el usuario
// confirm es una función que muestra un cuadro de diálogo con dos botones: Aceptar y Cancelar
// Si el usuario hace clic en Aceptar, la variable socio será true, si hace clic en Cancelar, será false
function mostrarDescuento(precio) { // Esta función muestra el descuento si el usuario es socio
  if (socio) { // Si el usuario es socio
    const descuento = precio * 0.1; // Calcula el descuento del 10%
    console.log(`El descuento es: ${descuento}`); // Imprime el descuento en la consola
  } else {
    console.log("No eres socio, no tienes descuento"); // Si no es socio, muestra un mensaje
  }
}
mostrarDescuento(precioConIVA); // Llama a la función para mostrar el descuento de 100

//document.writeln lo usomos para mostrar el número de socio ingresado por el usuario en la página
// Es similar a console.log, pero muestra el mensaje en la página web en lugar de la consola
document.writeln("Número de socio: " + nuemerodesocio);
// writeln es una función que muestra un mensaje en la consola y escribe una nueva línea en el documento HTML
// document es un objeto que representa el documento HTML actual 


// los == y === son operadores de comparación
// == compara si dos valores son iguales, pero no verifica el tipo de dato 
// === compara si dos valores son iguales y verifica el tipo de dato
// por ejemplo, 1 == "1" es true, pero 1 === "1" es false
// != y !== son operadores de comparación que verifican si dos valores son diferentes
// != compara si dos valores son diferentes, pero no verifica el tipo de dato
// !== compara si dos valores son diferentes y verifica el tipo de dato
// por ejemplo, 1 != "1" es false, pero 1 !== "1" es true
// <, >, <=, >= son operadores de comparación que verifican si un valor es menor, mayor, menor o igual, mayor o igual que otro valor numérico
// por ejemplo, 1 < 2 es true, 2 > 1 es true, 1 <= 1 es true, 2 >= 1 es true    
// && es el operador lógico AND, que verifica si dos condiciones son verdaderas 
// || es el operador lógico OR, que verifica si al menos una de las dos condiciones es verdadera
// ! es el operador lógico NOT, que invierte el valor de una condición
// por ejemplo, !(1 < 2) es false, ya que 1 < 2 es true, y el operador NOT invierte el valor a false
