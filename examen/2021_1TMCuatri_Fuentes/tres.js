// Amarilla Juan Sebastian
// 1A
/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
  let nombre;
  let estado;
  let edad;
  let temperatura;
  let sexo;
  let precioPasajero=600;
  let seguir;

  let contadorViudoMayor=0;

  let nombreJoven;
  let edadJoven;
  let flag=true;
  let contadorMujer=0;

  let i=0;
  let viajeTotal;

  let descuento;
  let porcentaje;
  let precioTotal;
  let precioConDescuento;
  let contadorMayor=0;
  let resultadoMayor;

  do  
  {  
    nombre=prompt("ingrese nombre");
    while (isNaN(nombre)==false){
      	alert("error: debe tener letras");
      	nombre=prompt("ingrese nombre");
    }

    estado=prompt("ingrese estado");
    while(estado != "soltero" && estado != "casado" && estado != "viudo"){
        alert("error: debe ser soltero, casado o viudo");
        estado=prompt("ingrese estado");
    }

    edad=parseInt(prompt("ingrese edad"));
    while(isNaN(edad)==true || edad < 17){
      	alert("error: debe ser 17 o mayor");
      	edad=parseInt(prompt("ingrese edad"));
    }

    temperatura=parseInt(prompt("ingrese temperatura"));
    while(isNaN(temperatura)==true || temperatura < 36){
      	alert("error: debe ser 36 o mayor");
      	temperatura=parseInt(prompt("ingrese temperatura"));
    }

    sexo=prompt("ingrese sexo");
    while(sexo != "femenino" && sexo != "masculino"){
        alert("error: debe ser femenino o masculino");
        sexo=prompt("ingrese sexo");
    }

    switch(estado){
    	case "soltero":
        if (flag==true  && sexo == "femenino" || edad < edadJoven && sexo == "femenino") {
           edadJoven=edad;
           nombreJoven=nombre;
           contadorMujer++;
           flag=false;
        }
    	break;

    	case "viudo":
    	if (edad > 60) {
           contadorViudoMayor++;
    	}
    	break;
    }

    if (edad > 60) {
       contadorMayor++;
    }


    i++;


    seguir=prompt("quiere seguir? s/n");
  } while(seguir=="s");

  viajeTotal=i*precioPasajero;
  resultadoMayor= i - contadorMayor;

  if (contadorMayor > resultadoMayor) {
    descuento=25;
    precioTotal=i*precioPasajero;
    porcentaje=precioTotal*descuento/100;
    precioConDescuento=precioTotal-porcentaje;
  }

  else if (contadorMayor < resultadoMayor) {
     contadorMayor=0;
  }

  if (contadorViudoMayor!=0) {
  	document.write("la cantidad de viudos mayor a 60: " + contadorViudoMayor + "<br>");
  }

  if (contadorMujer!=0) {
  	 document.write("el nombre y la edad de la mujer soltera mas joven: " + nombreJoven + " , y la edad es " + edadJoven + "<br>");
  }
 
  document.write("sale en total el viaje sin descuento: " + viajeTotal + "<br>");

  if (contadorMayor!=0) {

  	document.write("el precio final con descuento pero por las personas mayores: " + precioConDescuento);
  }
  
}
