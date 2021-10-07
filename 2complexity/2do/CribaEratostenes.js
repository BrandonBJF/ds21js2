var num;

num = parseInt(prompt("Ingresa el limite: "));

var numprimo = [];

for(var i = 0; i < num; i++){
	numprimo[i] = true;
}

for(var i = 2; i <= num; i++){
	for(var j = 2; i*j < num; j++){
		numprimo[i*j] = false;
	}
}

for(var i = 2; i < num; i++){
	if(numprimo[i])
		console.log("Números primos: " + i + " ");
}