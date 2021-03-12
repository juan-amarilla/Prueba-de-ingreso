// Amarilla Juan Sebastian
// 1A
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
  let nombre;
  let tipo;
  let precio;
  let unidad;
  let tipoInflamable;
  let marca;

  let contadorAlcohol=0;
  let contadorIac=0;
  let contadorQuat=0;
  let acumuladorAlcohol=0;
  let acumuladorIac=0;
  let acumuladorQuat=0;
  let promedioAlcohol;
  let promedioIac;
  let promedioQuat;

  let acumuladorIgnifugo=0;
  let acumuladorCombustible=0;
  let acumuladorExplosivo=0;
  let tipoMas;

  let acumuladorIacMenos=0;

  let flag=true;
  let marcaCaro;
  let tipoCaro;
  let precioMayor;


  for(let i=0;i<5;i++){

      nombre=prompt("ingrese nombre");
      while (isNaN(nombre)==false){
      	alert("error: debe tener letras");
      	nombre=prompt("ingrese nombre");
      }

      tipo=prompt("ingrese producto");
      while(tipo != "alcohol" && tipo != "iac" && tipo != "quat"){
        alert("error: debe ser alcohol, iac o quat");
        tipo=prompt("ingrese producto");
      }

      precio=parseInt(prompt("ingrese precio"));
      while(isNaN(precio)==true || precio < 100 || precio > 300){
      	alert("error: debe ser entre 100 y 300 inclusive");
      	precio=parseInt(prompt("ingrese precio"));
      }

      unidad=parseInt(prompt("ingrese unidad"));
      while(isNaN(unidad)==true || unidad < 1 || unidad > 1000){
      	alert("error: debe ser entre 1 y 1000 inclusive");
      	unidad=parseInt(prompt("ingrese unidad"));
      }
    
      tipoInflamable=prompt("ingrese tipo de inflamable");
      while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo"){
        alert("error: debe ser ignifugo, combustible o explosivo");
        tipoInflamable=prompt("ingrese tipo de inflamable");
      }

      marca=prompt("ingrese marca");
      while (isNaN(marca)==false){
      	alert("error: debe tener letras");
      	marca=prompt("ingrese marca");
      }

      switch(tipo){
            case "alcohol":
            contadorAlcohol++;
            acumuladorAlcohol+=unidad;
            break;

            case "iac":
            contadorIac++;
            acumuladorIac+=unidad;
            if (precio <= 200) {
              acumuladorIacMenos+=unidad;
            }
            break;

            case "quat":
            contadorQuat++;
            acumuladorQuat+=unidad;
            break;
      }

      switch(tipoInflamable){
      	    case "ignifugo":
            acumuladorIgnifugo+=unidad;
      	    break;

      	    case "combustible":
      	    acumuladorCombustible+=unidad;
      	    break;

      	    case "explosivo":
      	    acumuladorExplosivo+=unidad;
      	    break;
      }

      if (flag==true || precioMayor < precio) {
          precioMayor=precio;
          marcaCaro=marca;
          tipoCaro=tipo;
          flag=false;
      }
  }

  promedioAlcohol=acumuladorAlcohol/contadorAlcohol;
  promedioIac=acumuladorIac/contadorIac;
  promedioQuat=acumuladorQuat/contadorQuat;

  if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) {
      tipoMas="ignifugo";
  }
  else if (acumuladorCombustible > acumuladorIgnifugo && acumuladorCombustible > acumuladorExplosivo) {
      tipoMas="combustible";
  }
  else if (acumuladorExplosivo > acumuladorIgnifugo && acumuladorExplosivo > acumuladorCombustible) {
      tipoMas="explosivo";
  }

  document.write("el promedio de alcohol; " + promedioAlcohol + ", promedio de iac; " + promedioIac + " y el promedio quat; " + promedioQuat + "<br>");
  document.write("el tipo de inflamable con mas unidades: " + tipoMas + "<br>");
  document.write("la cantidad total de iac pero el precio igual o menor a 200: " + acumuladorIacMenos + "<br>");
  document.write("la marca y el tipo entre los productos mas caros: " + marcaCaro + " y el tipo es " + tipoCaro);
}
  
