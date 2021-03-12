// Amarilla Juan Sebastian
// 1A
/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/
function mostrar()
{
   let nombre;
   let cantidad;
   let marca;
   let precio;
   let seguir;

   let descuento;
   let porcentaje;
   let precioTotal;
   let precioUltimo;
   let acumuladorPrecioUltimoFelipe=0;
   let acumuladorPrecioUltimoArgentina=0;
   let acumuladorPrecioUltimoIlluminatis=0;

   let totalFelipe;
   let totalArgentina;
   let totalIlluminatis;

   let contadorPerdidaFelipe=0;
   let contadorPerdidaIlluminatis=0;
   let contadorPerdidaArgentina=0;
   let perdidaFelipe;
   let perdidaIlluminatis;
   let perdidaArgentina;


   let contadorFelipe=0;
   let contadorArgentina=0;
   let contadorIlluminatis=0;
   let acumuladorFelipe=0;
   let acumuladorArgentina=0;
   let acumuladorIlluminatis=0;
   let promedioFelipe;
   let promedioArgentina;
   let promedioIlluminatis;

   let marcaMayor;



   do
   {  nombre=prompt("ingrese nombre");
	  while (isNaN(nombre)==false){
         alert("error: debe tener letras");
         nombre=prompt("ingrese nombre");
	  }

	  cantidad=parseInt(prompt("ingrese cantidad de lamparas"));
	  while(isNaN(cantidad)==true || cantidad < 1){
	  	 alert("error: debe ser 1 o mayor");
	  	 cantidad=parseInt(prompt("ingrese cantidad de lamparas"));
	  }

	  marca=prompt("ingrese marca");
	  while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis"){
         alert("error: debe ser felipelamparas, argentinaluz o illuminatis");
         marca=prompt("ingrese marca");
	  }

	  precio=parseInt(prompt("ingrese precio"));
	  while(isNaN(precio)==true || precio < 1){
	  	 alert("error: debe ser 1 o mayor");
	  	 precio=parseInt(prompt("ingrese precio"));
	  }

	  switch(marca){
            case "felipelamparas":
            contadorFelipe++;
            acumuladorFelipe+=cantidad;
            if (cantidad > 5) {
              contadorPerdidaFelipe++;
              descuento=10;
              precioTotal=cantidad*precio;
              porcentaje=precioTotal*descuento/100;
              precioUltimo=precioTotal-porcentaje;
              acumuladorPrecioUltimoFelipe+=precioUltimo;
            }

            else {
            	precioTotal=cantidad*precio;
            	acumuladorPrecioUltimoFelipe+=precioTotal;
            }
            break;

            case "illuminatis":
            contadorIlluminatis++;
            acumuladorIlluminatis+=cantidad;
            precioTotal=cantidad*precio;
            acumuladorPrecioUltimoIlluminatis+=precioTotal;
            break;

            case "argentinaluz":
            contadorArgentina++;
            acumuladorArgentina+=cantidad;
            if (cantidad >= 3) {
              contadorPerdidaArgentina++;
              descuento=5;
              precioTotal=cantidad*precio;
              porcentaje=precioTotal*descuento/100;
              precioUltimo=precioTotal-porcentaje;
              acumuladorPrecioUltimoArgentina+=precioUltimo;
            }

            else {
            	precioTotal=cantidad*precio;
            	acumuladorPrecioUltimoArgentina+=precioTotal;
            }
            break;
	  }

     seguir=prompt("quiere seguir? s/n");
   } while(seguir=="S");

   totalFelipe=acumuladorPrecioUltimoFelipe;
   totalArgentina=acumuladorPrecioUltimoArgentina;
   totalIlluminatis=acumuladorPrecioUltimoIlluminatis;

   perdidaFelipe=contadorPerdidaFelipe*10;
   perdidaIlluminatis=contadorPerdidaIlluminatis*0;
   perdidaArgentina=contadorPerdidaArgentina*5;

   promedioFelipe=acumuladorFelipe/contadorFelipe;
   promedioIlluminatis=acumuladorIlluminatis/contadorIlluminatis;
   promedioArgentina=acumuladorArgentina/contadorArgentina;

   if (acumuladorPrecioUltimoFelipe > acumuladorPrecioUltimoIlluminatis && acumuladorPrecioUltimoFelipe > acumuladorPrecioUltimoArgentina) {
       marcaMayor="felipelamparas";
   }

   if (acumuladorPrecioUltimoIlluminatis > acumuladorPrecioUltimoFelipe && acumuladorPrecioUltimoIlluminatis > acumuladorPrecioUltimoArgentina) {
       marcaMayor="illuminatis";
   }

   if (acumuladorPrecioUltimoArgentina > acumuladorPrecioUltimoFelipe && acumuladorPrecioUltimoArgentina > acumuladorPrecioUltimoIlluminatis) {
       marcaMayor="argentinaluz";
   }

   document.write("las ventas de felipe: " + totalFelipe + ", ventas de argentina: " + totalArgentina + " , ventas de illuminatis: " + totalIlluminatis + "<br>");
   document.write("la perdida de felipe en descuentos: " + perdidaFelipe + ", perdida de illuminatis: " + perdidaIlluminatis + " , y perdida de argentina: " + perdidaArgentina + "<br>");
   document.write("promedio de felipe: " + promedioFelipe + " promedio de illuminatis: " + promedioIlluminatis + " , y promedio de argentina: " + promedioArgentina + "<br>");
   document.write("la marca que realizo la mayor parte de ventas: " + marcaMayor);
    
}
