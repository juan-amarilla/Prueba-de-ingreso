// Amarilla Juan Sebastian
// 1A
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
function mostrar()
{
  let nombre;
  let cursada;
  let cantidad;
  let sexo;
  let nota;
  let edad;
  let seguir;

  let nombreMejor="no existe";
  let notaMejor;
  let flag=true;

  let nombreJoven="no existe";
  let edadJoven;
  let flagDos=true;

  let contadorFemenino=0;
  let contadorMasculino=0;
  let contadorNoBinario=0;
  let acumuladorFemenino=0;
  let acumuladorMasculino=0;
  let acumuladorNoBinario=0;
  let promedioFemenino;
  let promedioMasculino;
  let promedioNoBinario;

  let edadMayor="no existe";
  let nombreMayor="no existe";
  let cantidadMayor;
  let flagTres=true;


  do
  {
    nombre=prompt("ingrese nombre");
    while (isNaN(nombre)==false){
      	alert("error: debe tener letras");
      	nombre=prompt("ingrese nombre");
    }

    cursada=prompt("ingrese cursada");
    while(cursada != "libre" && cursada != "presencial" && cursada != "remota"){
        alert("error: debe ser libre, presencial o remota");
        cursada=prompt("ingrese cursada");
    }

    cantidad=parseInt(prompt("ingrese cantidad"));
    while(isNaN(cantidad)==true || cantidad < 1 || cantidad > 7){
      	alert("error: debe ser entre 1 y 7 inclusive");
      	cantidad=parseInt(prompt("ingrese cantidad"));
    }

    sexo=prompt("ingrese sexo");
    while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
        alert("error: debe ser femenino, masculino o no binario");
        sexo=prompt("ingrese sexo");
    }

    nota=parseInt(prompt("ingrese nota"));
    while(isNaN(nota)==true || nota < 0 || nota > 10){
      	alert("error: debe ser entre 0 y 10 inclusive");
      	nota=parseInt(prompt("ingrese nota"));
    }

    edad=parseInt(prompt("ingrese edad"));
    while(isNaN(edad)==true || edad < 18){
      	alert("error: debe ser 18 o mayor");
      	edad=parseInt(prompt("ingrese edad"));
    }

    if (flag==true && sexo != "masculino" || notaMejor < nota && sexo != "masculino") {
       notaMejor=nota;
       nombreMejor=nombre;
       flag=false;
    }

    if (flagDos==true && cursada == "libre" || edad < edadJoven && cursada == "libre") {
        edadJoven=edad;
        nombreJoven=nombre;
        flagDos=false;
    }

    switch(sexo){
    	case "femenino":
        contadorFemenino++;
        acumuladorFemenino+=nota;
    	break;

    	case "masculino":
    	  contadorMasculino++;
        acumuladorMasculino+=nota;
    	break;

    	case "no binario":
    	  contadorNoBinario++;
        acumuladorNoBinario+=nota;
    	break;
    }

    if (flagTres==true && cursada != "remota" || cantidadMayor < cantidad && cursada != "remota") {
        cantidadMayor=cantidad;
        nombreMayor=nombre;
        edadMayor=edad;
        flagTres=false;
    }

    seguir=prompt("quiere seguir? s/n");
  } while(seguir=="s");

  promedioFemenino=acumuladorFemenino/contadorFemenino;
  promedioMasculino=acumuladorMasculino/contadorMasculino;
  promedioNoBinario=acumuladorNoBinario/contadorNoBinario;

  if (contadorFemenino==0) {
    promedioFemenino="no existe";
  }

  if (contadorMasculino==0) {
    promedioMasculino="no existe";
  }
  
  if (contadorNoBinario==0) {
    promedioNoBinario="no existe";
  }

  document.write("el nombre con la mejor nota que no es masculino: " + nombreMejor + "<br>");
  document.write("el nombre del mas joven que la da libre: " + nombreJoven + "<br>");
  document.write("el promedio de femenino: " + promedioFemenino + " , el promedio de masculino: " + promedioMasculino + " , y el promedio no binario: " + promedioNoBinario + "<br>");
  document.write("la edad y el nombre del que cursa mas materias: " + edadMayor + " y el nombre es " + nombreMayor);
  
}
