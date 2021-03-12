// Amarilla Juan Sebastian
// 1A
/*Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir;

	let contadorProgramador=0;
	let contadorAnalista=0;
	let contadorQa=0;
	let acumuladorProgramador=0;
	let acumuladorAnalista=0;
	let acumuladorQa=0;
	let promedioProgramador;
	let promedioAnalista;
	let promedioQa;

	let flag=true;
	let sexoMayor="no existe";
	let sueldoMayor;

	let flagDos=true;
	let nombreMayor="no existe";
    let sueldoMas;

    let contadorProgramadorNoBinario=0;

	do
	{ nombre=prompt("ingrese nombre");
	  while (isNaN(nombre)==false){
         alert("error: debe tener letras");
         nombre=prompt("ingrese nombre");
	  }

	  edad=parseInt(prompt("ingrese edad"));
	  while (isNaN(edad)==true || edad < 18){
	  	alert("error: debe ser 18 o mayor");
        edad=parseInt(prompt("ingrese edad"));
	  }

	  sexo=prompt("ingrese sexo");
	  while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
         alert("error: debe ser masculino, femenino o no binario");
         sexo=prompt("ingrese sexo");
	  }

	  puesto=prompt("ingrese puesto");
	  while (puesto!="programador" && puesto != "analista" && puesto!= "qa"){
	  	alert("error: debe ser programador, analista o qa");
	  	puesto=prompt("ingrese puesto");
	  }

	  sueldo=parseInt(prompt("ingrese sueldo"));
	  while(isNaN(sueldo)==true || sueldo < 15000 || sueldo > 70000){
	  	 alert("error: debe ser entre 15000 y 70000 inclusive");
	  	 sueldo=parseInt(prompt("ingrese sueldo"));
	  }

	  switch(puesto){
	  	    case "programador":
            contadorProgramador++;
            acumuladorProgramador+=sueldo;
            if (sexo== "no binario" && sueldo >= 20000 && sueldo <= 55000) {
               contadorProgramadorNoBinario++;
            }
	  	    break;

	  	    case "analista":
	  	    contadorAnalista++;
            acumuladorAnalista+=sueldo;
	  	    break;

	  	    case "qa":
	  	    contadorProgramador++;
            acumuladorQa+=sueldo;
	  	    break;
	  }

	  if (flag == true || sueldoMayor < sueldo) {
          sueldoMayor=sueldo;
          sexoMayor=sexo;
          flag=false;
	  }

	  if (flagDos == true && sexo == "femenino" || sueldoMas < sueldo && sexo == "femenino") {
         sueldoMas=sueldo;
         nombreMayor=nombre;
         flagDos=false;
	  }

      seguir=prompt("quiere seguir? s/n");
	} while(seguir=="s");

	promedioProgramador=acumuladorProgramador/contadorProgramador;
	promedioAnalista=acumuladorAnalista/contadorAnalista;
	promedioQa=acumuladorQa/contadorQa;

	if (contadorProgramador==0) {
       promedioProgramador="no existe";
	}

	if (contadorAnalista==0) {
       promedioAnalista="no existe";
	}

	if (contadorQa==0) {
       promedioQa="no existe";
	}

	if (contadorProgramadorNoBinario==0) {
        contadorProgramadorNoBinario="no existe";
	}

	document.write("el promedio de sueldo de programador: " + promedioProgramador + " , promedio de analista: " + promedioAnalista + " , y promedio de qa: " + promedioQa + "<br>");
	document.write("el sexo con mayor sueldo: " + sexoMayor + "<br>");
	document.write("el nombre de la mujer con mas sueldo: " + nombreMayor + "<br>");
	document.write("la cantidad de programadores no binarios que cobran entre 20000 y 55000: " + contadorProgramadorNoBinario);

}
