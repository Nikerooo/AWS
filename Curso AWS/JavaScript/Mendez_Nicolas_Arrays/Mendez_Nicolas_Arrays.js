
var arr1 = [8, 6, 7, 5, 3, 0, 9];
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var arr3 = [6, 2, 12, 14, -24, 5, 0];
var i;    //Como usamos varios for, declaramos a i en modo general para no declararla varias veces

/*  1)  */
for(i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}


/*  2)  */

var suma=0;   //Creamos un acumulador y lo iniciamos en 0 para este ejercicio

for(i=0; i<arr2.length;i++){
    suma = suma + arr2[i];           //Tambien se podria hacer suma += arr2[i]
    console.log(`la suma es: ${suma}`);
    console.log(`el indice es ${i}, y el valor guardado en el array es: ${arr[i]}`);
}


/*  3)  */

for(i=0; i<arr3.length; i++){
    if(arr3[i]>5){
        console.log(arr3[i]);
    }else{
        arr3[i] = 'No hay dados';
    }
}