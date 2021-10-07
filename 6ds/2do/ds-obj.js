var objeto = {};
var nombre = [];
var cont = 0;
var tiempo = 0;

var tama = prompt("Ingresa el tamaño del objeto: ");

const  agregar  =  ( clave ,  valor )  =>  objeto [ clave ]  =  valor ; 

while(cont < 7){
	var comienzo = new Date();
	for(var i = 0; i < tama; i++){
		nombre[i] = parseInt(Math.random() * tama);
		agregar ("Nombre" + nombre[i]);
	}

	cont++;
	var final = new Date();
	tiempo = final - comienzo;
	console.log("Tiempo por interaccion: " + tiempo);
}

console.log("El promedio de las 7 interacciones es: " + tiempo / 7 + " ms");
console.log(objeto);