var arreglo = [1,2,3,4,5,6,7,8,9];

//Imprimimos el arreglo
console.log("Valores del arreglo: " + arreglo);

//Eliminamos varios valores del arreglo
//arreglo.splice(posicion,numero de elementos a eliminar);
arreglo.splice(6,3);

//Imprimimos el arreglo actualizado
console.log("Valores del arreglo actualizado: " + arreglo);