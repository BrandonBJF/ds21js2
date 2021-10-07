var numale = [], numale2 = [], pasos1 = 0, pasos2 = 0;

for(var i = 0; i < 10000; i++){
	numale[i] = Math.round(Math.random()*1000);
	numale2[i] = numale[i];
}

function swap1(ini,min) {
	var aux = numale[ini];
	numale[ini] = numale[min];
	numale[min] = aux;
}

console.time("Tiempo Bubble");
function bubble(numale){
	for (var i = 0; i < numale.length; i++){ 
		for (var j = 0; j < numale.length - 1; j++ ){ 
			if (numale[j] > numale[j+1]){ 
				swap1(j, j+1);
				pasos1++;
			}
		}
	}
}
console.timeEnd("Tiempo Bubble");

console.time("Tiempo Selection");
function selecti(numale2){
	for (var i = 0; i < numale2.length - 1; i++){ 
		var minimo = numale2[i];
		var posicion = i;
		for (var j = i + 1; j < numale2.length; j++){ 
			if(numale2[j] < minimo){
				minimo = numale2[j];
				posicion = j; 
				pasos2++;
			}
		}

		if (posicion != minimo){
			var aux = numale2[i];
			numale2[i] = numale2[posicion];
			numale2[posicion] = aux;
		}
	}
}
console.timeEnd("Tiempo Selection");

console.log("Números generados(bubble): " + numale);
bubble(numale);
console.log("Números ordenados(bubble): " + numale);

console.log("Números generados(Selection): " + numale2);
selecti(numale2);
console.log("Números ordenados(Selection): " + numale2);
console.log("Los pasos para el metodo de Bubble: " + pasos1);
console.log("Los pasos para el metodo de Selection: " + pasos2);
