// declaración de parametro "numero "
function encontrarNumero(numero){
// declaración de variable 
let numeroMayor = numero[0] //inicia con la primera posicion del arreglo
// se declara ciclo for para recorrer el arreglo 
for(let i = 1; i <numero.length; i++){

    if(numero[i] > numeroMayor){
        numeroMayor = numero[i];
    }
}
return numeroMayor;
}