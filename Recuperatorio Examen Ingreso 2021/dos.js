// Amarilla Juan Sebastian
// 1A
/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
function mostrar()
{
   let nombre;
   let carrera;
   let sexo;
   let cantidad;
   let nota;
   let edad;
   let seguir;

   let nombreMejor="no existe";
   let notaMejor;
   let flag=true;

   let flagDos=true;
   let edadJoven;
   let nombreJoven="no existe";

   let i=0;
   let contadorQuimica=0;
   let contadorFisica=0;
   let contadorSistemas=0;
   let porcentajeQuimica;
   let porcentajeFisica;
   let porcentajeSistemas;

   let edadMayor="no existe";
   let nombreMayor="no existe";
   let cantidadMayor;
   let flagTres=true;

   do
   { nombre=prompt("ingrese nombre");
	  while (isNaN(nombre)==false){
         alert("error: debe tener letras");
         nombre=prompt("ingrese nombre");
	  }

	  carrera=prompt("ingrese carrera");
	  while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
         alert("error: debe ser quimica, fisica o sistemas");
         carrera=prompt("ingrese carrera");
	  }

	  sexo=prompt("ingrese sexo");
	  while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
         alert("error: debe ser masculino, femenino o no binario");
         sexo=prompt("ingrese sexo");
	  }

	  cantidad=parseInt(prompt("ingrese cantidad de materias"));
	  while(isNaN(cantidad)==true || cantidad < 1 || cantidad > 5){
	  	 alert("error: debe ser entre 1 y 5 inclusive");
	  	 cantidad=parseInt(prompt("ingrese cantidad de materias"));
	  }

	  nota=parseInt(prompt("ingrese nota"));
	  while(isNaN(nota)==true || nota < 0 || nota > 10){
	  	 alert("error: debe ser entre 0 y 10 inclusive");
	  	 nota=parseInt(prompt("ingrese nota"));
	  }

	  edad=parseInt(prompt("ingrese edad"));
	  while (isNaN(edad)==true || edad < 18){
	  	alert("error: debe ser 18 o mayor");
        edad=parseInt(prompt("ingrese edad"));
	  }

	  if (flag==true && carrera == "fisica" || notaMejor < nota && carrera == "fisica") {
          notaMejor=nota;
          nombreMejor=nombre;
          flag=false;
	  }

	  if (flagDos=true && sexo == "femenino" || edad < edadJoven && sexo == "femenino") {
         edadJoven=edad
         nombreJoven=nombre;
         flagDos=false;
	  }

	  switch(carrera){
	  	    case "quimica":
            contadorQuimica++;
	  	    break;

	  	    case "fisica":
	  	    contadorFisica++;
	  	    break;

	  	    case "sistemas":
	  	    contadorSistemas++;
	  	    break;
	  }

	  if (flagTres==true && carrera != "quimica" || cantidadMayor < cantidad && carrera != "quimica") {
         cantidadMayor=cantidad;
         edadMayor=edad;
         nombreMayor=nombre;
         flagTres=false;
	  }

	  i++;


     seguir=prompt("quiere seguir? s/n");
   } while(seguir=="s");

   porcentajeQuimica= contadorQuimica * 100 / i;
   porcentajeFisica= contadorFisica * 100 / i;
   porcentajeSistemas= contadorSistemas * 100 / i;

   if (contadorQuimica==0) {
      porcentajeQuimica="no existe";
   }

   if (contadorFisica==0) {
      porcentajeFisica="no existe";
   }

   if (contadorSistemas==0) {
      porcentajeSistemas="no existe";
   }

   document.write("el alumno con mejor nota en fisica: " + nombreMejor + "<br>");
   document.write("la alumna mas joven: " + nombreJoven + "<br>");
   document.write("el porcentaje de quimica: " + porcentajeQuimica + " , porcentaje de fisica: " + porcentajeFisica + " , y porcentaje de sistemas: " + porcentajeSistemas + "<br>");
   document.write("la edad y el nombre que cursa mas materias pero no en quimica: " + edadMayor + " , y el nombre es: " + nombreMayor);
}
